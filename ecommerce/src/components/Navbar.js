import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand ms-5" 
                to="/"
            >
               Ecommerce
            </Link>

            <div className="navbar-collapse  ">
                <div className="navbar-nav ">
                    <NavLink 
                        className={({isActive})=> 'nav-item nav-link ' + (isActive && 'active')}

                        to="/"
                    >
                        Inicio
                    </NavLink>

                    <NavLink 
                        className={({isActive})=> 'nav-item nav-link ' + (isActive && 'active')}

                        to="/agregar"
                    >
                        Agregar Producto
                    </NavLink>
                </div>
            </div>
        </nav>


  )
}
