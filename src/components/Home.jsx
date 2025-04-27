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
    <div>
      <Featured />
      {/* <SourceFilter
        sources={uniqueSources}
        selectedSource={selectedSource}
        onSelect={setSelectedSource}
      /> */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Featured News</h2>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => <NewsCard key={news.id} {...news} />)
        ) : (
          <p className="text-center col-span-full">Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default Home;