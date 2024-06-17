const {Url}=require("../models/url");
const shortid=require("shortid")
async function genurl(req,res){
    const url=req.body.url;
    const shortidd=shortid();
    await Url.create({
        shortid:shortidd,
        redirectUrl:url,
        visitHistory:[],
    })
    return res.render("static",{
        id:shortidd
    })
}
module.exports={genurl};