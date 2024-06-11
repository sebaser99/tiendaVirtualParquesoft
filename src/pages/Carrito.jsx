import { useContext, useEffect, useState } from "react"
import { CartContext } from "../CartContext"
import { ProductCard } from "../componentes/ProductCard";
import '../estilos/carrito.css';
import { Link } from "react-router-dom";

export const Carrito = () => {
  const {cart, totalPagar, setTotalPagar,  changeCant, deleteCartItem } = useContext(CartContext);
  const [productInZero, setProductInZero] = useState(false)
  useEffect(() => {
    const newTotal = cart.reduce((sum, product) => {
      return sum + (product.cant * product.product.price);
    }, 0);

    setTotalPagar(newTotal);
  }, [cart, setTotalPagar]); 

  useEffect(() => {
    cart.forEach(product => product.cant === 0 ? setProductInZero(true) : setProductInZero(false))
  }, [cart]); 

  const deleteItem = (id)=> {
    deleteCartItem(id)
  }

  const changeCantItem = (id, value)=> {
    changeCant(id, value)
  }

  return (
    <>
      <main>
        <h1 className="title">Carrito</h1>
            {
              cart.length > 0 ? 
                <div className="cart-container">
                  <div className="cart-products">
                    {cart.map(product =>(
              
                      <div  className="flex-col-center cart-product">
                        <ProductCard key={product.product.id} producto={product.product} showAddCart={false} />
                        <div style={{marginLeft: '20px', padding: '20px', textAlign: 'center'}}>
                          <h3>Cantidad</h3>
                          <div className="contador">
                              <button onClick={()=>changeCantItem(product.product.id, -1)}>-</button><p className="cant">{product.cant}</p><button onClick={()=>changeCantItem(product.product.id, 1)}>+</button>
                          </div>
                          <h3>Total</h3>
                          <span style={{display: 'block', color: 'var(--green-lime)', fontSize: '1.3rem', fontWeight: '700'}}>{(product.cant * product.product.price).toFixed(2)}</span>
                          <span onClick={()=> deleteItem(product.product.id)} className="trash-container"><i className="fas fa-trash trash"></i></span> 
                        </div>
                      </div>
                    )
                    )}
                  </div>
                  <div className="cart-total">
                  <div className="cart-total-content">
                    <h2>Total Compra</h2>
                    <h4>$ {totalPagar.toFixed(2)}</h4>
                    <Link to={productInZero ? '/carrito' : '/checkout'} className="button checkout-btn">Pagar</Link>
                  </div>
                  </div>
                </div>
              :
                  <div className="no-products">
                    <p>No tienes productos en tu carrito</p>
                  </div>
            }
             
      </main> 
    </>
  )
}
