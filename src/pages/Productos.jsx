import React, { useState, useEffect } from 'react';
import { ProductCard } from '../componentes/ProductCard';

export const Productos = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
      const fetchProductos = ()=> {
          fetch('https://dummyjson.com/products')
          .then((res) => res.json())
          .then((data) => setProductos(data.products));
      }
      fetchProductos();
      }, []);

      console.log(productos)
  return (
    <>
      <main>
        <h1 className='title' style={{fontWeight: '500'}}>Productos</h1>
        <div className='products-container'>
          {productos.map((producto) => (
            <ProductCard key={producto.id}  producto={producto} showAddCart={false}/>
          ))}
        </div>
      </main>
    </>
  )
}
