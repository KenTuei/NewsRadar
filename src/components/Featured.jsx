import React, { useEffect, useState } from 'react';

const images = [
  {
    url: "https://img.freepik.com/free-vector/realistic-news-studio-background_23-2149985600.jpg?t=st=1745429123~exp=1745432723~hmac=764fab064d92a1076e72f8fee4ac1d1faaae9cba0454a2ca981daf6a72a835f4&w=996",
    caption: "Biggest Story of the Day",
  },
  {
    url: "https://img.freepik.com/premium-photo/tribune-speakers-with-microphones_249974-13387.jpg?w=900",
    caption: "Latest Global Updates",
  },
  {
    url: "https://img.freepik.com/premium-photo/presents-news-about-peace-treaty-signed_482257-90731.jpg?w=996",
    caption: "Breaking News Highlights",
  },
];

const Featured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="p-4">
      <div className="relative overflow-hidden shadow-lg w-full h-[220px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-500/70 text-white text-lg sm:text-xl md:text-2xl font-semibold p-2 sm:p-3 rounded-lg shadow-md text-center w-11/12 sm:w-auto">
              {image.caption}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
