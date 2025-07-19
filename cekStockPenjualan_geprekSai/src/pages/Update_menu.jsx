import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Kasir_Layout from "../components/mainLayout/Kasir_Layout";

const Update_menu = () => {
    const [nama_menu, setNamaMenu] = useState("");
    const [kategori, setKategori] = useState("");
    const [harga, setHarga] = useState(0);
    const [img, setImg] = useState("");

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const getDataMenu = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/menu/${id}`
                );
                setNamaMenu(response.data.nama_menu);
                setKategori(response.data.kategori);
                setHarga(response.data.harga);
                setImg(response.data.img);
            } catch (error) {
                console.log(error);
            }
        };

        getDataMenu();
    }, [id]);

    const postGambar = async (e) => {
        try {
            const file = e.target.files[0];

            if (!file) return;
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "Cloudinary_my_first_time");
            data.append("cloud_name", "dqcnnluof");

            const res = await fetch(
                "https://api.cloudinary.com/v1_1/dqcnnluof/image/upload",
                {
                    method: "POST",
                    body: data,
                }
            );

            const done = await res.json();
            setImg(done.url);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdateMenu = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:8000/menu/${id}`, {
                nama_menu,
                harga,
                kategori,
                img,
            });
            alert("Menu berhasil dirubah!");
            navigate("/manage-menu");
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteMenu = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:8000/menu/${id}`);
            alert("Menu berhasil dihapus!");
            navigate("/manage-menu");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Kasir_Layout>
            <div className="mb-10 bg-green-500 md:w-1/2 p-3 rounded-4xl text-white">
                <h1 className="md:text-4xl text-2xl font-extrabold border-b-2 border-yellow-400 mb-3">
                    Update Menu
                </h1>
                <p className="md:text-xl font-light border-b-2 border-yellow-400">
                    Mengubah Menu Makanan dan Minuman
                </p>
            </div>

            {/* Form Start */}
            <form
                onSubmit={handleUpdateMenu}
                className="flex flex-col gap-5 md:w-2/3 mx-auto pb-20">
                <div className="flex flex-col md:gap-2">
                    <label className="md:text-xl text-base" htmlFor="namaStock">
                        Nama Menu
                    </label>
                    <input
                        id="namaMenu"
                        className="border rounded-xl p-1.5 md:p-2"
                        type="text"
                        value={nama_menu}
                        required
                        onChange={(e) => setNamaMenu(e.target.value)}
                    />
                </div>

                <div className="flex flex-col md:gap-2">
                    <label className="md:text-xl text-base" htmlFor="harga">
                        Harga
                    </label>
                    <input
                        id="harga"
                        className="border rounded-xl p-1.5 md:p-2"
                        type="number"
                        value={harga}
                        required
                        onChange={(e) => setHarga(e.target.value)}
                    />
                </div>

                <div className="flex flex-col md:gap-2">
                    <label htmlFor="kategori" className="md:text-xl text-base">
                        Kategori
                    </label>
                    <select
                        onChange={(e) => setKategori(e.target.value)}
                        id="kategori"
                        className="border md:p-2 p-1.5 rounded-xl">
                        <option value={kategori}>{kategori}</option>
                        <option value="makanan">Makanan</option>
                        <option value="minuman">Minuman</option>
                    </select>
                </div>

                <div className="flex flex-col md:gap-2">
                    <label className="md:text-xl text-base" htmlFor="gambar">
                        Gambar Menu
                    </label>
                    <input
                        id="gambar"
                        className="border rounded-xl p-1.5 md:p-2"
                        type="file"
                        onChange={postGambar}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-green-500 w-1/4 mx-auto px-3 py-2 hover:cursor-pointer hover:bg-green-600 rounded-xl text-white font-extrabold">
                    Ubah
                </button>
                <button
                    onClick={handleDeleteMenu}
                    type="button"
                    className="bg-red-500 w-1/4 mx-auto px-3 py-2 hover:cursor-pointer hover:bg-red-600 rounded-xl text-white font-extrabold">
                    Delete
                </button>
            </form>
            {/* Form End */}
        </Kasir_Layout>
    );
};

export default Update_menu;
