import React from "react";
import { FaSearch, FaYoutube } from "react-icons/fa/index.js";

function Header() {
  return (
    <div className="flex items-center justify-between w-full p-2">
      <a href="/">
        <FaYoutube className="text-red-600 text-5xl" />
      </a>
      <div className="rounded-2xl py-2 px-4 flex items-center bg-white">
        <input type="text" placeholder="Search Something" className="w-64" />
        <FaSearch className="text-red-600" />
      </div>
    </div>
  );
}

export default Header;
