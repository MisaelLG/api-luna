import express from "express/index.js";

const app = express();


import oderRouter from './routes/order.routes.js'

app.use('/', oderRouter)

export default app;