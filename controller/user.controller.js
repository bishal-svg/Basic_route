exports.getUsers = (req, res) => {
  res.json({
    success: true,
    message: "All users fetched"
  });

};

exports.createUser=(req,res)=>{
    const{name,email}=req.body
    
    res.status(201).json({
        success:true,
        msg:"user created!!",
        data:{
              name,
              email
        }

    })

}