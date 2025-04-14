const CategoryFilter = ({ categories, onSelect }) => (
    <select onChange={(e) => onSelect(e.target.value)} className="p-2 border rounded">
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat.id} value={cat.name}>{cat.name}</option>
      ))}
    </select>
  );
  export default CategoryFilter;
  