import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-md sticky top-0 z-10">
      <h1 className="text-2xl font-bold text-blue-600">NewsRadar</h1>
      <nav className="flex flex-wrap gap-4 mt-2 sm:mt-0">
        <Link
        to="/" className="text-gray-600 hover:text-blue-500"> Home</Link>
        <Link
        to="/sources" className="text-gray-600 hover:text-blue-500"> Sources</Link>

        <a href="#" className="text-gray-600 hover:text-blue-500">Categories</a>
        <a href="#" className="text-gray-600 hover:text-blue-500">Trending</a>
        <a href="#" className="text-gray-600 hover:text-blue-500">Saved</a>
        <a href="#" className="text-gray-600 hover:text-blue-500">Settings</a>
      </nav>
      <input
        type="text"
        placeholder="Search..."
        className="mt-2 sm:mt-0 sm:ml-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </header>
  );
};

export default Header;
