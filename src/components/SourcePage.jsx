// import React, { useState } from "react";
// import SourceFilter from "./SourceFilter";

// const SourcePage = () => {
//   const [selectedSource, setSelectedSource] = useState("");
//   const sources = ["CNN", "BBC", "Al Jazeera", "Reuters", "The Guardian"];

//   return (
//     <div className="p-6 bg-slate-300">
//       <h2 className="text-2xl font-bold text-center mb-4">Filter by Source</h2>
//       <SourceFilter
//         sources={sources}
//         selectedSource={selectedSource}
//         onSelect={setSelectedSource}
//       />
//       <div className="mt-6 text-center">
//         {selectedSource ? (
//           <p className="text-gray-700">Showing articles from: <strong>{selectedSource}</strong></p>
//         ) : (
//           <p className="text-gray-500">Showing all sources</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SourcePage;
import React, { useEffect, useState } from "react";
import SourceFilter from "./SourceFilter";
import { fetchNews } from "../data/fetchNews";

const SourcePage = () => {
  const [selectedSource, setSelectedSource] = useState("");
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const sources = ["CNN", "BBC", "Al Jazeera", "Reuters", "The Guardian"];

  // Fetch articles once on mount
  useEffect(() => {
    let isMounted = true;

    const getArticles = async () => {
      setLoading(true);
      const data = await fetchNews();
      if (isMounted) {
        setAllArticles(data);
        setLoading(false);
      }
    };

    getArticles();

    return () => {
      isMounted = false;
    };
  }, []);

  // Filter articles based on selected source
  const filteredArticles = selectedSource
    ? allArticles.filter(article => article.source === selectedSource)
    : allArticles;

  return (
    <div className="p-6 bg-slate-300 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-4">Filter by Source</h2>

      <SourceFilter
        sources={sources}
        selectedSource={selectedSource}
        onSelect={setSelectedSource}
      />

      <div className="mt-6 text-center">
        {selectedSource ? (
          <p className="text-gray-700">
            Showing articles from: <strong>{selectedSource}</strong>
          </p>
        ) : (
          <p className="text-gray-500">Showing all sources</p>
        )}
      </div>

      <div className="mt-6 space-y-4">
        {loading ? (
          <p>Loading articles...</p>
        ) : filteredArticles.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          filteredArticles.map(article => (
            <div key={article.id} className="p-4 bg-white rounded shadow">
              <h3 className="font-semibold text-lg">{article.title}</h3>
              <p className="text-gray-600">{article.summary}</p>
              <p className="text-sm mt-1">
                <strong>Source:</strong> {article.source}
              </p>
              <a
                href={article.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2 inline-block"
              >
                Read more
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SourcePage;
