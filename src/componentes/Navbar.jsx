import { Link } from "react-router-dom";
import "../estilos/navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
        <div>
            <p className="logo">Onemall</p>
        </div>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li> <Link style={{display: 'flex', alignItems: 'center', color: 'var(--green-lime)'}} to="/carrito"><i className="fas fa-cart-shopping"></i></Link></li>
        </ul>
    </div>
   
  )
}
