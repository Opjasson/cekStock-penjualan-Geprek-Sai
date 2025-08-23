import React, { useState } from "react";
import Kasir_Layout from "../components/mainLayout/Kasir_Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AbsenSetSpv = () => {
    const [dataAbsen1, setDataAbsen] = useState([]);
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();
    const absenID = localStorage.getItem("idAbsen");

    const tgl = new Date();
    const jam = String(tgl.getHours()).padStart(2, "0"); // 00 - 23
    const menit = String(tgl.getMinutes()).padStart(2, "0"); // 00 - 59
    const detik = String(tgl.getSeconds()).padStart(2, "0"); // 00 - 59
    const userId = localStorage.getItem("id");
    console.log(tgl.toISOString());

    const getAbsensUser = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8000/absen/${userId}`
            );
            console.log(response.data);
            setDataAbsen(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAbsensUser();
    }, [userId]);

    const getUser = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8000/user/${userId}`
            );
            console.log(response.data);
            setEmail(response.data.email);
            setRole(response.data.role);
            // setDataAbsen(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUser();
    }, [userId]);

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

    const createAbsen = async () => {
        try {
            const response = await axios.post("http://localhost:8000/absen", {
                jam_masuk: `${jam}:${menit}:${detik}`,
                tanggal: tgl.toISOString(),
                userId,
            });
            console.log("data", response.data.data);
            // setIdAbsen(response.data.data.id);
            localStorage.setItem("absen", "true");
            localStorage.setItem("idAbsen", response.data.data.id);
            alert("Berhasil absen :)");
            navigate("/manage-menu");
        } catch (error) {
            console.log(error);
        }
    };

    const createPulang = async () => {
        try {
            await axios.patch(`http://localhost:8000/absen/${absenID}`, {
                jam_keluar: `${jam}:${menit}:${detik}`,
            });
            alert("Silahkan untuk logout :)");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Kasir_Layout>
            <div className="p-6 max-w-5xl mx-auto">
                <h2 className="text-xl font-semibold mb-4">Absensi</h2>

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
                        <div className="flex w-1/2 gap-5">
                            <button
                                onClick={createAbsen}
                                disabled={
                                    localStorage.getItem("absen") ? true : false
                                }
                                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 w-52">
                                ABSEN
                            </button>

                            <button
                                onClick={createPulang}
                                disabled={
                                    localStorage.getItem("absen") ? false : true
                                }
                                className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 w-52">
                                PULANG
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filter */}
                <div className="flex items-center gap-3 mb-4">
                    {/* <select
                        value={bulan}
                        onChange={(e) => setBulan(e.target.value)}
                        className="border rounded px-3 py-1">
                        <option value="12">Desember</option>
                        <option value="11">November</option>
                        <option value="10">Oktober</option>
                    </select>

                    <select
                        value={tahun}
                        onChange={(e) => setTahun(e.target.value)}
                        className="border rounded px-3 py-1">
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select> */}

                    {/* <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                        Tampilkan
                    </button> */}

                    {/* <button
                        // onClick={handleExport}
                        className="ml-auto border px-4 py-1 rounded hover:bg-gray-100">
                        Export Laporan
                    </button> */}
                </div>
                {/* 
                <h3 className="font-medium mb-2">
                    Absen Bulan : Desember {tahun}
                </h3> */}

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
                                    className={"bg-gray-700 text-white"}>
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
                </div>
            </div>
        </Kasir_Layout>
    );
};

export default AbsenSetSpv;
