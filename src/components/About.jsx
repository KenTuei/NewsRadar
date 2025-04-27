import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 p-6">
      <div className="bg-white text-gray-800 p-10 rounded-2xl shadow-2xl max-w-3xl w-full space-y-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-700">About NewsRadar</h2>
        <p className="text-lg leading-relaxed">
          <span className="font-semibold text-blue-600">NewsRadar</span> is a modern news aggregator built to deliver the latest headlines from trusted sources across the globe — from Kenya to the States and Sub-Saharan regions.
        </p>
        <p className="text-lg leading-relaxed">
          Our mission is to offer a <span className="font-semibold text-blue-600">clean</span>, <span className="font-semibold text-blue-600">customizable</span>, and <span className="font-semibold text-blue-600">user-friendly</span> way to stay informed about global happenings.
        </p>
        <p className="text-lg leading-relaxed">
          Whether you're into tech, politics, health, or business, NewsRadar helps you track news efficiently and effortlessly.
        </p>
        <p className="text-center font-bold text-2xl text-blue-700 mt-8">
          WE GOTCHA! 🚀 THANKS FOR LOOKING.
        </p>
      </div>
    </div>
  );
};

export default About;

