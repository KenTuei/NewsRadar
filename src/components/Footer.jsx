import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white p-4 border-t mt-4 text-center text-sm">
      <div className="flex justify-center space-x-4">
        <Link to="/about" className="text-gray-600 hover:text-blue-500">About</Link>
        <Link to="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
        <Link to="/privacy-policy" className="text-gray-600 hover:text-blue-500">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
