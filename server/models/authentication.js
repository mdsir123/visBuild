const mongoose=require("mongoose")

const authSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const authModel=mongoose.model("authentication",authSchema)
module.exports=authModel