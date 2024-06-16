const mongoose=require("mongoose")
const PORT=8000;
async function connecttomongo(url){
    return mongoose.connect(url);
}
module.exports=connecttomongo;