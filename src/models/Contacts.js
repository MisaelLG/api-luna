import mongo from "mongoose";

const contactSchema = new mongo.Schema({
    name:String,
    phone: Number,
    email: String,
    location:String,
    imgURL: String
}, {
    timestamps:true,
    versionKey:false
}
); 
export default mongo.model ('Contacts', contactSchema);