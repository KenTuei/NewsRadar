import React, { useState, useEffect } from "react";
import { fetchNews } from "../data/fetchNews";
import NewsCard from "../components/NewsCard";

const Search = () => {
  const [query, setQuery] = useState("");
  const [allNews, setAllNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const news = await fetchNews();
      setAllNews(news);
      setFilteredNews(news);
    };

    loadNews();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = allNews.filter((news) =>
      news.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNews(filtered);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="flex justify-center mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search news..."
          className="border px-4 py-2 rounded-l w-1/2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))
        ) : (
          <p className="text-center col-span-full">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;

