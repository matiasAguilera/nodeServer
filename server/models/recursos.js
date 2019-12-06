const mongoose=require('mongoose');
const {Schema}=mongoose;
RECURSOSSchema= new Schema({
    name:{type:String,required:true}
});
module.exports=mongoose.model('recursos',RECURSOSSchema);
