import { useContext } from "react"
import { Cards } from "../componentes/Cards"
import { ProductosContext } from "../contenido/ProductosContext"
import { CarritoContext } from "../contenido/CarritoContext"

export const ComprasPage = () => {

 


   const{ productos } = useContext(ProductosContext) 

   const { listaCompras, agregarCompra, aumentarCantidad,
    disminuirCantidad,eliminarCompra} = useContext(CarritoContext)
     
    const handleAgregar = (compra)=>{
      agregarCompra(compra)

    }
    const handleQuitar = (id)=>{
      eliminarCompra(id)
    }
    const handleAumentar = (id)=>{

    }
    const handleDisminuir = (id)=>{

    }
   
  return (
    <> 
    <h1
    className="compra">COMPRAS:</h1>

    {productos.map(producto =>(
      <Cards 
       key={producto.id}
       imagen={producto.image}
       titulo={producto.title}
       descripcion={producto.description}
       precio={producto.price}
       handleAgregar={()=> handleAgregar(producto)}
       handleQuitar={()=> handleQuitar (producto.id)}
  
      >
       </Cards>  
    ))}
    </>
  )
}
