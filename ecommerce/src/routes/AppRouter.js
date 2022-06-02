import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { ListaProductos } from '../components/ListaProductos';
import { EditarProducto } from '../components/EditarProducto';
import { Navbar } from '../components/Navbar';
import { AgregarProducto } from '../components/AgregarProducto';
export const AppRouter = () => {

  return (
    <>

    <Router>
      <Navbar/>
        <Routes>
            <Route path='/' element={<ListaProductos/>}/>
            <Route path='/editarProducto/:idProducto' element={<EditarProducto/>}/>
            <Route path='/agregar' element={<AgregarProducto/>}/>
        </Routes>
    </Router>
    </>
  )
}
