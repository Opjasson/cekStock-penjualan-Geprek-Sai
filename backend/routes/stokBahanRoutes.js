import express from "express"
import { create_StokBahan } from "../controllers/stockBahan.js";

const route = express.Router();

route.get("/stock", )
route.post("/stock", create_StokBahan)

export default route;
