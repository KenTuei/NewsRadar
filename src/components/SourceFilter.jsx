import React, { useState } from "react";

// Sample article data
const sampleArticles = [
  {
    id: 1,
    title: "Breaking News from CNN",
    source: "CNN",
    description: "CNN reports the latest world updates.",
  },
  {
    id: 2,
    title: "KTN Kasongo Asks for loan ",
    source: "KTN",
    description: "Kenya Loans hit an hotspot but no development.",
  },
  {
    id: 3,
    title: "BBC Analysis on Global Affairs",
    source: "BBC",
    description: "BBC provides deep dives on global topics.",
  },
  {
    id: 4,
    title: "Al Jazeera on Middle East Politics",
    source: "Al Jazeera",
    description: "Coverage from the heart of the Middle East.",
  },
  {
    id: 5,
    title: "Reuters Market Trends",
    source: "Reuters",
    description: "Global finance and economy news.",
  },
  {
    id: 6,
    title: "The Guardian's View on Climate",
    source: "The Guardian",
    description: "Climate reporting and environment news.",
  },
];

const SourceFilter = () => {
  const [selectedSource, setSelectedSource] = useState("");
  const sources = [...new Set(sampleArticles.map((article) => article.source))];

  const filteredArticles = selectedSource
    ? sampleArticles.filter((article) => article.source === selectedSource)
    : sampleArticles;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Filter by Source</h2>

      {/* Source buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        <button
          onClick={() => setSelectedSource("")}
          className={`px-4 py-2 rounded-full ${
            selectedSource === "" ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
          }`}
        >
          All Sources
        </button>
        {sources.map((source) => (
          <button
            key={source}
            onClick={() => setSelectedSource(source)}
            className={`px-4 py-2 rounded-full ${
              selectedSource === source
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-600"
            }`}
          >
            {source}
          </button>
        ))}
      </div>

      {/* Filtered Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredArticles.map((article) => (
          <div key={article.id} className="bg-white shadow p-4 rounded">
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p className="text-sm text-gray-500">{article.source}</p>
            <p className="mt-2 text-gray-700">{article.description}</p>
          </div>
        ))}
      </div>

      {/* No articles fallback */}
      {filteredArticles.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No articles found for this source.</p>
      )}
    </div>
  );
};

export default SourceFilter;

