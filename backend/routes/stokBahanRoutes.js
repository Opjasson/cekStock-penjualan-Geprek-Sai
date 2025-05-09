import express from "express"
import { create_StokBahan } from "../controllers/stockBahan";

const route = express.Router();

route.post("/stock", create_StokBahan)

export default route;
