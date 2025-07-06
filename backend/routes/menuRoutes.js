import { createMenu, getMenus, getMenuById, updateData_Menu, deleteMenu } from "../controllers/menu.js";
import express from "express";

const route = express.Router();

route.get("/menu", getMenus);
route.get("/menu/:id", getMenuById);
route.post("/menu", createMenu);
route.patch("/menu/:id", updateData_Menu);
route.delete("/menu/:id", deleteMenu);

export default route;
