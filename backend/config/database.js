import { Sequelize } from "sequelize";

const db = new Sequelize("penjualan_stockBahan_Sai", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default db
