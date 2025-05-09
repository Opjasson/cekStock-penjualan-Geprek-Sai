import { createMenu, getMenus, getMenuById, updateData_Menu } from "../controllers/menu.js";
import express from "express";

const route = express.Router();

route.get("/menu", getMenus);
route.get("/menu/:id", getMenuById);
route.post("/menu", createMenu);
route.patch("/menu/:id", updateData_Menu);

export default route;
