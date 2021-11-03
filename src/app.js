import express from "express";
import morgan from "morgan";
import path from "path";
import { createRoles } from "./libs/initialSetup.js";

//Import routes
import contactsRoutes from "./routes/contacts.routes.js";
import authRutes from "./routes/auth.routes.js";
import orderRoutes from "./routes/order.routes.js";

const app = express();
createRoles();

//Settings
app.set('view engine', 'ejs');


//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.render('index');
});
app.use("/api/contacts", contactsRoutes);
app.use("/api/auth", authRutes);
app.use("/api/order", orderRoutes);
export default app;
