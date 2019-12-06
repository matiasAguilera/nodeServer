const mongoose=require('mongoose');
const {Schema}=mongoose;
OtherResources=new Schema({
    name:{type:String,required:true}
});
module.exports=mongoose.model('otherresources',OtherResources)