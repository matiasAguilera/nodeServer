const mongoose=require('mongoose');
const uri='mongodb+srv://prueba:prueba123@cluster0-9ikcd.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri)
    .then(db=>console.log('conectado a la BD'))
    .catch(err=>console.error(err));

module.exports=mongoose;

