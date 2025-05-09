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
                        Stock barang
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

            <div className="mt-7 border-b-2 border-blue-500 pb-16">
                <div className="flex justify-between px-5 py-3 bg-yellow-300 text-black rounded-xl lg:text-lg text-[12px] font-bold shadow-slate-500 shadow-md">
                    <h2>No</h2>
                    <h2 className="lg:ml-0 ml-1.5 lg:w-40">Nama barang</h2>
                    <h2 className=" lg:w-32 w-fit lg:ml-0 mr-1.5">Satuan</h2>
                    <h2 className=" lg:w-32 w-fit">Stock awal</h2>
                    <h2 className=" lg:w-32 w-fit">Barang masuk</h2>
                    <h2 className=" lg:w-32 w-fit">Barang keluar</h2>
                    <h2 className=" lg:w-32 w-fit">Stock akhir</h2>
                </div>

                {lengthData.length > 0 ? (
                    filterNama
                        .filter(
                            (a) => a.createdAt.split("T")[0] === dataTerkini
                        )
                        .map((item, index) => (
                            <div
                                key={index}
                                onClick={() =>
                                    navigate(`Detail-stock/${item.id}`)
                                }
                                className="flex justify-between hover:cursor-pointer hover:bg-slate-300 lg:px-5 px-2 py-3 lg:text-lg text-sm font-extralight mt-2 border-b-2 ">
                                <h2 key={index + 1} className="">
                                    {index + 1}
                                </h2>
                                <h2 className="ml-3 w-40 capitalize">
                                    {item.nama_barang}
                                </h2>
                                <h2 className="w-32">{item.satuan}</h2>
                                <h2 className="w-32">{item.stok_awal}</h2>
                                <h2 className="w-32">{item.barang_masuk}</h2>
                                <h2 className="w-32">{item.barang_keluar}</h2>
                                <h2 className="w-32">{item.stok_akhir}</h2>
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
