import Order from "../models/Order.js";

export const getOrder = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};
export const createOrder = async (req, res) => {
  let filesArray = [];

  req.files.forEach((element) => {
    const file = {
      filePath: "http://204.93.167.112:8080/order/docs/" + element.filename,
    };
    filesArray.push(file);
  });

  const newOrder = new Order({
    nameorder: req.body.nameorder,
    nameprovider: req.body.nameprovider,
    enrollment: req.body.enrollment,
    reference: req.body.reference,
    quantity: req.body.quantity,
    price: req.body.price,
    discount: req.body.discount,
    nameid: req.body.nameid,
    files: filesArray,
  });

  const orderSaved = await newOrder.save();

  res.status(201).json(orderSaved);
  console.log(orderSaved);
};
export const updateOrderById = async (req, res) => {
  let filesArray = [];

  req.files.forEach((element) => {
    const file = {
      filePath: "http://204.93.167.112:8080/order/docs/" + element.filename,
    };
    filesArray.push(file);
  });
  const updateOrder = await Order.findOneAndUpdate(
    req.params.id,
    { $push: { files: filesArray } },
    { upsert: true, new: true }
  );
  res.status(200).json(updateOrder);
};
export const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.orderId);
  res.status(200).json(order);
};
export const deleteOrderById = async (req, res) => {
  const { orderId } = req.params;
  await Order.findOneAndDelete(orderId);
  res.status(204).json();
};
