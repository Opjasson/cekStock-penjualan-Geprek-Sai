import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Kasir_Layout from '../components/mainLayout/Kasir_Layout';

const Add_StockBahan = () => {
  const [nama_barang, setNamaBarang] = useState("");
  const [stok_awal, setStokAwal] = useState();
  const [satuan, setSatuan] = useState(0);

  const navigate = useNavigate();

  const handleAddStock = async (e) => {
      e.preventDefault();
      try {
          await axios.post("http://localhost:8000/stock", {
              nama_barang,
              satuan,
              stok_awal,
              barang_masuk: 0,
              barang_keluar: 0,
              stok_akhir: 0,
          });
          alert("Stock berhasil ditambahkan!");
          navigate("/stock-bahan");
      } catch (error) {
          console.log(error);
      }
  };

  return (
      <Kasir_Layout>
          <div className="mb-10 bg-green-500 md:w-1/2 p-3 rounded-4xl text-white">
              <h1 className="md:text-4xl text-2xl font-extrabold border-b-2 border-yellow-400 mb-3">
                  Tambah Stock
              </h1>
              <p className="md:text-xl font-light border-b-2 border-yellow-400">
                  Menambahkan Stock Bahan Baku Makanan dan Minuman
              </p>
          </div>

          {/* Form Start */}
          <form
              onSubmit={handleAddStock}
              className="flex flex-col gap-5 md:w-2/3 mx-auto pb-20">
              <div className="flex flex-col md:gap-2">
                  <label htmlFor="namaStock" className="md:text-xl text-base">
                      Nama Stock
                  </label>
                  <select
                      onChange={(e) => setNamaBarang(e.target.value)}
                      id="namaStock"
                      className="border md:p-2 p-1.5 rounded-xl">
                      <option value="pilih">Pilih bahan baku</option>
                      <option value="tepung terigu">Tepung Terigu</option>
                      <option value="kecap bango">Kecap Bango</option>
                      <option value="beras">Beras</option>
                      <option value="tepung kanji">Tepung Kanji</option>
                      <option value="tepung beras">Tepung Beras</option>
                      <option value="ayam">Ayam</option>
                      <option value="telor">Telor</option>
                      <option value="tempe">Tempe</option>
                      <option value="tahu">Tahu</option>
                  </select>
              </div>

              <div className="flex flex-col md:gap-2">
                  <label className="md:text-xl text-base" htmlFor="satuan">
                      Satuan
                  </label>
                  <input
                      id="satuan"
                      className="border rounded-xl p-1.5 md:p-2"
                      type="text"
                      required
                      onChange={(e) => setSatuan(e.target.value)}
                  />
              </div>

              <div className="flex flex-col md:gap-2">
                  <label className="md:text-xl text-base" htmlFor="namaStock">
                      Stok awal
                  </label>
                  <input
                      id="namaStock"
                      className="border rounded-xl p-1.5 md:p-2"
                      type="number"
                      required
                      onChange={(e) => setStokAwal(e.target.value)}
                  />
              </div>

              <button
                  type="submit"
                  className="bg-green-500 w-1/4 mx-auto px-3 py-2 hover:cursor-pointer hover:bg-green-600 rounded-xl text-white font-extrabold">
                  Buat
              </button>
          </form>
          {/* Form End */}
      </Kasir_Layout>
  );
}

export default Add_StockBahan
