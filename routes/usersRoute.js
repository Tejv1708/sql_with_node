import express from "express";
import { createUser, getUsers } from "../controllers/usersControllers.js";

const router = express.Router();

router.post("/createuser", createUser);
router.get("/getUsers", getUsers);

export default router;
