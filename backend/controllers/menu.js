import menuModel from "./models/menuModel.js";

export const createMenu = async (req, res) => {
    try {
        const { nama_menu, harga, kategori, stock_menu, img } = req.body;

        await menuModel.create({
            nama_menu,
            harga,
            kategori,
            stock_menu,
            img,
        });
        res.status(201).json({msg : "Data berhasil ditambahkan"})
    } catch (error) {
        res.status(400).json({msg : error.message})
    }
};

