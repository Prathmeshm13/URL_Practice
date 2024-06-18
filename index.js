const express=require("express");
const app=express();
const PORT=8000;
const path=require("path");
const userroute=require("./routes/user");
const urlroute=require("./routes/url");
const connecttomongo=require("./connect");
const {restricteduser}=require("./middleware/auth")
const cookieparser=require("cookie-parser");
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
connecttomongo("mongodb://localhost:27017/practice_url")
.then(()=>(console.log("Mongo Connected")))
.catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
app.set('view engine', "ejs")
app.set("views",path.resolve("./views"));
app.listen(PORT,()=>{
    console.log("Port started")
})
app.get("/signup",(req,res)=>{
    res.render("signup");
})
app.get("/",restricteduser,(req,res)=>{
    res.render("static")
})
app.get("/login",(req,res)=>{
    res.render("login");
})
app.use("/user",userroute);
app.use("/url",urlroute);