const mongoose=require("mongoose");
const tutormodel=new mongoose.Schema({
    pro:String,
    name:String,
    subjects:String,
    location:String
   


})

module.exports=mongoose.model("tutor",tutormodel);