import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-4 flex justify-around">
      <Link to="/">Басты бет</Link>
      <Link to="/places">Орындар</Link>
      <Link to="/add">Жаңа орын</Link>
      <Link to="/map">Карта</Link>
    </header>
  );
};

export default Header;


