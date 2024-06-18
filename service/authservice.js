const servicemap= new Map();
function setUser(id,user){
    servicemap.set(id,user);
}
function getUser(id){
    return servicemap.get(id);
}

module.exports={
    setUser,
    getUser
}