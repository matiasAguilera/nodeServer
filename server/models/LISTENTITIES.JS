const mongoose=require('mongoose');
const {Schema}=mongoose;
const LISTENTITIESSchema=Schema({
    name:{type:String,required:true},
    sigla:{type:String,required:true}
});
module.exports=mongoose.model('listentities',LISTENTITIESSchema);