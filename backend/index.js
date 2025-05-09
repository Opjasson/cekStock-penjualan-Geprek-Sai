import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import menuRoute from "./routes/menuRoutes.js"
import stokBahanModel from "./models/stokBahanModel.js"

dotenv.config();
const app = express();

// -- sikronasi tabel otomatis
// (async () => {
//     await stokBahanModel.sync();
// })();

app.use(cors());
app.use(express.json());

app.use(menuRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server running on server http://localhost:${process.env.PORT}`);
});
