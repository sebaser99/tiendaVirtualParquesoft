import '../estilos/contacto.css';
import '../estilos/checkout.css';

export const Contacto = () => {
  return (
    <>
      <main className="contacto-container">
        <h1 className="title">Contacto</h1>
        <p className="contacto-text">Ponte en contacto con nosotros para tener más información sobre nuestros productos</p>

        <div className="checkout-form" >
                <form action="">
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
                    <div className="contact-textarea">
                        <textarea  placeholder="Mensaje" />
                    </div>
                  
                    <button type='submit' className="button">Enviar</button>
                </form>
            </div>
      </main>
    </>
  )
}
