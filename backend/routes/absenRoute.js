import express from "express";
import { createAbsen, getAbsens, updateData_Absen } from "../controllers/absenController.js";

const route = express.Router();

route.get("/absen", getAbsens);
route.post("/absen", createAbsen);
route.patch("/absen/:id", updateData_Absen);

export default route;
