import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Import useParams
import Header from "../Components/Header";
import ask from "../assets/ask.png";
import answer from "../assets/answer.png";
import loadingd from "../assets/loading.png"; // Loading icon
import BottomNavigation from "../Components/BottomNavigation";

const LocalStorageCards = () => {
  const { chapterId } = useParams(); // Extract chapterId from URL params
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    const responses = JSON.parse(localStorage.getItem("responses")) || [];

    // Filter the responses by chapterId from the URL
    const filtered = responses.filter(
      (response) => response.chapterId === chapterId
    );

    setCards(filtered); // Set the filtered cards
    setLoading(false); // Stop loading once data is fetched from localStorage
  }, [chapterId]);

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

  // Show loading message while fetching cards from localStorage
  if (loading) {
    return (
      <div className="h-screen w-full bg-gradient-to-r from-pink-200 flex items-center flex-col justify-center to-purple-300">
        <img src={loadingd} width={300} height={300} alt="Loading" />
        <h2 className="text-white text-4xl">Loading ...</h2>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-pink-200 to-purple-300 min-h-screen flex flex-col items-center">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Content Area */}
      <div className="mt-[150px] mb-[70px] w-full flex flex-col items-center px-4 h-full">
        {cards.length > 0 ? (
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

            {/* Navigation and Buttons */}
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
      <div className="fixed bottom-0 left-0 w-full z-50">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default LocalStorageCards;
