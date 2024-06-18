const {User}=require("../models/user")
const {v4:uuidv4}=require("uuid")
const {getUser,setUser}=require("../service/authservice")
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
async function handlelogin(req,res){
    const{email,password}=req.body;
    const entry=await User.findOne({
        email:email,
        password:password
    })
    const sessionid=uuidv4();
    setUser(sessionid,entry);
    res.cookie("uid",sessionid);
    if(entry){
        res.status(201).json({
            message: "Logged in",
        });
    }
}
module.exports={
    genuser,
    handlelogin
}