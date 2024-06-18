const { getUser }=require("../service/authservice")
function restricteduser(req,res,next){
    const id=req.cookies?.uid;
    if(!id){
        return res.redirect("/login")
    }
    const user=getUser(id);
    if(!user){
        return res.redirect("/login")
    }
    req.user=user;
    next();
}
module.exports={
    restricteduser
}