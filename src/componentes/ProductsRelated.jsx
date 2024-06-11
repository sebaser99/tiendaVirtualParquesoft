import { ProductCard } from './ProductCard';
import '../estilos/products.css';

export const ProductsRelated = ({products}) => {
  return (
    <div className='flex-between'>
        {
            products.map(product => (
                <ProductCard key={product.id} producto={product} showAddCart={false} conditionalClass='product-related-width' />
            ))
        }
    </div>
  )
}
