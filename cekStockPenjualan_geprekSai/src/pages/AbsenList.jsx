import React, { useState } from "react";

const AbsenList = () => {
    const [bulan, setBulan] = useState("12");
    const [tahun, setTahun] = useState("2020");

    // Dummy data absensi
    const dataAbsen = [
        {
            no: 1,
            tanggal: "Selasa, 01-12-2020",
            jamMasuk: "Tidak Hadir",
            jamKeluar: "Tidak Hadir",
            status: "tidak-hadir",
        },
        {
            no: 2,
            tanggal: "Rabu, 02-12-2020",
            jamMasuk: "Tidak Hadir",
            jamKeluar: "Tidak Hadir",
            status: "tidak-hadir",
        },
        {
            no: 3,
            tanggal: "Kamis, 03-12-2020",
            jamMasuk: "Tidak Hadir",
            jamKeluar: "Tidak Hadir",
            status: "tidak-hadir",
        },
        {
            no: 4,
            tanggal: "Jum'at, 04-12-2020",
            jamMasuk: "Tidak Hadir",
            jamKeluar: "Tidak Hadir",
            status: "tidak-hadir",
        },
        {
            no: 5,
            tanggal: "Sabtu, 05-12-2020",
            jamMasuk: "Libur Akhir Pekan",
            jamKeluar: "Libur Akhir Pekan",
            status: "libur",
        },
    ];

    const handleExport = () => {
        alert("Export laporan absensi...");
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Absensi</h2>

            {/* Detail Karyawan */}
            <div className="bg-white shadow rounded-lg p-4 mb-6">
                <h3 className="font-medium mb-2">Detail Absen</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <p>
                        <span className="font-semibold">Nama</span> : Anissa
                        Rahma
                    </p>
                    <p>
                        <span className="font-semibold">Divisi</span> :
                        Marketing
                    </p>
                </div>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-3 mb-4">
                <select
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
                </select>

                <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                    Tampilkan
                </button>

                <button
                    onClick={handleExport}
                    className="ml-auto border px-4 py-1 rounded hover:bg-gray-100">
                    Export Laporan
                </button>
            </div>

            <h3 className="font-medium mb-2">Absen Bulan : Desember {tahun}</h3>

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
                        {dataAbsen.map((row) => (
                            <tr
                                key={row.no}
                                className={
                                    row.status === "tidak-hadir"
                                        ? "bg-red-500 text-white"
                                        : "bg-gray-700 text-white"
                                }>
                                <td className="px-3 py-2 border">{row.no}</td>
                                <td className="px-3 py-2 border">
                                    {row.tanggal}
                                </td>
                                <td className="px-3 py-2 border">
                                    {row.jamMasuk}
                                </td>
                                <td className="px-3 py-2 border">
                                    {row.jamKeluar}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AbsenList;
