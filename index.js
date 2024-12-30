import express from "express";
import db from "./db.js";
import userRouter from "./routes/usersRoute.js";
import dotenv from "dotenv";

dotenv.config("./env");

const app = express();

app.use(express.json());

app.use("/users", userRouter);

// Start the server
app.listen(5000, () => {
  console.log(`Server started on port ${5000}`);
});
