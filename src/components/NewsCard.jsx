import React from 'react';

const NewsCard = ({ title, summary, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img src={image} alt="news" className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between h-[200px]">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 flex-grow">{summary}</p>
        <div className="flex justify-between items-center mt-4">
          <button className="text-blue-600 hover:underline">Read More</button>
          <span role="img" aria-label="save" className="text-xl">🔖</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
