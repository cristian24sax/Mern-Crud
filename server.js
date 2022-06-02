const express = require('express')
const app= express()
//importar conexion mongodb
const archivoDb = require('./conexion')
//Importacion del archivo de rutas y modelo de usuario
const rutaProducto = require('./rutas/producto')
//importar body-parser para obtner los datos de los formularios
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/producto',rutaProducto)

app.get('/',(req,res)=>{
    res.end('servidor backend')
})

//configuracion de server basico

app.listen(5000,function(){
    console.log('el servidor Nodejs corre correctamente')
})