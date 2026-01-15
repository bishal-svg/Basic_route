const express=require("express")
const path =require("path")
const app=express()



let product={
  cycle:{
    category:"vechicle",
    prize:"999"
  },
  watch:{
      category:"electronics",
      prize:"444"
  }
}

app.get("/",(req,res)=>{
  res.json(product)
})





app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
