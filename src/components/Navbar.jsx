// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">KazakhstanBeauty</div>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">🏠 Басты бет</Link>
        <Link to="/places" className="hover:underline">📍 Көрікті орындар</Link>
        <Link to="/new" className="hover:underline">➕ Жаңа орын</Link>
      </div>
    </nav>
  );
};

export default Navbar;

