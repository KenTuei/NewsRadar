import React from 'react';

const Featured = () => {
  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold mb-4">Featured News</h2>
      <div className="relative">
        <img
          src="https://via.placeholder.com/600x300"
          alt="Featured"
          className="w-full rounded-lg shadow-md"
        />
        <h3 className="absolute bottom-4 left-4 text-white text-xl bg-black bg-opacity-50 p-2 rounded">
          Biggest Story of the Day
        </h3>
      </div>
    </section>
  );
};

export default Featured;
