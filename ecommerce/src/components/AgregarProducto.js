import React from 'react'
import { useForm } from '../hooks/useForm'
import uniqid from 'uniqid'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const AgregarProducto = () => {
    const navigate = useNavigate()
    const [FormValues,handleInputChange]=useForm({
        idProducto:uniqid(),
        nombre:'',
        marca:'',
        modelo:''
      })
    const {nombre,marca,modelo}=FormValues
    
    const handleSubmit=e=>{
        // e.preventDefault()
        console.log(FormValues)
        axios.post('/api/producto/addproducto',FormValues)
        .then(res=>{
        navigate(-1)
        alert(res.data)
        })
        .then(error=>{console.log(error)})
        }
        return(
        <div >
            <div className='text-center'>
                <h2>
                    Agregar Producto
                </h2>
            </div>
            <hr/>
            <div className='form-group col-sm-6 offset-3'>
                <input
                type='text'
                name='nombre'
                className='form-control mb-3'
                placeholder='Nombre del Producto'
                autoComplete='off'
                value={nombre}
                onChange={handleInputChange}
                    />
                <input
                type='text'
                name='marca'
                className='form-control mb-3'
                placeholder='Marca'
                autoComplete='off'
                value={marca}
                onChange={handleInputChange}
                />
                <input
                    type='text'
                    name='modelo'
                    className='form-control mb-3'
                    placeholder='Modelo'
                    value={modelo}
                    onChange={handleInputChange}
                />
            <button onClick={handleSubmit} className='btn btn-primary w-100'> guardar </button>
            </div>
    
        </div>
        )
}
