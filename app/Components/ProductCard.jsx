const ProductCard = ({ product }) => (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.category}</p>
      <p className="text-blue-600 font-bold">${product.price}</p>
    </div>
  );
  export default ProductCard;
  