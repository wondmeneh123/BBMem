import React, { useState } from "react";
import Header from "../Components/Header";
import BottomNavigation from "../Components/BottomNavigation";
import ask from "../assets/ask.png";
import answer from "../assets/answer.png";
import { Link } from "react-router-dom";

const ReviewCards = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      question: "What is history, and how is it studied?",
      answer:
        "History is organized knowledge about the past, derived from systematic study and critical interpretation of records. It identifies patterns and provides meanings beyond just documenting events.",
    },
    {
      question: "What is historiography?",
      answer:
        "Historiography is the history of historical writing, analyzing how knowledge of the past has been obtained and transmitted.",
    },
    {
      question: "What are the two main types of historical sources?",
      answer:
        "Primary sources include original artifacts or documents created at the time of events, while secondary sources interpret and analyze primary sources or events retrospectively.",
    },
    {
      question:
        "What is the role of geography in the history of Ethiopia and the Horn?",
      answer:
        "The region’s diverse geography facilitated human interaction, shaping integrated histories through cultural, economic, and political exchanges.",
    },
    {
      question:
        "What distinguishes popular and professional conceptions of history?",
      answer:
        "Professional history employs critical methodologies and cross-examines sources, whereas popular history may prioritize accessibility over accuracy.",
    },
    {
      question: "Good Job! Would you like to go back to the homepage?",
      answer: (
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg mt-4 inline-block"
        >
          Go Home 🏠
        </Link>
      ),
    },
  ];

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

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

export default ReviewCards;
