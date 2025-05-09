import db from "../config/database";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const stokBahan_Model = db.define("data_stock", {
    nama_barang: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    satuan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    stok_awal: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: false,
        },
    },
    barang_masuk: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: false,
        },
    },
    barang_keluar: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: false
        }
    },
    stok_akhir: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: false
        }
    }
});

export default stokBahan_Model;
