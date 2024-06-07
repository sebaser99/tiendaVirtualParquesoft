import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Inicio } from "../componentes/Inicio";
import { Productos } from "../componentes/Productos";
import { Carrito } from "../componentes/Carrito";

export const Rutas = () => {
  return (
    <Router>
        <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/carrito" element={<Carrito />} />
        </Routes>
    </Router>
  )
}
