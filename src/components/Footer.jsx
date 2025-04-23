import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white p-4 mt-6 text-center border-t">
      <div className="flex flex-wrap gap-4 justify-center text-gray-600">
        <a href="#" className="hover:text-blue-500">About</a>
        <a href="#" className="hover:text-blue-500">Contact</a>
        <a href="#" className="hover:text-blue-500">Privacy Policy</a>
        <a href="#" className="hover:text-blue-500">Terms</a>
      </div>
    </footer>
  );
};

export default Footer;
