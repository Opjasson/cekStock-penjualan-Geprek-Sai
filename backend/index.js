import express from "express";
import menuModel from "./models/menuModel.js";
import cors from "cors"

const app = express();

// -- sikronasi tabel otomatis
// (async () => {
//     await menuModel.sync();
// })();

app.use(cors())
app.use(express.json())


app.listen(8000, () => {
    console.log("server running");
});
