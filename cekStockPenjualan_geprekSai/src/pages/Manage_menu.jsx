import React, { useEffect, useState } from "react";
import Kasir_Layout from "../components/mainLayout/Kasir_Layout";
import { menu1 } from "../assets";
import { MdOutlineDataset } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Manage_menu = () => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();
    const getMenus = async () => {
        try {
            const response = await axios.get("http://localhost:8000/menu");
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMenus();
    }, []);

    return (
        <Kasir_Layout>
            {/* Session Data menu list */}
            <div className=" mb-10 rounded-xl overflow-hidden bg-slate-100">
                {/* head session menu */}

                <div className="flex items-center bg-yellow-300 px-2.5 py-1.5 mb-3">
                    <MdOutlineDataset className="text-3xl" />
                    <h1 className="text-xl">Data Menu</h1>
                </div>

                {/* end head */}
                <div className="flex w-1/2 justify-between px-8">
                    {/* filter menu */}
                    <select
                        name=""
                        id=""
                        className="w-56 px-1.5 py-2 bg-green-600 rounded-lg text-white">
                        <option value="">Semua kategori</option>
                        <option value="minuman">Minuman</option>
                        <option value="makanan">Makanan</option>
                    </select>
                    {/* end filter menu */}
                    <Link
                        to={"/manage-menu/add-menu"}
                        className="flex items-center gap-2 bg-green-600 px-1.5 py-1 rounded-md hover:cursor-pointer hover:bg-green-700 text-white">
                        <IoAddCircleOutline className="text-lg" />
                        Tambah
                    </Link>
                </div>

                {/* Show all menu */}
                <div className="flex flex-wrap justify-around mt-12 relative">
                    {data.map((item) => (
                        <div
                            onClick={() =>
                                navigate(`/manage-menu/updatemenu/${item.id}`)
                            }
                            className="border w-48 mb-5 hover:cursor-pointer rounded-lg overflow-hidden hover:bg-slate-200 shadow-lg"
                            key={item.id}>
                            <div className="px-1.5 py-1.5">
                                <img
                                    src={item.img}
                                    alt=""
                                    className="md:h-28 h-16 border mx-auto w-full"
                                />
                            </div>

                            <div className="text-center pb-2.5 font-bold">
                                <p>{item.nama_menu}</p>
                                <p className="text-green-500">
                                    Rp.{item.harga}
                                </p>
                                <p>Stock : {item.stock_menu}x</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* end show all menu */}
            </div>
            {/* end session menu list */}
        </Kasir_Layout>
    );
};

export default Manage_menu;
