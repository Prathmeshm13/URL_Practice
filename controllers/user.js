const {User}=require("../models/user")

async function genuser(req,res){
    const{name,email,password}=req.body;
    console.log(name+" "+email);
    await User.create({
        name,
        email,
        password
    })
    res.status(201).json({
        message: "User created successfully",
    });
}
module.exports={
    genuser
}