// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p className="text-sm">
        © {new Date().getFullYear()} KazakhstanBeauty | Барлық құқықтар қорғалған
      </p>
      <p className="text-xs mt-1">
        Қарлығаш Абу тарапынан жасалды 💚
      </p>
    </footer>
  );
};

export default Footer;




