exports.getUsers = (req, res) => {
  res.json({
    success: true,
    message: "All users fetched"
  });

};
const User=require("../models/user.model.js")

exports.createUser=async(req,res)=>{
    const{name,email,password}=req.body
    const user=await User.create({
      name,
      email,
      password
    })
    res.status(201).json({
        
        user

    })

}