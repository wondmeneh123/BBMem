import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Ensure you're using 'useParams' to extract the chapterId from URL
import Header from "../Components/Header";
import ask from "../assets/ask.png";
import answer from "../assets/answer.png";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../fb"; // Import your Firebase Firestore configuration
import loadingd from "../assets/loading.png";
const Cards = () => {
  const { chapterId } = useParams(); // Destructure 'chapterId' from useParams
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true); // Start loading
        console.log("Fetching cards for chapterId:", chapterId); // Log the chapterId

        // Reference to Firestore cards collection
        const cardsRef = collection(db, "cards");

        // Query to fetch cards where chapterId matches the one in the URL
        const q = query(cardsRef, where("chapterId", "==", chapterId));

        // Fetch the query results
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          // Map through the query results to get the data
          const fetchedCards = querySnapshot.docs.map((doc) => doc.data());
          setCards(fetchedCards); // Set the fetched cards to state
        } else {
          console.log("No cards found for this chapterId!");
        }
      } catch (error) {
        console.error("Error fetching cards:", error); // Log any errors
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchCards(); // Fetch cards when component mounts or chapterId changes
  }, [chapterId]); // hapterId]); // Depend on chapterId so it triggers re-fetch if chapterId changes

  // Handle flip of the flashcard
  const handleFlip = () => setIsFlipped(!isFlipped);

  // Handle Next Button
  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle Prev Button
  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Show loading message while fetching cards
  if (loading) {
    return (
      <div className="h-screen w-full bg-gradient-to-r from-pink-200 flex items-center flex-col justify-center to-purple-300">
        <img src={loadingd} width={300} height={300} />
        <h2 className="text-white text-4xl">Loading ...</h2>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-pink-200 to-purple-300 min-h-screen flex flex-col items-center justify-center">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Content Area */}
      <div className="mt-[150px] mb-[70px] w-full flex flex-col items-center px-4 h-full">
        {currentIndex < cards.length ? (
          <>
            {/* Flashcard */}
            <div
              className={`relative w-80 h-96 bg-white rounded-xl shadow-lg transform-gpu transition-transform duration-500 ${
                isFlipped ? "rotate-y-180" : ""
              }`}
              onClick={handleFlip}
            >
              {/* Front */}
              <div
                className={`absolute w-full h-full flex flex-col justify-center items-center backface-hidden ${
                  isFlipped ? "hidden" : ""
                }`}
              >
                <img src={ask} alt="Question" className="w-32 h-32 mb-2" />
                <h2 className="text-xl font-bold text-purple-600 mt-2 text-center px-4">
                  {cards[currentIndex].question}
                </h2>
              </div>
              {/* Back */}
              <div
                className={`absolute w-full h-full flex flex-col justify-center items-center backface-hidden bg-pink-100 rounded-xl ${
                  isFlipped ? "block" : "hidden"
                }`}
              >
                <img src={answer} alt="Answer" className="w-32 h-32 mb-2" />
                <h2 className="text-xl font-bold text-purple-600 mt-2 text-center px-4">
                  {cards[currentIndex].answer}
                </h2>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                I Know 😄
              </button>
              <button className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                I Didn't Know 😔
              </button>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center w-full max-w-md mt-8">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`${
                  currentIndex === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-400 hover:bg-purple-500"
                } text-white py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300`}
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === cards.length - 1}
                className={`${
                  currentIndex === cards.length - 1
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-400 hover:bg-purple-500"
                } text-white py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300`}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="text-center mt-8">
            <h2 className="text-2xl font-bold text-purple-700">
              🎉 Great Job! 🎉
            </h2>
            <p className="text-lg text-gray-700 mt-2">
              You've completed all the cards! Keep up the amazing work.
            </p>
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg mt-4 inline-block"
            >
              Go Home 🏠
            </Link>
          </div>
        )}
      </div>

      {/* Fixed Bottom Navigation */}
    </div>
  );
};

export default Cards;
