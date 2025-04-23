import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Featured from './components/Featured';
import CategoryFilter from './components/CategoryFilter';
import NewsCard from './components/NewsCard';
import Footer from './components/Footer';
import { fetchNews } from './data/fetchNews';

const App = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const news = await fetchNews();
      setNewsList(news);
    };

    loadNews();
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900">
      <Header />
      <Featured />
      <CategoryFilter />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsList.length > 0 ? (
          newsList.map((news) => <NewsCard key={news.id} {...news} />)
        ) : (
          <p className="text-center col-span-full">Loading news...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
