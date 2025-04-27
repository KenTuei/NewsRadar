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
    <div className="p-6 md:p-10 bg-slate-300 min-h-screen">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Saved Articles</h2>

  {savedArticles.length === 0 ? (
    <p className="text-center text-gray-500 text-lg">No saved articles yet.</p>
  ) : (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {savedArticles.map((article, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col">
          <img
            src={article.urlToImage || "https://img.freepik.com/free-vector/gradient-breaking-news-background_23-2151142406.jpg?t=st=1745767406~exp=1745771006~hmac=fbb5ea226a931bfbf8a57edac1a821d6f646598058a294a6e55ea5ee1192d02a&w=996"}
            alt="news"
            className="w-full h-48 object-cover"
          />
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
            <p className="text-sm text-gray-600 flex-grow line-clamp-3">{article.description}</p>
            <div className="flex justify-between items-center mt-4">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                Read More
              </a>
              <button
                onClick={() => handleDelete(article.url)}
                className="text-xs text-white bg-red-500 px-3 py-1 rounded-full hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

  );
};

export default Saved;
