import cartModel from "../models/cartModel.js";

export const addCart = async (req, res) => {
    try {
        const { qty, menuId, transaksiId } = req.body;

        await cartModel.create({
            qty,
            menuId,
            transaksiId,
        });
        res.status(200).json({ msg: "Data berhasil dibuat!" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const getCartAll = async (req, res) => {
    try {
        const response = await cartModel.findAll({
            attributes: ["menuId", "transaksiId", "qty", "createdAt"],
        });
        res.status(200).json({ response });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

