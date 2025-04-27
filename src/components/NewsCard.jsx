import React from "react";

const NewsCard = ({ title, summary, image, articleUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col h-[450px]">
      <img src={image} alt="news" className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 flex-grow line-clamp-3">
          {summary}
        </p>
        <div className="flex justify-between items-center mt-4">
          <a
            href={articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            Read More
          </a>
          <span role="img" aria-label="save" className="text-xl">
            🔖
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
