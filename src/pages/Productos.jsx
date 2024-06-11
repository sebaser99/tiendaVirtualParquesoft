import React, { useState, useEffect } from 'react';
import { ProductCard } from '../componentes/ProductCard';

export const Productos = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
      console.log(productos.length, productos)
      if(productos.length === 0){
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => setProductos(data));
      }
      }, []);


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
