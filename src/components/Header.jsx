import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-md sticky top-0 z-10">
      <h1 className="text-2xl font-bold text-blue-600">NewsRadar</h1>
      <nav className="flex flex-wrap gap-4 mt-2 sm:mt-0">
        <Link to="/" className="text-gray-600 hover:text-blue-500">
          Home
        </Link>
        <Link to="/sources" className="text-gray-600 hover:text-blue-500">
          Sources
        </Link>
        <Link to="/categories" className="text-gray-600 hover:text-blue-500">
          Categories
        </Link>
        <Link to="/saved" className="text-gray-600 hover:text-blue-500">
          Saved
        </Link>
        <Link to="/search" className="text-gray-600 hover:text-blue-500">
  Search
</Link>
      </nav>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleSearch}
        className="mt-2 sm:mt-0 sm:ml-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </header>
  );
};

export default Header;
