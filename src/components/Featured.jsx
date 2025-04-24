import React from 'react';

const Featured = () => {
  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold mb-4">Featured News</h2>
      <div className="relative">
        <img
          src="https://img.freepik.com/free-vector/realistic-news-studio-background_23-2149985600.jpg?t=st=1745429123~exp=1745432723~hmac=764fab064d92a1076e72f8fee4ac1d1faaae9cba0454a2ca981daf6a72a835f4&w=996"
          alt="Featured"
          className="h-[400px] w-full rounded-lg shadow-md"
        />
        <h3 className="absolute bottom-4 left-4 text-white text-xl bg-black bg-opacity-50 p-2 rounded">
          Biggest Story of the Day
        </h3>
      </div>
    </section>
  );
};

export default Featured;
