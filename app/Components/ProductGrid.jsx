import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => (
  <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
export default ProductGrid;
