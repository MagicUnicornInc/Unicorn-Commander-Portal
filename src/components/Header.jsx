import React from 'react';
import { FaMoon, FaSun } from "react-icons/fa6";

function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
        Magic Unicorn Control Panel
      </h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search apps..."
          className="px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
        />
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-lg hover:bg-gray-700"
        >
          {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-400" />}
        </button>
      </div>
    </header>
  );
}

export default Header;
