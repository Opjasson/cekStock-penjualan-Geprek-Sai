import express from "express"
import { create_StokBahan, get_StokBahan, update_StokBahan } from "../controllers/stockBahan.js";


const route = express.Router();

route.get("/stock", get_StokBahan)
route.post("/stock", create_StokBahan)
route.patch("/stock/:id", update_StokBahan)

export default route;
