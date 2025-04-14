const PriceSorter = ({ onSort }) => (
    <select onChange={(e) => onSort(e.target.value)} className="p-2 border rounded">
      <option value="">Sort by</option>
      <option value="lowToHigh">Price: Low to High</option>
      <option value="highToLow">Price: High to Low</option>
    </select>
  );
  export default PriceSorter;
  