import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Kasir_Layout from "../components/mainLayout/Kasir_Layout";
import { FaPrint } from "react-icons/fa";
import axios from "axios";
import { FaBackward } from "react-icons/fa";

const Laporan_Page = () => {
    const [menu, setMenu] = useState([]);

    const [cart, setCart] = useState([]);
    const [findLower1, setfindLower1] = useState(
        new Date().toISOString().split("T")[0]
    );
    const [findLower2, setfindLower2] = useState(
        new Date().toISOString().split("T")[0]
    );

    const navigate = useNavigate()
    const getCart = async () => {
        try {
            const response = await axios.get("http://localhost:8000/cart");
            const keranjang = await response.data.response;

            setCart(keranjang);
        } catch (error) {
            console.log(error);
        }
    };

    const getDataBarang = async () => {
        try {
            const response = await axios.get("http://localhost:8000/menu");
            const barang = await response.data;

            setMenu(barang);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCart();
    }, []);

    useEffect(() => {
        getDataBarang();
    }, []);

    // Penting ----------------
    // Buat map untuk mempermudah pencarian nama berdasarkan barangId
    const barangMap = Object.fromEntries(menu.map((b) => [b.id, b.nama_menu]));

    // Ubah barangId menjadi nama
    const cartDenganNama = cart.map((item) => ({
        createdAt: item.createdAt.split("T")[0],
        qty: item.qty,
        transaksiId: item.transaksiId,
        nama_menu: barangMap[item.menuId],
    }));

    const grouped1 = new Map();

    for (const item of cartDenganNama) {
        const key = `${item.createdAt}_${item.nama_menu}`;

        if (grouped1.has(key)) {
            grouped1.get(key).qty += item.qty;
        } else {
            grouped1.set(key, {
                createdAt: item.createdAt,
                nama_menu: item.nama_menu,
                qty: item.qty,
            });
        }
    }

    const hasilGabungan = Array.from(grouped1.values());

    // Buat map nama_barang => data barang
    const barangMap2 = Object.fromEntries(menu.map((b) => [b.nama_menu, b]));

    // Tambahkan harga ke setiap item transaksi
    const transaksiDenganHarga = hasilGabungan.map((item) => {
        const barangInfo = barangMap2[item.nama_menu] || {};
        return {
            ...item,
            harga: barangInfo.harga || 0,
        };
    });

    // Range tanggal yang dipilih
    const startDate = findLower1;
    const endDate = findLower2;

    // // Filter berdasarkan range
    const filteredData = transaksiDenganHarga.filter((item) => {
        const tgl = item.createdAt;

        return tgl >= startDate && tgl <= endDate;
    });

    const totalPenjualan2 = filteredData.reduce((total, item) => {
        return total + item.harga * item.qty;
    }, 0);
    console.log("Test : ", filteredData);

    // set up print
    const handlePrint = () => {
        const Navbar = document.querySelector("nav");
        const HeadPage = document.querySelector("#headPage");
        const SetDate = document.querySelector("#setDate");
        const PrintButton = document.querySelector("#printButton");
        const TombolKembali = document.querySelector("#tombolKembali");

        Navbar.setAttribute("hidden", "");
        SetDate.setAttribute("hidden", "");
        HeadPage.setAttribute("hidden", "");
        PrintButton.setAttribute("hidden", "");
        window.print();
        TombolKembali.removeAttribute("hidden");
    };

    return (
        <Kasir_Layout>
            <div
                id="headPage"
                className="mb-10 bg-green-600 md:w-1/2 p-3 rounded-br-4xl rounded-sm text-white">
                <h1 className="md:text-4xl text-2xl font-extrabold">
                    Laporan Penjualan
                </h1>
                <p className="md:text-xl font-light">
                    Menampilkan Laporan Penjualan Makanan Dan Minuman
                </p>
            </div>

            <div
                id="setDate"
                className="flex items-center mx-auto mb-10 border w-[50%] bg-slate-300 lg:px-2 px-1 lg:py-1.5 py-0 lg:rounded-xl rounded-sm h-fit justify-between">
                <div>
                    <p>dari tanggal :</p>
                    <input
                        type="date"
                        className="outline-none w-52 border text-sm"
                        value={findLower1}
                        onChange={(e) => setfindLower1(e.target.value)}
                    />
                </div>
                <p className="w-32 border"></p>

                <div>
                    <p>sampai tanggal :</p>
                    <input
                        type="date"
                        className="outline-none w-52 border text-sm"
                        value={findLower2}
                        onChange={(e) => setfindLower2(e.target.value)}
                    />
                </div>
            </div>

            <div
                onClick={handlePrint}
                id="printButton"
                className="bg-green-500 justify-center gap-2.5 flex w-1/12 px-3 py-2 hover:cursor-pointer hover:bg-green-600 rounded-xl text-white font-extrabold">
                <FaPrint className="text-xl mt-0.5" />
                <p className="text-xl">Print</p>
            </div>

            <div
                id="tombolKembali"
                onClick={() => navigate("/")}
                hidden
                className="bg-green-500 justify-center gap-2.5 flex w-[10%] px-3 py-2 hover:cursor-pointer hover:bg-green-600 rounded-xl text-white font-extrabold">
                <FaBackward className="text-xl mt-0.5" />
                <p className="text-xl">Kembali</p>
            </div>

            <div className="mb-48">
                <div className="border-b-2 pb-3 text-center">
                    <h1 className="text-2xl font-bold">
                        Laporan Penjualan Ayam Geprek Sa'i Mejasem
                    </h1>
                    <p>
                        Ayam geprek sa'i | +6285293729072 | geprekSai@gmail.com
                    </p>
                    <p>
                        Ayam Geprek Sa'i Sibata, Mejasem Bar., Kec. Kramat,
                        Tegal, Jawa Tengah 52181.
                    </p>
                </div>

                <div className="my-5">
                    <p>
                        <span className="font-bold">Periode</span> :{" "}
                        {findLower1}
                        {" ->"} {findLower2}
                    </p>
                    <p>
                        <span className="font-bold">Jumlah Transaksi</span> : {filteredData.length}
                    </p>
                    <p>
                        <span className="font-bold">Total Pendapatan</span> :
                        Rp. {Number(totalPenjualan2).toLocaleString()}
                    </p>
                </div>

                <div className="border relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs border-b-2 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tanggal
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Qty
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Harga
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total Penjualan
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-black">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {index + 1}
                                        </th>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.createdAt}
                                        </th>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.nama_menu}
                                        </th>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.qty}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.harga}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.harga * item.qty}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <h3 className="text-gray-900 font-bold text-2xl">
                                    Belum Ada Penjualan Bulan Ini
                                </h3>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Kasir_Layout>
    );
};

export default Laporan_Page;
