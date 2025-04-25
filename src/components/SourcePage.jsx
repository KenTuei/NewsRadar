import React, { useState } from "react";
import SourceFilter from "./SourceFilter";

const SourcePage = () => {
  const [selectedSource, setSelectedSource] = useState("");
  const sources = ["CNN", "BBC", "Al Jazeera", "Reuters", "The Guardian"];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Filter by Source</h2>
      <SourceFilter
        sources={sources}
        selectedSource={selectedSource}
        onSelect={setSelectedSource}
      />
      <div className="mt-6 text-center">
        {selectedSource ? (
          <p className="text-gray-700">Showing articles from: <strong>{selectedSource}</strong></p>
        ) : (
          <p className="text-gray-500">Showing all sources</p>
        )}
      </div>
    </div>
  );
};

export default SourcePage;
