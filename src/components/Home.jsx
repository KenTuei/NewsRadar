import React, { useEffect, useState } from "react";
import Featured from "../components/Featured";
import NewsCard from "../components/NewsCard";
import SourceFilter from "../components/SourceFilter";
import { fetchNews } from "../data/fetchNews";

const Home = () => {
  const [allNews, setAllNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [selectedSource, setSelectedSource] = useState("");

  useEffect(() => {
    const loadNews = async () => {
      const news = await fetchNews();
      setAllNews(news);
      setFilteredNews(news);
    };

    loadNews();
  }, []);

  useEffect(() => {
    if (selectedSource === "") {
      setFilteredNews(allNews);
    } else {
      setFilteredNews(allNews.filter(news => news.source === selectedSource));
    }
  }, [selectedSource, allNews]);

  const uniqueSources = [...new Set(allNews.map(news => news.source))];

  return (
    <div className="bg-slate-100 min-h-screen">
      {/* Featured Section */}
      <section className="w-full bg-white shadow-md mb-6">
        <Featured />
      </section>

      {/* Source Filter */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourceFilter
          sources={uniqueSources}
          selectedSource={selectedSource}
          setSelectedSource={setSelectedSource}
        />
      </div>

      {/* News Grid */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Latest News
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.length > 0 ? (
            filteredNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))
          ) : (
            <p className="text-center col-span-full">Loading news...</p>
          )}
        </div>
      </div>

      <footer className="mt-8 py-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} NewsRadar. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
