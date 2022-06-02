import axios from 'axios';
import React from 'react'
import {Link, useNavigate} from "react-router-dom";
export const ProductoIndividual = (
{
  idProducto,
  nombre,
  marca,
  modelo,
}
) => {
  const navigate = useNavigate()
  const deleteProducto=(idProducto)=>{
    axios.post('/api/producto/borrarProducto',{idProducto})
    .then( res=>{
        console.log(res.data)
        alert(res.data)
        navigate('/')
    }).catch(err =>{
      console.log(err)
    })
  }
  return (
    <div className='container'>
      <div className='row'>
          <div className='col-sm-6 offset-3'>
          <ul className='list-group'>
             <li className='list-group-item'>{nombre}</li>
             <li className='list-group-item'>{marca}</li>
             <li className='list-group-item'>{modelo}</li>
          </ul>
          <div className='d-flex justify-content-center mt-3'>
            <Link to={`/editarProducto/${idProducto}`}>
                <button className='btn btn-primary me-3 '>Editar</button>
            </Link>
              
            <Link to={`/deleteProducto/${idProducto}`}>
                <button 
                  className='btn btn-danger ms-2'
                  onClick={()=>deleteProducto(idProducto)}
                
                >Borrar</button>
            </Link>
          </div>
          <hr className='mt-4'/>
          </div>
      </div>
    </div>
  )
}
