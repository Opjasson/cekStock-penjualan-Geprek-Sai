import { createMenu, getMenus, updateData_Menu } from "../controllers/menu.js";
import express from "express";

const route = express.Router();

route.get("/menu", getMenus);
route.post("/menu", createMenu);
route.patch("/menu/:id", updateData_Menu);

export default route;
