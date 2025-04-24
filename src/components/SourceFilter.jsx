import React from 'react';

// const SourceFilter = ({ sources, selectedSource, onSelect }) => {
//   return (
//     <div className="flex flex-wrap gap-2 justify-center p-4">
//       <button
//         onClick={() => onSelect("")}
//         className={`px-4 py-2 rounded-full ${
//           selectedSource === "" ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
//         }`}
//       >
//         All Sources
//       </button>
//       {sources.map((source) => (
//         <button
//           key={source}
//           onClick={() => onSelect(source)}
//           className={`px-4 py-2 rounded-full ${
//             selectedSource === source
//               ? "bg-blue-600 text-white"
//               : "bg-blue-100 text-blue-600"
//           }`}
//         >
//           {source}
//         </button>
//       ))}
//     </div>
//   );
// };
const SourceFilter = ({ sources = [], selectedSource, onSelect }) => {
    return (
      <div className="flex flex-wrap gap-2 justify-center p-4">
        <button
          onClick={() => onSelect("")}
          className={`px-4 py-2 rounded-full ${
            selectedSource === "" ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
          }`}
        >
          All Sources
        </button>
        {sources.map((source) => (
          <button
            key={source}
            onClick={() => onSelect(source)}
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
    );
  };
  

export default SourceFilter;
