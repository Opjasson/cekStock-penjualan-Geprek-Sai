import db from "../config/database.js";
import { DATE, STRING } from "sequelize";
import userModel from "./usersModel.js";

const absenModel = db.define(
    "absen",
    {
        jam_masuk: {
            type: STRING,
            allowNull: true,
            validate: {
                notEmpty: false,
            },
        },
        jam_keluar: {
            type: STRING,
            allowNull: true,
            validate: {
                notEmpty: false,
            },
        },
        tanggal: {
            type: DATE,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        freezeTableName: true,
    }
);

userModel.hasMany(absenModel);

absenModel.belongsTo(userModel, { foreignKey: "userId" });

export default absenModel;
