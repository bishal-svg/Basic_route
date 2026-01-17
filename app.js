const express=require("express")
const path =require("path")
const app=express()
const Users=require("./route/user.route.js")


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api",Users)


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
