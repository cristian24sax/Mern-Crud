import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ProductoIndividual } from './ProductoIndividual'

export const ListaProductos = () => {
  const [dataProducto,setDataProducto] = useState([])
  useEffect(() => {
    axios.get('api/producto/obtenerProductos')
    .then(res=>{

      setDataProducto(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }, []);
  console.log(dataProducto)

  return(
    <div>
      {dataProducto.length===0?
      <h2 className='text-center'>No hay Productos en la lista</h2>
      :
      
      <>
        <h2 className='text-center'>Lista de Productos</h2>
          {dataProducto.map(data=>(<ProductoIndividual key={data.idProducto} {...data}/>))}
      </>
    
      }
    </div>
  )
}
