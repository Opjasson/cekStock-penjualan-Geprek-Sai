import React, { useEffect, useState } from "react";
import Kasir_Layout from "../components/mainLayout/Kasir_Layout";
import { MdOutlineDataset } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaPlusSquare } from "react-icons/fa";

const Home = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [cash, setCash] = useState();
    const [filter, setFilter] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("info")) {
            navigate("/login");
        }
    }, [navigate]);

    const getMenus = async () => {
        try {
            const response = await axios.get("http://localhost:8000/menu");
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // fungsi untuk men filter menu
    function filterMenu() {
        const filterData = data.filter((item) => item.kategori === filter);
        return filterData;
    }
    // end filter

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
            const masuk = data.filter((e) => e.id === id);
            console.log(masuk);
            masuk.map((a) =>
                setCart([
                    ...cart,
                    { id, nama: a.nama_menu, qty: 1, idr: a.harga },
                ])
            );
        }
    };

    const handleCreateTransaksi = async () => {
        const response = await axios.post("http://localhost:8000/transaksi");
        const idTransaksi = response.data.response.id;

        // localStorage.setItem("transId", jsonRes.response.id);
        await axios.patch(`http://localhost:8000/transaksi/${idTransaksi}`, {
            // bayarPelanggan : bayar,
            totalHarga: totalPrice,
        });

        cart.forEach(async (item) => {
            await axios.post("http://localhost:8000/cart", {
                qty: item.qty,
                menuId: item.id,
                transaksiId: idTransaksi,
            });
        });
    };

    const print = () => {
        const Navbar = document.querySelector("nav");
        const DataMenu = document.querySelector("#dataMenu");
        const PrintButton = document.querySelector("#printButton");
        const TombolKembali = document.querySelector("#tombolKembali");
        const TombolPrint = document.querySelector("#tombolPrint");
        const listKeranjang = document.querySelector("#listKeranjang");
        const sai = document.querySelector("#sai");
        const icon = document.querySelector("#icon");
        const icon2 = document.querySelector("#icon2");
        const headNota = document.querySelector("#headNota");

        Navbar.setAttribute("hidden", "");
        listKeranjang.setAttribute("hidden", "");
        icon.setAttribute("hidden", "");
        icon2.setAttribute("hidden", "");
        headNota.setAttribute("hidden", "");
        sai.removeAttribute("hidden");
        DataMenu.setAttribute("hidden", "");
        PrintButton.setAttribute("hidden", "");
        // updateTransaksi()
        handleCreateTransaksi();
        window.print();
        TombolKembali.removeAttribute("hidden");
        TombolPrint.removeAttribute("hidden");
    };

    const print2 = () => {
        const TombolKembali = document.querySelector("#tombolKembali");
        const TombolPrint = document.querySelector("#tombolPrint");

        TombolKembali.setAttribute("hidden", "");
        TombolPrint.setAttribute("hidden", "");
        window.print();
        TombolKembali.removeAttribute("hidden");
    };

    const onDelete = (id) => {
        const keranjang = cart.filter((item) => item.id !== id);
        setCart(keranjang);
    };

    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = data.find(
                    (productItem) => productItem.id === item.id
                );
                return acc + product.harga * item.qty;
            }, 0);
            setTotalPrice(sum);
        } else {
            setTotalPrice(0);
        }
    }, [cart, data]);

    useEffect(() => {
        getMenus();
    }, []);

    return (
        <Kasir_Layout>
            <div className="flex flex-wrap justify-between w-full">
                {/* Session Data menu list */}
                <div
                    id="dataMenu"
                    className="xl:w-4/6 mb-10 rounded-xl overflow-hidden bg-slate-100">
                    {/* head session menu */}
                    <div className="flex items-center bg-yellow-300 px-2.5 py-1.5 mb-3">
                        <MdOutlineDataset className="text-3xl" />
                        <h1 className="text-xl">Data Menu</h1>
                    </div>
                    {/* end head */}

                    <div className="flex">
                        {/* filter menu */}
                        <select
                            name="filter"
                            id="filter"
                            onChange={(e) => setFilter(e.target.value)}
                            className="ml-3 w-56 py-2 bg-green-600 rounded-lg text-white">
                            <option value="">Semua kategori</option>
                            <option value="minuman">Minuman</option>
                            <option value="makanan">Makanan</option>
                        </select>
                        {/* end filter menu */}
                    </div>

                    {/* Show all menu */}
                    <div className="flex flex-wrap justify-around mt-12 relative">
                        {filter.length > 0
                            ? filterMenu().map((item) => (
                                  <div
                                      onClick={() => addCart(item.id)}
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
                                      </div>
                                  </div>
                              ))
                            : data.map((item) => (
                                  <div
                                      onClick={() => addCart(item.id)}
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
                                      </div>
                                  </div>
                              ))}
                    </div>
                    {/* end show all menu */}
                </div>
                {/* end session menu list */}

                {/* session keranjang */}
                <div className="w-[24.9rem] rounded-xl overflow-hidden bg-slate-100 h-fit pb-10 xl:mx-0 mx-auto">
                    {/* head session keranjang */}
                    <div
                        id="headNota"
                        className="flex items-center bg-yellow-300 px-2.5 py-1.5 mb-3 gap-1.5">
                        <FaShoppingCart id="icon" className="text-2xl" />
                        <h1 className="text-xl">Keranjang</h1>
                    </div>
                    {/* end head session keranjang */}

                    <div>
                        <div className="flex gap-2 px-1.5 items-center border-b-2">
                            <FaShoppingCart id="icon2" className="text-lg" />
                            <p id="listKeranjang" className="text-sm">
                                List Keranjang
                            </p>
                            <div className="flex-col" id="sai" hidden>
                                <p>
                                    Tanggal Pesan :{" "}
                                    {new Date().toLocaleDateString()}
                                </p>
                                <p className="text-sm">
                                    Nota Geprek sa'i Mejasem
                                </p>
                            </div>
                        </div>

                        <div className="border-b-2 border-slate-400 pb-5">
                            <div className="flex justify-between hover:bg-slate-300 px-2 py-1.5 text-sm font-extralight mt-2 border-b-2">
                                <h2 className="pr-2">No</h2>
                                <h2 className="w-32">Nama</h2>
                                <h2 className="w-32">Qty</h2>
                                <h2 className="w-32">Harga</h2>
                                <h2 className="px-1">#</h2>
                            </div>

                            {cart.map((item, index) => (
                                <div
                                    className="flex justify-between hover:bg-slate-300 px-2 py-3 text-sm font-extralight border border-slate-400"
                                    key={item.id}>
                                    <h2 className="pr-4.5 ">{index + 1}</h2>
                                    <h2 className="w-32 ">{item.nama}</h2>
                                    <h2 className="w-32">{item.qty}</h2>
                                    <h2 className="w-32 ">
                                        {item.qty > 1
                                            ? item.idr * item.qty
                                            : item.idr}
                                    </h2>
                                    <h2
                                        className="bg-red-500 hover:bg-red-600 hover:cursor-pointer px-1 rounded-sm text-white h-fit"
                                        onClick={() => onDelete(item.id)}>
                                        x
                                    </h2>
                                </div>
                            ))}
                        </div>

                        <div className="px-2 py-2 flex flex-col gap-3">
                            <div className=" flex gap-1.5 items-center">
                                <label htmlFor="" className="">
                                    Total Bayar
                                </label>
                                <p>:</p>
                                <input
                                    type="number"
                                    className="bg-white rounded-sm p-1.5 shadow-md"
                                    value={totalPrice}
                                />
                            </div>
                            <div className=" flex gap-1.5 items-center">
                                <label htmlFor="" className=" pr-[46px]">
                                    Cash
                                </label>
                                <p>:</p>
                                <input
                                    type="number"
                                    className="bg-white rounded-sm p-1.5 shadow-md"
                                    onChange={(e) => setCash(e.target.value)}
                                />
                            </div>
                            <div className=" flex gap-1.5 items-center">
                                <label htmlFor="" className=" pr-[5px]">
                                    Kembalian
                                </label>
                                <p>:</p>
                                <input
                                    type="number"
                                    className="bg-white rounded-sm p-1.5 shadow-md"
                                    value={cash - totalPrice}
                                />
                            </div>
                        </div>

                        <button
                            onClick={print}
                            id="printButton"
                            className="bg-blue-300 ml-2 px-1.5 py-1 rounded-md hover:cursor-pointer hover:bg-blue-400">
                            Cetak
                        </button>

                        <button
                            id="tombolKembali"
                            onClick={() => location.reload()}
                            hidden
                            className="ml-5 hover:cursor-pointer hover:text-red-500 hover:underline">
                            Selesai &larr;
                        </button>

                        <button
                            id="tombolPrint"
                            onClick={print2}
                            hidden
                            className="ml-5 hover:cursor-pointer hover:text-red-500 hover:underline">
                            Print &larr;
                        </button>
                    </div>
                </div>

                {/* end session keranjang */}
            </div>
        </Kasir_Layout>
    );
};

export default Home;
