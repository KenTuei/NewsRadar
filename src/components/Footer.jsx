// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-white border-t mt-10 py-6 text-center">
//       <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-600 text-sm">
//         <Link
//           to="/about"
//           className="hover:text-blue-500 transition duration-300"
//         >
//           About
//         </Link>
//         <Link
//           to="/contact"
//           className="hover:text-blue-500 transition duration-300"
//         >
//           Contact
//         </Link>
//         <Link
//           to="/privacy-policy"
//           className="hover:text-blue-500 transition duration-300"
//         >
//           Privacy Policy
//         </Link>
//       </div>
//       <p className="text-gray-400 mt-4 text-xs">
//         &copy; {new Date().getFullYear()} NewsApp. All rights reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t mt-10 py-6 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-300 text-sm">
        <Link
          to="/about"
          className="hover:text-white transition duration-300"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-white transition duration-300"
        >
          Contact
        </Link>
        <Link
          to="/privacy-policy"
          className="hover:text-white transition duration-300"
        >
          Privacy Policy
        </Link>
      </div>
      <p className="text-gray-500 mt-4 text-xs">
        &copy; {new Date().getFullYear()} NewsRadar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

