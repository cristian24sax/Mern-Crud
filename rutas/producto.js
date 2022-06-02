const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaProducto = new eschema({
    idProducto:String,
    nombre:String,
    marca:String,
    modelo:String
})

const ModeloProducto = mongoose.model('productos',eschemaProducto)
module.exports=router


//ruta para agregar Producto
router.post('/addproducto',(req,res)=>{
    const nuevoProducto= new ModeloProducto({
        idProducto:req.body.idProducto,
        nombre:req.body.nombre,
        marca:req.body.marca,
        modelo:req.body.modelo
    })
    nuevoProducto.save(err=>{
        if(!err) res.send('producto agregado correctamente')
        else res.send(err)
    })
})

//Obtener todo los Productos
router.get('/obtenerProductos',(req,res)=>{
    ModeloProducto.find({},(docs,err)=>{
        if(!err) res.send(docs)
        else res.send(err)
    })
})

//Ruta para editar Producto
router.post('/obtenerDataProducto',(req,res)=>{
    ModeloProducto.find({idProducto:req.body.idProducto},(docs,err)=>{
        if(!err) res.send(docs)
        else res.send(err)
    })
})
// actualizar los datos de producto
router.post('/actualizarProducto',(req,res)=>{
    //encuentra el registro y lo actualiza
    ModeloProducto.findOneAndUpdate(
        {idProducto:req.body.idProducto},

        {   nombre:req.body.nombre,
            marca:req.body.marca,
            modelo:req.body.modelo
        },(error)=>{
            if(!error) res.send('Producto actualizado correctamente')
            else res.send(error)
        }
        
        )
})

// delete de producto
router.post('/borrarProducto',(req,res)=>{
    //encuentra el registro y lo actualiza
    ModeloProducto.findOneAndDelete(
        {idProducto:req.body.idProducto},

        (error)=>{
            if(!error) res.send('Producto borrado correctamente')
            else res.send(error)
        }
        
        )
})