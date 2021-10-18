import mongo from "mongoose";

const roleSchema = new mongo.Schema({
    name:String
},{
    versionKey:false
})

export default mongo.model('Role', roleSchema);