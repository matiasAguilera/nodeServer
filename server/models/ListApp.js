const mongoose=require('mongoose');
const {Schema}=mongoose;
const LISTAPPSchema=new Schema({
    name:{type:String,required:true}
});
module.exports=mongoose.model('listvirtualmachines',LISTAPPSchema);