import React, { useEffect, useState } from "react";
import { fetchNews } from "../data/fetchNews";
import NewsCard from "../components/NewsCard";

const Saved = () => {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const loadSaved = async () => {
      const news = await fetchNews();
      const bookmarked = news.filter((n) => n.isBookmarked); // Assuming this flag
      setSavedArticles(bookmarked);
    };

    loadSaved();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Saved Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedArticles.length > 0 ? (
          savedArticles.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))
        ) : (
          <p className="col-span-full text-center">No saved articles yet.</p>
        )}
      </div>
    </div>
  );
};

export default Saved;
