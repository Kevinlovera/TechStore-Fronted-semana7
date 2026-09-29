function Cart({ cart, total, onRemoveFromCart }) {
  const formatPrice = (price) =>
    price.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0
    });

  return (
    <section id="carrito" className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h3 mb-0">Carrito</h2>
        <span className="badge text-bg-primary fs-6">
          {cart.length} producto(s)
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="alert alert-info">
          Tu carrito está vacío. Agrega un producto para comenzar.
        </div>
      ) : (
        <>
          <div className="list-group">
            {cart.map((product, index) => (
              <div
                className="list-group-item d-flex justify-content-between align-items-center gap-3"
                key={`${product.id}-${index}`}
              >
                <div>
                  <strong>{product.name}</strong>
                  <div className="text-secondary">
                    {formatPrice(product.offerPrice)}
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => onRemoveFromCart(index)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          <div className="text-end mt-3">
            <h3 className="h4">
              Total: <span className="text-success">{formatPrice(total)}</span>
            </h3>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;