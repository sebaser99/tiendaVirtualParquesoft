import { Link } from 'react-router-dom';
import '../estilos/products.css';

export const ProductCard = ({producto, addCart, showAddCart = true, allDescription= false, 
  conditionalClass= '', showCantIndicator= false, cant = 0}) => {
  return (
        <div key={producto.id} className={`product-card ${conditionalClass} ${showCantIndicator ? 'relative' : ''}`}>
            <Link to={`/productos/${producto.id}`} className='link'>
            <div style={{height: '230px'}} className='flex-col-center'>
                <img src={producto.image} alt={producto.title} className='product-image'/>
            </div>
            <p className={allDescription ? '' : 'text-overflow'}>{producto.title}</p>
            <h3 style={{textAlign: 'center'}} className={showAddCart ? '' : 'text-orange'}>${producto.price}</h3>
            </Link>
            {
              showAddCart &&  <button className='button' style={{display: 'block',margin: '0 auto'}} onClick={()=>{addCart(producto)}}>Agregar al Carrito</button>
            }
            {
              showCantIndicator && <span className='cant-indicator'>{cant}</span>
            }
        </div>
  )
}
