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

    const navigate = useNavigate();
    return (
        <Kasir_Layout>
            <div className="flex">
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
                <div className="border w-[34%]">
                    <div className="flex items-center">
                        <FaShoppingCart className="text-3xl" />
                        <h1>Keranjang</h1>
                    </div>
                </div>
            </div>
        </Kasir_Layout>
    );
};

export default Home;
