import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import uniqid from 'uniqid'
export const AgregarProducto = () => {
  const[nombre,setNombre]=useState('')
  const[marca,setMarca]=useState('')
  const[modelo,setModelo]=useState('')
  const navigate= useNavigate()

  const addProducto=()=>{
      var producto={
          idProducto:uniqid(),
          nombre,
          marca,
          modelo,
      }
      axios.post('/api/producto/addproducto',producto)
      .then(res=>{
        alert(res.data)
        navigate('/')
      })
      .then(error=>{console.log(error)})
  }
  return (
<div>
    <div className='container text-center'>
        <div className='row'>
            <h2> Agregar Producto</h2>
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
                onClick={addProducto}
              >
                Guardar Producto
              </button>
          </div>
        </div>
        
      </div>
</div>
  )
}
