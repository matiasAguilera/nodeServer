const mongoose=require('mongoose');
const {Schema}=mongoose;
const ACRONIMOShema= new Schema({
    descripcion:{type:String,required:true},
    acronimo:{type:String,required:true}
});
module.exports=mongoose.model('listapps',ACRONIMOShema);
