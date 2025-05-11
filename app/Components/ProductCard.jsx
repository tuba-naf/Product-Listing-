const ProductCard = ({ product, onAddToCart }) => (
  <div className="border p-4 rounded shadow">
    <h2 className="text-lg font-semibold">{product.name}</h2>
    <p className="text-sm text-gray-600">{product.category}</p>
    <p className="text-blue-600 font-bold">${product.price}</p>
    <button 
      onClick={() => onAddToCart(product)} 
      className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Add to Cart
    </button>
  </div>
);
export default ProductCard;
