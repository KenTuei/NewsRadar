import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"; // <== Import SweetAlert2

const Saved = () => {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedNews")) || [];
    setSavedArticles(stored);
  }, []);

  const handleDelete = (url) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this article!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedArticles = savedArticles.filter(article => article.url !== url);
        setSavedArticles(updatedArticles);
        localStorage.setItem("savedNews", JSON.stringify(updatedArticles));

        Swal.fire(
          "Deleted!",
          "The article has been deleted.",
          "success"
        );
      }
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Saved Articles</h2>
      {savedArticles.length === 0 ? (
        <p className="text-center text-gray-500">No saved articles yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {savedArticles.map((article, index) => (
            <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src={article.urlToImage || "https://via.placeholder.com/400x200"}
                alt="news"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-600">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 mt-2 inline-block"
                >
                  Read More
                </a>
                <button
                  onClick={() => handleDelete(article.url)}
                  className="mt-2 block text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Saved;
