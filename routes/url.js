const express=require("express");
const router=express.Router();
const {genurl}=require("../controllers/url")
const {Url}=require("../models/url")
router.post("/",genurl)
router.get("/:shortid",async (req,res)=>{
    const sh=req.params.shortid;
    console.log(sh);
    const entry=await Url.findOneAndUpdate({
        shortid:String(sh)
    },{$push:{
        visitHis:{
            timestamp:Date.now(),
        }
    }})
    console.log(entry);
    return res.redirect(entry.redirectUrl)
})
module.exports=router;