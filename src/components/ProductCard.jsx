function ProductCard({ product, onAddToCart }) {
  const formatPrice = (price) =>
    price.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0
    });

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <article className="card h-100 shadow-sm">
        <img
          src={product.image}
          className="card-img-top product-image"
          alt={product.name}
        />

        <div className="card-body d-flex flex-column">
          <span className="badge text-bg-secondary align-self-start mb-2">
            {product.category}
          </span>

          <h2 className="h5 card-title">{product.name}</h2>
          <p className="card-text text-secondary">{product.description}</p>

          <div className="mt-auto">
            <p className="mb-1 text-decoration-line-through text-secondary">
              Precio normal: {formatPrice(product.price)}
            </p>
            <p className="fs-5 fw-bold text-success mb-3">
              Oferta: {formatPrice(product.offerPrice)}
            </p>

            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={() => onAddToCart(product)}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProductCard;