const express=require("express");
const router=express.Router();
const {genuser, handlelogin}=require("../controllers/user")
router.post("/signup",genuser)
router.post("/login",handlelogin);
module.exports=router;