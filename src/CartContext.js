import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [totalPagar, setTotalPagar] = useState(0);

    const addCart = (product, cant) => {
        setCart([...cart, {product, cant}])
        if(cant === 0) return alert("Debes elegir al menos un producto")
        return navigate("/carrito")
    }

    const deleteCartItem = (id)=> {
        const filterCart = cart.filter(item => item.product.id !== id)
        setCart(filterCart)
    }
    const changeCant = (id, value)=> {
        const actualValue = cart.map(item =>{ 
            if(item.product.id === id){
                if( item.cant === 0 && value < 0 ) return item
                item.cant =  item.cant + value
            } 
            return item
        });

        setCart([...actualValue]) 
    }


    return (
        <CartContext.Provider value={{cart, addCart, totalPagar, setTotalPagar, deleteCartItem, changeCant}}>
            {children}
        </CartContext.Provider>
    )
}