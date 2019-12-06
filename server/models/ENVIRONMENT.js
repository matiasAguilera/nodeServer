const mongoose=require('mongoose');
const {Schema}=mongoose;
const ENVIRONMENTSchema=new Schema({
    name:{type:String,required:true},
    sigla:{type:String,required:true}
});
module.exports=mongoose.model('environments',ENVIRONMENTSchema);