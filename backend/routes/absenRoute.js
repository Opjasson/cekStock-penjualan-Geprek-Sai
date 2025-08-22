import express from "express";
import { createAbsen, getAbsens } from "../controllers/absenController.js";

const route = express.Router();

route.get("/absen", getAbsens);
route.post("/absen", createAbsen);

export default route;
