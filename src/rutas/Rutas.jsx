import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { Productos } from "../pages/Productos";
import { Carrito } from "../pages/Carrito";
import { Error404 } from "../pages/Error404";
import { Contacto } from "../pages/Contacto";
import { Navbar } from "../componentes/Navbar";
import { CartProvider } from "../CartContext";
import { ProductDetail } from "../pages/ProductDetail";
import { Checkout } from "../pages/Checkout";

export const Rutas = () => {
  return (
    <Router >
      <CartProvider>
        <div className="container">
          <header style={{marginBottom: '50px'}} >
              <Navbar />
          </header>
          <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/productos/:id" element={<ProductDetail />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/*" element=<Error404 /> />
          </Routes>
          <footer className="container" style={{marginTop: '50px'}}>
            <p style={{textAlign: 'center'}}>CbasStore - Todos los derechos Reservados 2024</p>
          </footer>
        </div>
      </CartProvider>
    </Router>
  )
}
