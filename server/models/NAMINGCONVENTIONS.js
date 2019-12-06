const mongoose=require('mongoose');
const {Schema}=mongoose;
const NAMINGCONVENTIONSSchema=new Schema({
    name:{type:String,required:true},
    sigla:{type:String,required:true}
});
module.exports=mongoose.model('namingconventions',NAMINGCONVENTIONSSchema);

