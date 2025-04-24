import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SourceFilter from "./components/SourceFilter";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sources" element={<SourceFilter />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;