import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
export const EditarProducto = () => {
  const navigate = useNavigate()
  const {idProducto}  = useParams();
  const[nombre,setNombre]=useState('')
  const[marca,setMarca]=useState('')
  const[modelo,setModelo]=useState('')
  useEffect(() => {
    axios.post('/api/producto/obtenerDataProducto',{idProducto})
    .then( res=>{
      const {nombre,marca,modelo} = res.data[0];
      setNombre(nombre)
      setMarca(marca)
      setModelo(modelo)
    })
  }, [idProducto]);
  const editarProducto=()=>{
    const productoEditado = {
      idProducto,
      nombre,
      marca,
      modelo,
    }

    //hacer la peticion a axios
    axios.post('/api/producto/actualizarProducto',productoEditado)
    .then(res=>{
      console.log(res.data)
      alert(res.data)
      navigate('/')
    })
    .then(error=>{console.log(error)})
  }
  return (
    <div>
    <div className='container text-center'>
        <div className='row'>
            <h2> Editar Producto</h2>
        </div>

        <div className='row mt-4'>
          <div className='col-sm-6 offset-3 '>
            <div className='mb-3'>
                <label htmlFor='nombre' className='form-label'>Nombre Producto</label>
                <input 
                  type='text' 
                  className='form-control'
                  value={nombre}
                  onChange={e=>{
                    setNombre(e.target.value)
                  }}
                ></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Marca</label>
                <input 
                  type='text' 
                  className='form-control'
                  value={marca}
                  onChange={e=>{
                    setMarca(e.target.value)
                  }}
                  ></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='nombre' className='form-label'>Modelo</label>
                <input 
                  type='text'
                  value={modelo}
                  onChange={e=>{
                    setModelo(e.target.value)
                  }}
                  className='form-control'></input>
            </div>
            <button 
                className='btn btn-success w-100'
                onClick={editarProducto}
              >
                Editar Producto
              </button>
          </div>
        </div>
        
      </div>
</div>
  )
}
