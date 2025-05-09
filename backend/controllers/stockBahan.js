import stokBahan_Model from "../models/stokBahanModel.js";

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
        res.status(200).json({msg: "Data berhasil dibuat!"})
    } catch (error) {
        res.status(400).json({msg : error.message})
    }
};
