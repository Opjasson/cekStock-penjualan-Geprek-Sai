import React, { useEffect, useState } from "react";
import Kasir_Layout from "../components/mainLayout/Kasir_Layout";
import { MdOutlineDataset } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { logoSai, menu1 } from "../assets";

const keranjang = [
    {
        id: 1,
        nama: "ayam bakar",
        image: menu1,
        idr: 15.0,
    },
    {
        id: 2,
        nama: "ayam chicken",
        image: menu1,
        idr: 25.0,
    },
];

const Home = () => {
    const [data, setData] = useState([]);
    const [findLower, setfindLower] = useState("");
    const [qty, setQty] = useState(0);
    const [cart, setCart] = useState([]);

    const navigate = useNavigate();

    const addCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(
                cart.map((barang) =>
                    barang.id === id
                        ? { ...barang, qty: barang.qty + 1 }
                        : barang
                )
            );
        } else {
            const masuk = keranjang.filter((e) => e.id === id);
            console.log(masuk);
            masuk.map((a) =>
                setCart([...cart, { id, nama: a.nama, qty: 1, idr: a.idr }])
            );
        }
    };

    const onDelete = (id) => {
        const keranjang = cart.filter((item) => item.id !== id);
        setCart(keranjang);
    };
    console.log(cart);

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
                        {keranjang.map((item) => (
                            <div
                                onClick={() => addCart(item.id)}
                                className="border w-48 mb-5 hover:cursor-pointer"
                                key={item.id}>
                                <div className="border">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="md:h-28 h-16 border mx-auto"
                                    />
                                </div>

                                <div className="text-center">
                                    <p>{item.nama}</p>
                                    <p>Rp.{item.idr}</p>
                                    <p>Stock : 10x</p>
                                </div>
                            </div>
                        ))}
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

                        <div className="flex justify-between hover:bg-slate-300 px-2 py-1.5 text-sm font-extralight mt-2 border border-slate-400">
                            <h2 className="pr-2">No</h2>
                            <h2 className="w-32">Nama</h2>
                            <h2 className="w-32">Qty</h2>
                            <h2 className="w-32">Harga</h2>
                            <h2 className="px-1">#</h2>
                        </div>

                        {cart.map((item) => (
                            <div
                                className="flex justify-between hover:bg-slate-300 px-2 py-3 text-sm font-extralight border border-slate-400"
                                key={item.id}>
                                <h2 className="pr-4.5 ">{item.id}</h2>
                                <h2 className="w-32 ">{item.nama}</h2>
                                <h2 className="w-32">{item.qty}</h2>
                                <h2 className="w-32 ">
                                    {item.qty > 1
                                        ? item.idr * item.qty
                                        : item.idr}
                                </h2>
                                <h2
                                    className="bg-red-500 hover:bg-red-600 hover:cursor-pointer px-1 rounded-sm text-white"
                                    onClick={() => onDelete(item.id)}>
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
