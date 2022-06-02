const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/crudMern');
const mongo_uri='mongodb+srv://cristian:saxo123456as@cluster0.n5rqt.mongodb.net/crudMern?retryWrites=true&w=majority'
mongoose.connect(mongo_uri);

const objectDb = mongoose.connection;
objectDb.on('connected',()=>{console.log('correcta')})
objectDb.on('error',()=>{console.log('error')})

module.exports=mongoose