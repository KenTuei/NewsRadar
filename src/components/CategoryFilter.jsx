// export default CategoryFilter;
const CategoryFilter = ({ onCategorySelect }) => {
  const categories = ['World', 'Tech', 'Sports', 'Entertainment', 'Business', 'Health'];

  return (
    <div className="flex flex-wrap gap-2 justify-center p-4">
      {categories.map((cat, i) => (
        <button
          key={i}
          onClick={() => onCategorySelect(cat)}
          className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-200 transition"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

