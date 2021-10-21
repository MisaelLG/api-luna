import express from "express/index.js";

const app = express();

import oderRouter from "./routes/order.routes.js";

app.use(express.json());

app.use("/order", oderRouter);

export default app;
