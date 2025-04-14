const SearchBar = ({ onSearch }) => (
    <input
      type="text"
      placeholder="Search by name"
      onChange={(e) => onSearch(e.target.value)}
      className="p-2 border rounded w-full md:w-1/3"
    />
  );
  export default SearchBar;
  