import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chapters from "./Screens/Chapters";
import Cards from "./Screens/Cards";
import Review from "./Screens/Review";
import AddChapters from "./Screens/Add";
import "./App.css";
import LocalStorageCards from "./Screens/LocalStorage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Chapters />} />

        {/* Dynamic route for Cards */}
        <Route path="/:chapterId" element={<Cards />} />

        {/* Review route */}
        <Route path="/review" element={<Review />} />
        <Route path="/review/:chapterId" element={<LocalStorageCards />} />

        {/* Add Chapters route */}
        <Route path="/add" element={<AddChapters />} />

        {/* 404 Fallback */}
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
              <h1 className="text-3xl font-bold text-gray-800">
                404 - Page Not Found
              </h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
