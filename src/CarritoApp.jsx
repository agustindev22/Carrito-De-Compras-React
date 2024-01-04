import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NavBar } from './componentes/NavBar'
import { ComprasPage } from './pages/ComprasPage'
import { CarritoPage } from './pages/CarritoPage'
import { ProductosProvider } from './contenido/ProductosProvider'
import { CarritoProvider } from './contenido/CarritoProvider'

export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<ComprasPage></ComprasPage>} ></Route>
          <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
          <Route path='/*' element={<Navigate to='/' />}></Route>


        </Routes>
      </CarritoProvider>
    </ProductosProvider>
  )
}
