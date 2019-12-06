const mongoose=require('mongoose');
const {Schema}=mongoose;
const vrms=new Schema({
    name:{type:String,required:true}
});
module.exports=mongoose.model('vmrs',vrms);