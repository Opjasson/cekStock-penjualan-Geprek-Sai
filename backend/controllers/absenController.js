import absenModel from "../models/absenModel.js";

export const createAbsen = async (req, res) => {
    try {
        const { jam_masuk, jam_keluar, tanggal, userId } = req.body;

        await absenModel.create({
            jam_masuk,
            jam_keluar,
            tanggal,
            userId
        });
        res.status(201).json({ msg: "Data berhasil ditambahkan" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const getAbsens = async (req, res) => {
    try {
        const response = await absenModel.findAll({
            attributes: ["id", "jam_masuk", "jam_keluar", "tanggal", "userId"],
        });
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const getAbsenById = async (req, res) => {
    try {
        const response = await absenModel.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "nama_menu", "harga", "kategori", "img"],
        });
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const updateData_Absen = async (req, res) => {
    try {
        const dataAbsen = await absenModel.findOne({
            where: {
                id: req.params.id,
            },
        });
        const { jam_masuk, jam_keluar, tanggal, userId } = req.body;
        await dataAbsen.update(
            {
                jam_masuk,
                jam_keluar,
                tanggal,
                userId,
            },
            {
                where: {
                    id: dataAbsen.id,
                },
            }
        );
        res.status(200).json({ msg: "data berhasil dirubah!" });
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
};

export const deleteAbsen = async (req, res) => {
    try {
        absenModel.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "data berhasil dihapus!" });
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
};
