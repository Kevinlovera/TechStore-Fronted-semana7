function Navbar({ search, onSearchChange }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">TechStore</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Abrir navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#carrito">Carrito</a>
            </li>
          </ul>

          <form className="d-flex" onSubmit={(event) => event.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar productos..."
              aria-label="Buscar productos"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;