import mongo from "mongoose";

// Define Schema

const orderSchema = new mongo.Schema(
  {
    nameorder: String,
    nameprovider: String,
    date: String,
    enrollment: String,
    reference: String,
    quantity: String,
    price: String,
    discount: String,
    nameid: String,
    files: [Object],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// Compile Schema
export default mongo.model("Order", orderSchema);
