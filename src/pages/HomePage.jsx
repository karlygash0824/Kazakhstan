
// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1587049352849-4ff7c4b7e00f')",
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-2xl text-center max-w-xl">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          QazaqMap – Қазақстанның көрікті жерлерін бірге ашайық!
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Бұл сайтта Қазақстанның көзден таса қалған, әдемі әрі ерекше табиғи орындарын көре аласыз. Жаңа орын қосып, басқалармен бөлісе аласыз.
        </p>
        <Link to="/places">
          <button className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition">
            🌍 Көрікті орындарды көру
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;



