import stokBahan_Model from "../models/stokBahanModel.js";

export const get_StokBahan = async (req, res) => {
    try {
        const response = await stokBahan_Model.findAll({
            attributes: [
                "id",
                "nama_barang",
                "satuan",
                "stok_awal",
                "barang_masuk",
                "barang_keluar",
                "stok_akhir",
                "createdAt",
            ],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const create_StokBahan = async (req, res) => {
    try {
        const {
            nama_barang,
            satuan,
            stok_awal,
            barang_masuk,
            barang_keluar,
            stok_akhir,
        } = req.body;
        await stokBahan_Model.create({
            nama_barang,
            satuan,
            stok_awal,
            barang_masuk,
            barang_keluar,
            stok_akhir,
        });
        res.status(200).json({ msg: "Data berhasil dibuat!" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const update_StokBahan = async (req, res) => {
    try {
        const {
            nama_barang,
            satuan,
            stok_awal,
            barang_masuk,
            barang_keluar,
        } = req.body;
        await stokBahan_Model.update(
            {
                nama_barang,
                satuan,
                stok_awal,
                barang_masuk,
                barang_keluar,
                stok_akhir : stok_awal + barang_masuk - barang_keluar,
            },
            {
                where: { id: req.params.id },
            }
        );
        res.status(200).json({ msg: "Data berhasil dirubah" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const getById_StockBahan = async (req, res) => {
    try {
        const stock = await stokBahan_Model.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!stock) return res.status(404).json({ msg: "Data tidak ada!" });

        res.status(200).json(stock);
    } catch (error) {
        res.status(400).json({ msg: "Internal server error" });
    }
};