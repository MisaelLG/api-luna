import { Router } from "express/index.js";
import upload from "../helpers/filehelper.js";
const router = Router();

import * as orderCtrl from "../controllers/order.controller.js";

router.get("/", orderCtrl.getOrder);

//router.post('/', upload.single('file'), orderCtrl.createOrder);
router.post("/", upload.array("files"), orderCtrl.createOrder);

router.get("/:orderId", orderCtrl.getOrderById);

router.put("/:orderId", upload.array("files"), orderCtrl.updateOrderById);

router.delete("/:orderId", orderCtrl.deleteOrderById);

export default router;
