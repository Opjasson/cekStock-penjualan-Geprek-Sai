import React, { useState } from "react";
import Kasir_Layout from "../components/mainLayout/Kasir_Layout";
import { MdOutlineDataset } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { logoSai, menu1 } from "../assets";

const Home = () => {
    const [data, setData] = useState([]);
    const [findLower, setfindLower] = useState("");
    const [cart, setCart] = useState([
        {
            no: 1,
            nama: "Ayam chicken",
            harga: 30000,
        },
        {
            no: 2,
            nama: "Pop ice",
            harga: 20000,
        },
        {
            no: 3,
            nama: "Kentang",
            harga: 25000,
        },
    ]);

    const navigate = useNavigate();
    return (
        <Kasir_Layout>
            <div className="flex justify-between">
                <div className="border w-4/6">
                    <div className="flex items-center">
                        <MdOutlineDataset className="text-3xl" />
                        <h1>Data Menu</h1>
                    </div>

                    <div className="flex justify-between">
                        <select name="" id="" className="border">
                            <option value="">Semua kategori</option>
                            <option value="minuman">Minuman</option>
                            <option value="makanan">Makanan</option>
                        </select>

                        <div className="flex items-center bg-slate-300 lg:px-2 px-1 lg:py-1.5 py-0 lg:rounded-xl rounded-sm lg:w-80 w-[55%]">
                            <input
                                type="text"
                                placeholder="Cari nama..."
                                className="outline-none w-full text-sm"
                                onChange={(e) => setfindLower(e.target.value)}
                            />
                            <FaMagnifyingGlass className="lg:text-2xl" />
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-around mt-5">
                        <div className="border w-48 mb-5 hover:cursor-pointer">
                            <div className="border">
                                <img
                                    src={menu1}
                                    alt=""
                                    className="md:h-28 h-16 border mx-auto"
                                />
                            </div>

                            <div className="text-center">
                                <p>Nasi ayam special</p>
                                <p>Rp.10.000</p>
                                <p>Stock : 10x</p>
                            </div>
                        </div>

                        <div className="border w-48 mb-5 hover:cursor-pointer">
                            <div className="border">
                                <img
                                    src={menu1}
                                    alt=""
                                    className="md:h-28 h-16 border mx-auto"
                                />
                            </div>

                            <div className="text-center">
                                <p>Nasi ayam special</p>
                                <p>Rp.10.000</p>
                                <p>Stock : 10x</p>
                            </div>
                        </div>

                        <div className="border w-48 mb-5 hover:cursor-pointer">
                            <div className="border">
                                <img
                                    src={menu1}
                                    alt=""
                                    className="md:h-28 h-16 border mx-auto"
                                />
                            </div>

                            <div className="text-center">
                                <p>Nasi ayam special</p>
                                <p>Rp.10.000</p>
                                <p>Stock : 10x</p>
                            </div>
                        </div>

                        <div className="border w-48 mb-5 hover:cursor-pointer">
                            <div className="border">
                                <img
                                    src={menu1}
                                    alt=""
                                    className="md:h-28 h-16 border mx-auto"
                                />
                            </div>

                            <div className="text-center">
                                <p>Nasi ayam special</p>
                                <p>Rp.10.000</p>
                                <p>Stock : 10x</p>
                            </div>
                        </div>

                        <div className="border w-48 mb-5 hover:cursor-pointer">
                            <div className="border">
                                <img
                                    src={menu1}
                                    alt=""
                                    className="md:h-28 h-16 border mx-auto"
                                />
                            </div>

                            <div className="text-center">
                                <p>Nasi ayam special</p>
                                <p>Rp.10.000</p>
                                <p>Stock : 10x</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border w-[30%]">
                    <div className="flex items-center">
                        <FaShoppingCart className="text-3xl" />
                        <h1>Keranjang</h1>
                    </div>

                    <div className="border flex justify-between">
                        <label htmlFor="">ATAS NAMA :</label>
                        <input type="text" className="border" />
                    </div>

                    <div>
                        <div className="flex">
                            <FaShoppingCart />
                            <p>List Keranjang</p>
                        </div>

                        <div
                            onClick={() => navigate(`Detail-stock/${item.id}`)}
                            className="flex justify-between hover:bg-slate-300 px-2 py-1.5 text-sm font-extralight mt-2 border border-slate-400">
                            <h2 className="pr-3.5 ">No</h2>
                            <h2 className="w-32 ">Nama</h2>
                            <h2 className="w-32 ">Qty</h2>
                            <h2 className="w-32 ">Harga</h2>
                            <h2 className="px-1">#</h2>
                        </div>

                        <div
                            onClick={() => navigate(`Detail-stock/${item.id}`)}
                            className="flex justify-between hover:bg-slate-300 px-2 py-3 text-sm font-extralight border border-slate-400">
                            <h2 className="pr-3.5 ">No</h2>
                            <h2 className="w-32 ">Nasi Ayam special</h2>
                            <div className="pr-3 w-[7.5rem]">
                                <input
                                    className="w-full h-5 rounded-md border border-slate-300 pl-1"
                                    type="number"
                                />
                            </div>
                            <h2 className="w-32 ">Harga</h2>
                            <h2 className="bg-red-500 hover:bg-red-600 hover:cursor-pointer px-1 rounded-sm text-white">
                                x
                            </h2>
                        </div>

                        {cart.map((item) => (
                            <div className="flex justify-between hover:bg-slate-300 px-2 py-3 text-sm font-extralight border border-slate-400">
                                <h2 className="pr-3.5 ">{item.no}</h2>
                                <h2 className="w-32 ">{item.nama}</h2>
                                <div className="pr-3 w-[7.5rem]">
                                    <input
                                        className="w-full h-5 rounded-md border border-slate-300 pl-1"
                                        type="number"
                                    />
                                </div>
                                <h2 className="w-32 ">{item.harga}</h2>
                                <h2 className="bg-red-500 hover:bg-red-600 hover:cursor-pointer px-1 rounded-sm text-white">
                                    x
                                </h2>
                            </div>
                        ))}

                        <div>
                            <div className="border flex gap-1.5">
                                <label htmlFor="" className="border">
                                    Total Bayar
                                </label>
                                <p>:</p>
                                <input type="number" className="border" />
                            </div>
                            <div className="border flex gap-1.5">
                                <label htmlFor="" className="border pr-[46px]">
                                    Cash
                                </label>
                                <p>:</p>
                                <input type="number" className="border" />
                            </div>
                            <div className="border flex gap-1.5">
                                <label htmlFor="" className="border pr-[22px]">
                                    Kembali
                                </label>
                                <p>:</p>
                                <input type="number" className="border" />
                            </div>
                        </div>

                        <div className="flex justify-between w-2/4 mx-auto mt-5">
                            <button className="bg-yellow-300 px-1.5 py-1 rounded-md hover:cursor-pointer hover:bg-yellow-400">
                                Selesai
                            </button>
                            <button className="bg-blue-300 px-1.5 py-1 rounded-md hover:cursor-pointer hover:bg-blue-400">
                                Cetak
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Kasir_Layout>
    );
};

export default Home;
