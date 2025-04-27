import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white p-8 flex flex-col items-center justify-center">
      <div className="bg-white text-gray-900 p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-6">Contact Us</h2>
        <p className="text-lg mb-4">
          <span className="font-semibold text-blue-600">Email:</span> tueituei20@gmail.com
        </p>
        <p className="text-lg mb-4">
          <span className="font-semibold text-blue-600">Phone:</span> +254 115 728094
        </p>
        <p className="text-lg text-center text-gray-700 mt-4">We’d love to hear from you!</p>
      </div>
    </div>
  );
};

export default Contact;

