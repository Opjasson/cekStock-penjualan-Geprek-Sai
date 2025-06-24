import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Kasir_Layout from "../components/mainLayout/Kasir_Layout";
import { menu1 } from "../assets";

const Stok_Bahan = () => {
    const [data, setData] = useState([]);
    const [findLower, setfindLower] = useState("");

    const navigate = useNavigate();

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/stock");
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    var date = new Date();

    let dataTerkini = date.toISOString().split("T")[0];

    console.log(data);

    // filter data berdasaran hasil search
    const filterNama = data.filter((item) => {
        const words = findLower.split(" ");
        return words.some((word) => item.nama_barang.includes(word));
    });

    const lengthData = filterNama.filter(
        (cek) => cek.createdAt.split("T")[0] === dataTerkini
    );

    //    console.log(lengthData);

    return (
        <Kasir_Layout>
            <div className="flex justify-between items-center w-full">
                <div className="bg-green-600 px-5 rounded-xl">
                    <h1 className="lg:text-2xl text-sm text-white border-b-2">
                        Date :
                    </h1>
                    <p className="text-white">
                        {date.toISOString().split("T")[0]}
                    </p>
                </div>

                <h3 className="text-xl font-bold uppercase">
                    Menampilkan daftar stock bahan baku. Hari ini
                </h3>

                <Link
                    to={"/stock-bahan/add-stockBahan"}
                    className="bg-green-600 hover:bg-green-700 lg:px-10 px-3 lg:py-1.5 rounded-xl text-white lg:text-base text-sm">
                    + Tambah
                </Link>
            </div>

            <div className="mt-7 border-b-2 border-green-500 pb-16 border-2 flex gap-5 flex-wrap">
                {lengthData.length > 0 ? (
                    filterNama
                        .filter(
                            (a) => a.createdAt.split("T")[0] === dataTerkini
                        )
                        .map((item, index) => (
                            <div
                            key={index}
                                onClick={() =>
                                    navigate(
                                        `/stock-bahan/update-stockBahan/${item.id}`
                                    )
                                }
                                class="block max-w-sm w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Nama barang : {item.nama_barang}
                                </h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400">
                                    Satuan : {item.satuan}
                                </p>
                                <p class="font-normal text-gray-700 dark:text-gray-400">
                                    Stock awal : {item.stok_awal}
                                </p>
                                <p class="font-normal text-gray-700 dark:text-gray-400">
                                    Barang masuk : {item.barang_masuk}
                                </p>
                                <p class="font-normal text-gray-700 dark:text-gray-400">
                                    Barang keluar : {item.barang_keluar}
                                </p>
                                <p class="font-normal text-gray-700 dark:text-gray-400">
                                    Stock akhir : {item.stok_akhir}
                                </p>
                            </div>
                        ))
                ) : (
                    <div className="px-5">
                        <p className="text-xl mt-5">Belum ada data hari ini!</p>
                    </div>
                )}
            </div>
        </Kasir_Layout>
    );
};

export default Stok_Bahan;
