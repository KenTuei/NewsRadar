import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaBookmark } from "react-icons/fa";

const categories = [
  "All",
  "World",
  "Tech",
  "Sports",
  "Entertainment",
  "Business",
  "Health",
];

const categoryMapping = {
  World: "general",
  Tech: "technology",
  Sports: "sports",
  Entertainment: "entertainment",
  Business: "business",
  Health: "health",
};

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default to "All"
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategoryNews = async (category) => {
    setLoading(true);
    try {
      const apiKey = "5e5da94937bd4a389134cbfbfc735d3d";

      let url = "";

      if (category === "All") {
        url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=${apiKey}`;
      } else {
        const mappedCategory = categoryMapping[category] || "general";
        url = `https://newsapi.org/v2/top-headlines?country=us&category=${mappedCategory}&pageSize=10&apiKey=${apiKey}`;
      }

      const response = await axios.get(url);
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCategoryNews(selectedCategory);
  }, [selectedCategory]);

  const handleSave = (article) => {
    const saved = JSON.parse(localStorage.getItem("savedNews")) || [];
    const alreadySaved = saved.some((a) => a.url === article.url);

    if (!alreadySaved) {
      const articleWithId = { ...article, id: Date.now() };
      saved.push(articleWithId);
      localStorage.setItem("savedNews", JSON.stringify(saved));

      Swal.fire({
        icon: "success",
        title: "Saved!",
        text: "The article has been saved successfully.",
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "Already Saved",
        text: "You have already saved this article.",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  return (
    // <div className="p-4">
    //   <h2 className="text-2xl font-bold text-center mb-4">News by Category</h2>

    //   <div className="flex flex-wrap gap-2 justify-center mb-6">
    //     {categories.map((cat, i) => (
    //       <button
    //         key={i}
    //         onClick={() => setSelectedCategory(cat)}
    //         className={`px-4 py-2 rounded-full ${
    //           selectedCategory === cat ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-600"
    //         } hover:bg-blue-200 transition`}
    //       >
    //         {cat}
    //       </button>
    //     ))}
    //   </div>

    //   <h3 className="text-xl font-semibold text-center mb-6">
    //     Showing: {selectedCategory} News
    //   </h3>

    //   {loading ? (
    //     <div className="flex justify-center items-center my-10">
    //       <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    //     </div>
    //   ) : (
    //     <div className="grid md:grid-cols-3 gap-4">
    //       {articles.length > 0 ? (
    //         articles.map((article, index) => (
    //           <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
    //             <img
    //               src={article.urlToImage || "https://via.placeholder.com/400x200"}
    //               alt="news"
    //               className="w-full h-48 object-cover"
    //             />
    //             <div className="p-4">
    //               <h3 className="font-bold mb-2">{article.title}</h3>
    //               <p className="text-sm text-gray-600">{article.description}</p>
    //               <a
    //                 href={article.url}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 className="text-blue-600 mt-2 inline-block"
    //               >
    //                 Read More
    //               </a>
    //               <button
    //                 onClick={() => handleSave(article)}
    //                 className="mt-2 block text-sm text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600"
    //               >
    //                 Save
    //               </button>
    //             </div>
    //           </div>
    //         ))
    //       ) : (
    //         <p className="text-center text-gray-500 col-span-full">No articles found.</p>
    //       )}
    //     </div>
    //   )}
    // </div>
    <div className="p-6 md:p-10 bg-slate-300 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        News by Category
      </h2>

      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium shadow-md ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border border-blue-400"
            } hover:bg-blue-200 transition duration-300`}
          >
            {cat}
          </button>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-center text-gray-700 mb-8">
        Showing: <span className="text-blue-600">{selectedCategory}</span> News
      </h3>

      {loading ? (
        <div className="flex justify-center items-center my-20">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
              >
                <img
                  src={
                    article.urlToImage ||
                    "https://img.freepik.com/free-vector/gradient-breaking-news-background_23-2151142406.jpg?t=st=1745767406~exp=1745771006~hmac=fbb5ea226a931bfbf8a57edac1a821d6f646598058a294a6e55ea5ee1192d02a&w=996"
                  }
                  alt="news"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 flex-grow line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Read More
                    </a>
                    <button
                      onClick={() => handleSave(article)}
                      className="text-xs text-white bg-green-500 px-3 py-1 rounded-full hover:bg-green-600 flex items-center space-x-2"
                    >
                      <FaBookmark />
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No articles found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
