import React, { useState } from "react";
import Kasir_Layout from "../components/mainLayout/Kasir_Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AbsenSetSpv = () => {
    // Dummy data karyawan
    const karyawan = [
        { id: 1, nama: "Anissa Rahma" },
        { id: 2, nama: "Willy" },
    ];

    const handleDetail = (id) => {
        alert(`Lihat detail karyawan dengan ID: ${id}`);
        // di sini bisa diarahkan ke halaman detail absensi
        // contoh: navigate(`/karyawan/${id}`)
    };

    return (
        <Kasir_Layout>
            <div className="p-6 max-w-4xl mx-auto">
                <h2 className="text-xl font-semibold mb-4">Absensi</h2>

                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <h3 className="px-4 py-2 font-medium border-b">
                        Daftar Karyawan
                    </h3>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-4 py-2 border">NO</th>
                                <th className="px-4 py-2 border">KARYAWAN</th>
                                <th className="px-4 py-2 border">AKSI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {karyawan.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">
                                        {index + 1}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {item.nama}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <button
                                            onClick={() =>
                                                handleDetail(item.id)
                                            }
                                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 flex items-center gap-1">
                                            🔍 Detail
                                        </button>
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
