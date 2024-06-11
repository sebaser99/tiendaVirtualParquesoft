import '../estilos/contador.css';

export const Contador = ({cant, setCant}) => {

    const chooseCant = (value)=> {
        if(cant === 0 && value < 0) return;
        setCant(cant + value)
    }

  return (
    <div className="contador">
        <button onClick={()=>chooseCant(-1)}>-</button><p className="cant">{cant}</p><button onClick={()=>chooseCant(1)}>+</button>
    </div>
  )
}
