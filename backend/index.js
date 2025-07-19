import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import menuRoute from "./routes/menuRoutes.js";
import stockBahanRoute from "./routes/stokBahanRoutes.js";
import stokBahan_Model from "./models/stokBahanModel.js";
import userRoutes from "./routes/userRoutes.js"
import Users from "./models/usersModel.js";

dotenv.config();
const app = express();

// -- sikronasi tabel otomatis
// (async () => {
//     await Users.sync();
// })();

app.use(cors());
app.use(express.json());

app.use(menuRoute);
app.use(stockBahanRoute);
app.use(userRoutes);

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
    }else{
        console.log(
            `Server running on server http://localhost:${process.env.PORT}`
        );
    }
    
});
