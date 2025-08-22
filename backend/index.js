import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import menuRoute from "./routes/menuRoutes.js";
import stockBahanRoute from "./routes/stokBahanRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoute.js"
import transaksi_Route from "./routes/transaksiRoute.js";
import cart_Route from "./routes/cartRoute.js";
import absenRoute from "./routes/absenRoute.js"
import stokBahan_Model from "./models/stokBahanModel.js";
import Users from "./models/absenModel.js";

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
app.use(authRoutes);
app.use(transaksi_Route);
app.use(cart_Route);
app.use(absenRoute);


app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
    }else{
        console.log(
            `Server running on server http://localhost:${process.env.PORT}`
        );
    }
    
});
