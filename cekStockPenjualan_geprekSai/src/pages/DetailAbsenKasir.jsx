import React, { useState } from "react";
import Kasir_Layout from "../components/mainLayout/Kasir_Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const DetailAbsenKasir = () => {
    const [dataAbsen1, setDataAbsen] = useState([]);
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    const { id } = useParams();

    const getUser = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8000/user/${id}`
            );
            console.log(response.data);
            setEmail(response.data.email);
            setRole(response.data.role);
            setDataAbsen(response.data.absens);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUser();
    }, [id]);

    const formatTanggal = (date) => {
        const days = [
            "Minggu",
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jum'at",
            "Sabtu",
        ];

        const hari = days[date.getDay()];
        const tgl = String(date.getDate()).padStart(2, "0");
        const bulan = String(date.getMonth() + 1).padStart(2, "0");
        const tahun = date.getFullYear();

        return `${hari}, ${tgl}-${bulan}-${tahun}`;
    };

    // set up print
    const handlePrint = () => {
        const Navbar = document.querySelector("nav");
        const PrintButton = document.querySelector("#printButton");
        const TombolKembali = document.querySelector("#tombolKembali");
        const HeadPage = document.querySelector("#headPage");

        Navbar.setAttribute("hidden", "");
        HeadPage.setAttribute("hidden", "");
        PrintButton.setAttribute("hidden", "");
        window.print();
        TombolKembali.removeAttribute("hidden");
    };

    return (
        <Kasir_Layout>
            <div className="p-6 max-w-5xl mx-auto">
                <h2 id="headPage" className="text-xl font-semibold mb-4">
                    Absensi
                </h2>

                {/* Detail Karyawan */}
                <div className="bg-white shadow rounded-lg p-4 mb-6">
                    <h3 className="font-medium mb-2">Detail Absen</h3>
                    <div className="flex flex-col gap-4 text-sm">
                        <p>
                            <span className="font-semibold">Email</span> :
                            {" " + email}
                        </p>

                        <p>
                            <span className="font-semibold">Divisi</span> :
                            {" " + role}
                        </p>
                    </div>
                </div>

                {/* Filter */}
                <div id="printButton" className="flex items-center gap-3 mb-4">
                    <button
                        onClick={handlePrint}
                        className="ml-auto border px-4 py-1 rounded hover:bg-gray-100">
                        Export Laporan
                    </button>
                </div>

                <h3 className="font-medium mb-2">
                    Absen : Ayam Geprek Sa'i Karyawan
                </h3>

                {/* Tabel */}
                <div className="overflow-x-auto bg-white shadow rounded-lg">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-3 py-2 border">No</th>
                                <th className="px-3 py-2 border">Tanggal</th>
                                <th className="px-3 py-2 border">Jam Masuk</th>
                                <th className="px-3 py-2 border">Jam Keluar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataAbsen1.map((row, index) => (
                                <tr
                                    key={index}
                                    className={"bg-gray-700 text-red-500"}>
                                    <td className="px-3 py-2 border">
                                        {index + 1}
                                    </td>
                                    <td className="px-3 py-2 border">
                                        {formatTanggal(
                                            new Date(row.tanggal.split("T")[0])
                                        )}
                                    </td>
                                    <td className="px-3 py-2 border">
                                        {row.jam_masuk}
                                    </td>
                                    <td className="px-3 py-2 border">
                                        {row.jam_keluar}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button
                        hidden
                        id="tombolKembali"
                        onClick={() => navigate("/absensi-setting-spv")}
                        className="hover:cursor-pointer flex hover:underline">
                        <svg width="20" height="20" className="rotate-180">
                            <path d="M10 0 L20 10 L10 20 Z" fill="#000" />
                        </svg>
                        Kembali
                    </button>
                </div>
            </div>
        </Kasir_Layout>
    );
};

export default DetailAbsenKasir;
