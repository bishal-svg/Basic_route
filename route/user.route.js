const express=require("express")
const router= express.Router()

const {createUser,getUsers}=require("../controller/user.controller.js")

router.get("/getUser",getUsers)
router.post("/createUser",createUser)

module.exports=router