import menuModel from "../models/menuModel.js";

export const createMenu = async (req, res) => {
    try {
        const { nama_menu, harga, kategori, stock_menu, img } = req.body;

        await menuModel.create({
            nama_menu,
            harga,
            kategori,
            img,
        });
        res.status(201).json({msg : "Data berhasil ditambahkan"})
    } catch (error) {
        res.status(400).json({msg : error.message})
    }
};

export const getMenus = async (req, res) => {
    try {
        const response = await menuModel.findAll({
            attributes: [
                "id",
                "nama_menu",
                "harga",
                "kategori",
                "img",
            ],
        });
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const getMenuById = async (req, res) => {
    try {
        const response = await menuModel.findOne({
            where: {
                id : req.params.id
            },
            attributes: [
                "id",
                "nama_menu",
                "harga",
                "kategori",
                "img",
            ],
        });
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const updateData_Menu = async (req, res) => {
    try {
        const dataMenu = await menuModel.findOne({
            where: {
                id: req.params.id,
            },
        });
        const { nama_menu, harga, kategori, stock_menu, img } = req.body;
        await dataMenu.update(
            {
                nama_menu,
                harga,
                kategori,
                img,
            },
            {
                where: {
                    id: dataMenu.id,
                },
            }
        );
        res.status(200).json({ msg: "data berhasil dirubah!" });
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
};