import { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import Footer from "./components/Footer.jsx";
import products from "./data/products.js";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((currentCart) =>
      currentCart.filter((_, index) => index !== indexToRemove)
    );
  };

  const filteredProducts = useMemo(() => {
    const text = search.trim().toLowerCase();
    if (text === "") return products;

    return products.filter((product) =>
      product.name.toLowerCase().includes(text)
    );
  }, [search]);

  const cartTotal = useMemo(
    () => cart.reduce((total, product) => total + product.offerPrice, 0),
    [cart]
  );

  return (
    <>
      <Navbar search={search} onSearchChange={setSearch} />
      <main className="container py-4">
        <section className="mb-4">
          <h1 className="display-6 fw-bold">Productos</h1>
          <p className="text-secondary mb-0">
            Encuentra tecnología para todos tus proyectos.
          </p>
        </section>

        <ProductList products={filteredProducts} onAddToCart={addToCart} />

        <Cart
          cart={cart}
          total={cartTotal}
          onRemoveFromCart={removeFromCart}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;