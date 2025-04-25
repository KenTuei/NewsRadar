import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SourceFilter from "./components/SourceFilter";
import CategoryFilter from "./components/CategoryFilter";
import Saved from "./components/Saved";
import Search from "./components/Search";
import About from "./components/About";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CategoriesPage from './components/CategoriesPage';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sources" element={<SourceFilter />} />
            <Route path="/categories" element={<CategoriesPage />} /> {}
            <Route path="/saved" element={<Saved />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

