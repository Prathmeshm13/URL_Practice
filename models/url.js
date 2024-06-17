const mongoose=require("mongoose")
const urlSchema=mongoose.Schema({
    shortid:{
        type:String,
    },
    redirectUrl:{
        type:String,
    },
    visitHis:[{timestamp:{type:Number}}]
},{timestamps:true});
const Url=mongoose.model("url",urlSchema);
module.exports={
    Url
};