import { Link } from "react-router-dom";
import BottomNavigation from "../Components/BottomNavigation";
import Header from "../Components/Header";

const Review = () => {
  const chapters = [
    { title: "Chapter 2 & 3", icon: "📘", id: "pXMKx3CR6Bdd7paLTMvI" },
    { title: "Chapter 4", icon: "🌍", id: "FapKkDPMX02RPTeoSPfo" },
    { title: "Chapter 5", icon: "🏛️", id: "sG67sl5dfhwEbEAouHTf" },
    { title: "Chapter 6", icon: "⛪", id: "VO4UnVMh4iBY3MdlNOCb" },
  ];

  return (
    <div className="bg-gradient-to-r from-pink-200 to-purple-300 min-h-screen flex flex-col items-center justify-center">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Content with Zigzag Path */}
      <div className="w-full max-w-4xl mt-[100px] mb-[70px] relative ">
        <h1 className="text-black font-semibold text-center text-3xl">
          Concepts you MISS
        </h1>
        <svg
          viewBox="0 0 400 1600"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-0 w-full h-full"
        >
          <path
            d="M50 50 Q100 150, 150 100 T250 200 Q300 250, 350 300 T250 400 Q200 450, 150 500 T250 600 Q300 650, 350 700 T250 800 Q200 850, 150 900 T250 1000 Q300 1050, 350 1100 T250 1200 Q200 1250, 150 1300"
            fill="transparent"
            stroke="#FFD700"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="10,10"
          />
        </svg>

        {chapters.map((chapter, index) => (
          <div
            key={index}
            className={`relative z-10 flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } my-16`}
          >
            <Link
              to={`/review/${chapter.id}`}
              className="flex items-center mx-2"
            >
              <div className="w-14 h-14 bg-yellow-400 rounded-full flex justify-center items-center shadow-lg">
                <span className="text-xl">{chapter.icon}</span>
              </div>
              <div className="ml-4 bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold text-purple-600">
                  {chapter.title}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Fixed BottomNavigation */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Review;
