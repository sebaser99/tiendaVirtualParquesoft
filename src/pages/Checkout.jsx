import { useContext } from "react";
import { CartContext } from "../CartContext";
import '../estilos/checkout.css';
import { ProductCard } from "../componentes/ProductCard";

export const Checkout = () => {
    const {totalPagar, cart} = useContext(CartContext);
    
    const onSubmit = (e) => {
        e.preventDefault();
        alert('Muchas gracias por tu compra, te enviaremos la info de despacho al correo')
    }
  return (
    <main>
        <h1 className="title">Proceso de Pago y Envío</h1>

        <div className="checkout-container">
            <div className="checkout-total">
                <div className="checkout-total-content">
                    <h2 style={{marginBottom: '10px'}}>Total Compra</h2>
                    <h2 className="total-pagar">$ {totalPagar.toFixed(2)}</h2>
                </div>  
                <div className="checkout-products">
                    {
                        cart.map(product => (
                            <ProductCard key={product.product.id} producto={product.product} 
                            showAddCart={false} conditionalClass='width-150px'  showCantIndicator={true}
                                cant={product.cant}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="checkout-form" >
                <form onSubmit={onSubmit}>
                    <div className="checkout-input">
                        <input type="text" placeholder="Nombre" />
                    </div>
                    <div className="checkout-input">
                        <input type="text" placeholder="Apellido" />
                    </div>
                    <div className="checkout-input">
                        <input type="email" placeholder="Correo" />
                    </div>
                    <div className="checkout-input">
                        <input type="tel" placeholder="Celular" />
                    </div>
                    <div className="checkout-input">
                        <input type="tel" placeholder="Dirección de Entrega" />
                    </div>
                    <hr/>
                    <div className="checkout-input">
                        <input type="number" placeholder="Número Tarjeta" />
                    </div>
                    <div className="checkout-input">
                        <input type="password" placeholder="CVS" />
                    </div>
                    <button type='submit' className="button">Enviar</button>
                </form>
            </div>
        </div>
    </main>
  )
}
