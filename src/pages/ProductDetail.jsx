import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CartContext } from "../CartContext";
import { ProductCard } from "../componentes/ProductCard";
import { Contador } from "../componentes/Contador";

export const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct ] = useState(null);
    const [cant, setCant] = useState(1)
    const {addCart} = useContext(CartContext);

     useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
     }, [id])
     
    if (!product) return <p>Cargando...</p>;
  return (
      <div className="product-detail">
        <ProductCard producto={product} addCart={addCart} 
          allDescription={true} showAddCart={false} conditionalClass="product-card-detail-width " />
        <div className="product-detail-choose">
          <div style={{marginBottom: '40px'}}>
            <p style={{fontSize: '16px', fontWeight: '700'}}>Elige cuántos deseas llevar</p>
            <Contador cant={cant} setCant={setCant} />
          </div>
         
          <button className='button' style={{display: 'block',margin: '0 auto'}} onClick={()=>{addCart(product,cant)}}>Agregar al Carrito</button>
        </div>
      </div>
        
  )
}
