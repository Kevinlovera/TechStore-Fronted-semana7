import ProductCard from "./ProductCard.jsx";

function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="alert alert-warning">
        No se encontraron productos con esa búsqueda.
      </div>
    );
  }

  return (
    <div className="row g-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;