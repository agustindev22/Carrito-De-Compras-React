import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid barra-nav ">
    <NavLink to='/' className="navbar-brand navbar-carrito" href="#">Carrito </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/' className="nav-link active navbar-compra" aria-current="page" href="#">Compras</NavLink>
        </li>
      </ul>
     <NavLink to='/carrito'> 
      <button  type="button" className="btn btn-primary position-relative carrito">
      <i class="bi bi-cart-fill"></i>
      <a className="nav-link active" aria-current="page" href="#"></a>
  <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span className="visually-hidden">New alerts</span>
  </span>
</button>
</NavLink>
      
    </div>
  </div>
</nav>

  )
}
