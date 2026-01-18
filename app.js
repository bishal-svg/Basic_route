
const express=require("express")
const path =require("path")
const connectDB=require("./DB/index.js")

const Users=require("./route/user.route.js")

const dotenv=require("dotenv")
dotenv.config();

const app=express()

connectDB()


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api",Users);


app.listen(process.env.PORT||3000,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})
