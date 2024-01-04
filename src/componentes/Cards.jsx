import { useState } from "react"



export const Cards = ({ imagen,titulo,descripcion,precio,handleAgregar, handleQuitar, handleAumentar,handleDisminuir }) => {
    const [added, setAdded]=useState(false)
    const clickAgregar=()=>{
        handleAgregar()
        setAdded(true)
    }
    const clickQuitar=()=>{
        handleQuitar()
        setAdded(false)
    }

  return (
   <section className="tarjeta">
    <img src={imagen} alt={titulo} className="tarjeta-imagen" />
    <article className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">{precio}$</p>
    </article>
    {
        added
        ? <button  onClick={clickQuitar}  type="button" className="btn-quitar">Quitar del carrito</button>
        : <button  onClick={clickAgregar}  type="button"className="btn-agregar" >Agregar al carrito</button>
    }
   </section>
   
  )
}
