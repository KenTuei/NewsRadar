// export default CategoriesPage;
import React, { useState, useEffect } from "react";
import axios from "axios";

const categories = ["World", "Tech", "Sports", "Entertainment", "Business", "Health"];

// Map display categories to NewsAPI categories
const categoryMapping = {
  World: "general",
  Tech: "technology",
  Sports: "sports",
  Entertainment: "entertainment",
  Business: "business",
  Health: "health",
};

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategoryNews = async (category) => {
    setLoading(true);
    try {
      const apiKey = "294b857649fb4b32a78965fe8c113b3f";
      const mappedCategory = categoryMapping[category] || "general";
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${mappedCategory}&pageSize=10&apiKey=${apiKey}`
      );
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchCategoryNews(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">News by Category</h2>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === cat ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-600"
            } hover:bg-blue-200 transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center my-10">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {articles.map((article, index) => (
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

export default CategoriesPage;


