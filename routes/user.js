const express=require("express");
const router=express.Router();
const {genuser}=require("../controllers/user")
router.post("/signup",genuser)

module.exports=router;