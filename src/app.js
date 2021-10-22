import express from "express";
import morgan from "morgan";
//import { createRoles } from "./libs/initialSetup.js";

const app = express();
//createRoles();

//Import routes
import productsRoutes from "./routes/contacts.routes.js";
import authRutes from "./routes/auth.routes.js";

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.json("welcome");
});
app.use("/api/contacts", productsRoutes);
app.use("/api/auth", authRutes);

export default app;
