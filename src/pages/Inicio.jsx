import { Link, useNavigate } from 'react-router-dom';
import '../estilos/inicio.css';
import { useEffect, useState } from 'react';
import { ProductsRelated } from '../componentes/ProductsRelated';

export const Inicio = () => {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4&sort=asc')
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <>
    <main>
      <div className="banner" onClick={()=> navigate('/productos')} >
      </div>   

      <div className='home-catego'>
        <div>
          <h2>Encuentras las mejores marcas en Onemall</h2>
          <p>Tecnología, moda, Hogar y más ...</p>
          <button className='button'><Link to='/productos'>Comprar</Link></button>
        </div>
        <img src="./assets/images/catego1.jpg" alt="categorias" />
      </div>
      <div className='products-related'>
        <h2 className='products-related-title'>Productos Suegeridos</h2>
        <ProductsRelated products={productos} />
      </div>
    </main>
    </>
  )
}
