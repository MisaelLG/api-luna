import mongo from "mongoose";


// Define Schema

const orderSchema = new mongo.Schema({
    nameorder:String,
    nameprovider: String,
    date: String,
    matricula:String,
    Facturas:String,
    Albaranes:String,
    Comprobantes:String,
    referencia:String,
    quantity:String,
    price:String,
    descuento:String,
    nameid:String,
    
}, {
    timestamps:true,
    versionKey:false
}
); 
// Compile Schema
export default mongo.model ('Order', orderSchema);