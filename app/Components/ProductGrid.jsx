import ProductCard from './ProductCard';

const ProductGrid = ({ products, onAddToCart }) => (
  <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
    {products.map(product => (
      <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
    ))}
  </div>
);
export default ProductGrid;
