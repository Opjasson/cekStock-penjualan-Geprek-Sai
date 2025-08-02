import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import Kasir_Layout from "../components/mainLayout/Kasir_Layout";
import { MdKeyboardBackspace } from "react-icons/md";

const LaporanStok = () => {
    // useState adalah tempat penyimpanan sementara
    const [data, setData] = useState([]);
    const [findLower1, setfindLower1] = useState("null");
    const [findLower2, setfindLower2] = useState("null");
    // ------`

    // navigate untuk berpindah ke halaman lainnya
    const navigate = useNavigate();
    // --------

    // untuk mendapatkan data semua
    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/stock");
            
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    // -------

    useEffect(() => {
        if (!localStorage.getItem("info")) {
            navigate("/login");
        }
    }, [navigate]);

    // useEffect berfungsi untuk menyiapkan data saat halaman baru dibuka
    useEffect(() => {
        getData();
    }, []);
    // --------

    // Merubah data tanggal menjadi format tahun-bulan-tanggal
    const dataAsli = data.map((item) => {
        const tanggalBaru = item.createdAt.split("T")[0];
        return { ...item, createdAt: tanggalBaru };
    });
    // --------

    // Grouping data berdasarkan tanggal data dibuat
    const groupData = _.groupBy(dataAsli, "createdAt");
    // --------

    // filter data gruping
    const filterGroping = Object.keys(groupData).filter((item) => {
        return Object.values(groupData[item]);
    });
    // --------

    // Range tanggal yang dipilih
    const startDate = findLower1;
    const endDate = findLower2;

    const filteredData = data.filter((a) => {
        const tgl = a.createdAt.split("T")[0];
        return tgl >= startDate && tgl <= endDate;
    });

    console.log(filteredData);
    

    // set up print
    const handlePrint = () => {
        const Navbar = document.querySelector("nav");
        const HeadPage = document.querySelector("#headPage");
        const PrintButton = document.querySelector("#printButton");
        const TombolKembali = document.querySelector("#tombolKembali");

        Navbar.setAttribute("hidden", "");
        HeadPage.setAttribute("hidden", "");
        PrintButton.setAttribute("hidden", "");
        window.print();
        TombolKembali.removeAttribute("hidden");
    };
    // end set up print

    return (
        // Tampilan halaman semua data
        <Kasir_Layout>
            {/* head judul halaman */}
            <div
                className="flex-col items-center justify-between"
                id="headPage">
                <div className="mb-10 bg-green-600 md:w-1/2 p-3 rounded-br-4xl rounded-sm text-white">
                    <h1 className="md:text-4xl text-2xl font-extrabold">
                        Laporan Stok Bahan
                    </h1>
                    <p className="md:text-xl font-light">
                        Setting Stok Bahan Yang Ingin Dicetak
                    </p>
                </div>

                <div className="flex mx-auto items-center border w-[50%] bg-slate-300 lg:px-2 px-1 lg:py-1.5 py-0 lg:rounded-xl rounded-sm h-fit justify-between">
                    <div>
                        <p>dari tanggal :</p>
                        <input
                            type="date"
                            className="outline-none w-52 border text-sm"
                            onChange={(e) => setfindLower1(e.target.value)}
                        />
                    </div>
                    <p className="w-32 border"></p>

                    <div>
                        <p>sampai tanggal :</p>
                        <input
                            type="date"
                            className="outline-none w-52 border text-sm"
                            onChange={(e) => setfindLower2(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            {/* end head judul halaman */}

            {/* menampilkan data atau list data */}

            <div className="mt-7 border-b-2 border-black pb-16">
                <button
                    id="printButton"
                    onClick={handlePrint}
                    className="hover:cursor-pointer hover:underline bg-green-500 px-2.5 rounded-lg">
                    Print
                </button>

                <button
                    hidden
                    id="tombolKembali"
                    onClick={() => navigate("/")}
                    className="hover:cursor-pointer flex hover:underline">
                    <svg width="20" height="20" className="rotate-180">
                        <path d="M10 0 L20 10 L10 20 Z" fill="#000" />
                    </svg>
                    Kembali
                </button>
                {findLower1 !== null ? (
                    <div className="flex w-72 justify-between">
                        <p>{findLower1.split("T")[0]}</p>
                        <MdKeyboardBackspace className="rotate-180"/>
                        <p>{findLower2.split("T")[0]}</p>
                    </div>
                ) : (
                    <div>null</div>
                )}

                <div className="border-t-2 border-black">
                    <h1 className="text-center font-bold text-2xl">
                        LAPORAN DATA STOK BAHAN BAKU GEPREK SA'I MEJASEM
                    </h1>
                </div>

                <div className="flex justify-between px-5 py-3 rounded-xl lg:text-lg text-[12px] text-black border-2 font-bold shadow-slate-500 shadow-md">
                    <h2>No</h2>
                    <h2 className="lg:ml-0 ml-1.5 lg:w-40">Tanggal</h2>
                    <h2 className="lg:ml-0 ml-1.5 lg:w-40">Nama barang</h2>
                    <h2 className=" lg:w-32 w-fit lg:ml-0 mr-1.5">Satuan</h2>
                    <h2 className=" lg:w-32 w-fit">Stock awal</h2>
                    <h2 className=" lg:w-32 w-fit">Barang masuk</h2>
                    <h2 className=" lg:w-32 w-fit">Barang keluar</h2>
                    <h2 className=" lg:w-32 w-fit">Stock akhir</h2>
                </div>

                {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between hover:cursor-pointer hover:bg-slate-300 lg:px-5 px-2 py-3 lg:text-lg text-sm font-extralight mt-2 border-b-2 border-slate-400 border">
                            <h2 key={index + 1} className="">
                                {index + 1}
                            </h2>
                            <h2 className=" w-40 ml-3 capitalize">
                                {item.createdAt.split("T")[0]}
                            </h2>
                            <h2 className=" w-40 ml-3 capitalize">
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
                    <p className="p-7">
                        Data kosong pada tanggal yang anda masukan!
                    </p>
                )}

                {/* ---------- */}
            </div>
            {/* end menampilkan list data */}
        </Kasir_Layout>
        // end tampilan halaman data
    );
};

export default LaporanStok;
