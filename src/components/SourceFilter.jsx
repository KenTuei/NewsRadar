import React, { useState, useEffect } from "react";

const API_KEY = '5e5da94937bd4a389134cbfbfc735d3d';
const BASE_URL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=${API_KEY}`;

const SourceFilter = () => {
  const [articles, setArticles] = useState([]);
  const [selectedSource, setSelectedSource] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch articles from API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        if (data.articles) {
          setArticles(data.articles);
        }
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Get unique sources from the fetched articles
  const sources = [...new Set(articles.map((article) => article.source.name))];

  // Filter articles by selected source
  const filteredArticles = selectedSource
    ? articles.filter((article) => article.source.name === selectedSource)
    : articles;

  return (
    <div className="p-6 bg-slate-300 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">Filter by Source</h2>

      {/* Source buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <button
          onClick={() => setSelectedSource("")}
          className={`px-4 py-2 rounded-full ${
            selectedSource === "" ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
          } hover:bg-blue-200 transition`}
        >
          All Sources
        </button>
        {sources.map((source, index) => (
          <button
            key={index}
            onClick={() => setSelectedSource(source)}
            className={`px-4 py-2 rounded-full ${
              selectedSource === source
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-600"
            } hover:bg-blue-200 transition`}
          >
            {source}
          </button>
        ))}
      </div>

      {/* Articles */}
      {loading ? (
        <div className="flex justify-center items-center my-10">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
                <img
                  src={article.urlToImage || "https://img.freepik.com/free-vector/gradient-breaking-news-background_23-2151142406.jpg?t=st=1745767406~exp=1745771006~hmac=fbb5ea226a931bfbf8a57edac1a821d6f646598058a294a6e55ea5ee1192d02a&w=996"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{article.source.name}</p>
                  <p className="text-gray-700 text-sm line-clamp-3">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline mt-3 inline-block"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No articles found for this source.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SourceFilter;
