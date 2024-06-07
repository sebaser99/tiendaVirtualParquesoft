import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

export const Productos = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then((res) => res.json())
          .then((data) => setProductos(data));
      }, []);


  return (
    <div>
    <h1>Productos</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productos.map((producto) => (
          <div key={producto.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <Link to={`/productos/${producto.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2>{producto.title}</h2>
              <img src={producto.image} alt={producto.title} style={{ width: '100px', height: '100px' }} />
              <p>${producto.price}</p>
            </Link>
            <button>Agregar al Carrito</button>
          </div>
        ))}
        </div>
    </div>
  )
}
