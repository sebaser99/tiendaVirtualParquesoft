import '../estilos/error404.css';

export const Error404 = () => {
  return (
    <div className="errorContainer container">
        <div>
            <h1>Página no encontrada</h1>
            <p>Pero puedes ir a <a href="/productos">Productos</a></p>
        </div>
    </div>
  )
}
