import React, { useEffect, useState } from "react";

const Saved = () => {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedNews")) || [];
    setSavedArticles(stored);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Saved Articles</h2>
      {savedArticles.length === 0 ? (
        <p className="text-center text-gray-500">No saved articles yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {savedArticles.map((article, index) => (
            <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src={article.urlToImage || "https://via.placeholder.com/400x200"}
                alt="news"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-600">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 mt-2 inline-block"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Saved;
