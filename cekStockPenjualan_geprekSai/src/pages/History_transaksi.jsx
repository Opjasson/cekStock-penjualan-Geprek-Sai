import React, {useState ,useEffect } from "react";
import Kasir_Layout from "../components/mainLayout/Kasir_Layout";
import axios from "axios";


const History_transaksi = () => {
    const [historyTransaksi, setHistoryTransaksi] = useState([]);

    const [barang, setBarang] = useState([]);

    const getHistorys = async () => {
        try {
            const response = await axios.get("http://localhost:8000/transaksi");
            // const dataArray = response;
            console.log(response.data.response);

            setHistoryTransaksi(response.data.response);
        } catch (error) {
            console.log(error);
        }
    };

const getDataBarang = async () => {
    try {
        const response = await fetch("http://localhost:8000/menu");
        const barang = await response.json();
        setBarang(barang);
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    getDataBarang();
}, []);

    useEffect(() => {
        getHistorys();
    }, []);
    return (
        <Kasir_Layout>
            <div className="mb-10 bg-green-600 md:w-1/2 p-3 rounded-br-4xl rounded-sm text-white">
                <h1 className="md:text-4xl text-2xl font-extrabold">
                    History Transaksi
                </h1>
                <p className="md:text-xl font-light">
                    Menampilkan Daftar Transaksi
                </p>
            </div>

            <div className="flex justify-between px-16 bg-slate-100 p-5 rounded-xl flex-wrap">
                {historyTransaksi.map((item, index) => (
                    <div
                        key={index}
                        class="block w-2/5 p-6 rounded-lg shadow-sm  bg-gray-800 border-gray-700 hover:bg-gray-700 hover:cursor-pointer mb-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">
                            History Transaksi :
                        </h5>

                        <p class="font-normal text-blue-600">
                            Tanggal Pemesanan : {item.createdAt.split("T")[0]}
                        </p>

                        <p class="font-normal text-blue-600">
                            Id Pesanan : {item.uuid}
                        </p>

                        <p class="font-normal text-blue-600">
                            Daftar Pesanan :
                        </p>
                        {item.carts.map((a, index) => (
                            <p className="text-white" key={index}>
                                {
                                    barang.find((b) => b.id === a.menuId)
                                        ?.nama_menu
                                }{" "}
                                x {a.qty} :{" "}
                                {barang.find((b) => b.id === a.menuId)?.harga}
                            </p>
                        ))}
                        <p class="font-normal text-blue-600">
                            Total Harga : {item.totalHarga}
                        </p>
                    </div>
                ))}
            </div>
        </Kasir_Layout>
    );
};

export default History_transaksi;
