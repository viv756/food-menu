import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import menuRouter from "./routes/menu.route.js";
import menuItemRouter from "./routes/menuItem.route.js";

dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/menu", menuRouter);
app.use("/api/menu-item",menuItemRouter)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
