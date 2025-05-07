import { createMenu, getMenus } from "../controllers/menu.js";
import express from "express";

const route = express.Router();

route.get("/menu", getMenus);
route.post("/menu", createMenu);

export default route;
