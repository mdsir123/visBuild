const express=require("express")
const mongoose =require("mongoose")
const cors=require("cors")
const authModel =require("./models/authentication");

const app=express()

app.use(express.json())
app.use(cors())

app.post("/register",(req,res)=>{
    authModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    authModel.findOne({email:email})
    .then((user)=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }
            else{
                res.json("Incorrect password")
            }
        }
        else{
            res.json("No such user exists")
        }
    })
})

mongoose.connect("mongodb://localhost:27017/testdb")

app.listen(3001,()=>{
    console.log("Server is running")
})