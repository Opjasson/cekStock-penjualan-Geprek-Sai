import React from 'react'

const Update_menu = () => {
  return (
    <Kasir_Layout>
                <div className="mb-10 bg-green-500 md:w-1/2 p-3 rounded-4xl text-white">
                    <h1 className="md:text-4xl text-2xl font-extrabold border-b-2 border-yellow-400 mb-3">
                        Tambah Menu
                    </h1>
                    <p className="md:text-xl font-light border-b-2 border-yellow-400">
                        Menambahkan Menu Makanan dan Minuman
                    </p>
                </div>
    
                {/* Form Start */}
                <form
                    // onSubmit={handleAddMenu}
                    className="flex flex-col gap-5 md:w-2/3 mx-auto pb-20">
                    <div className="flex flex-col md:gap-2">
                        <label className="md:text-xl text-base" htmlFor="namaStock">
                            Nama Menu
                        </label>
                        <input
                            id="namaMenu"
                            className="border rounded-xl p-1.5 md:p-2"
                            type="text"
                            required
                            // onChange={(e) => setNamaMenu(e.target.value)}
                        />
                    </div>
    
                    <div className="flex flex-col md:gap-2">
                        <label className="md:text-xl text-base" htmlFor="harga">
                            Harga
                        </label>
                        <input
                            id="harga"
                            className="border rounded-xl p-1.5 md:p-2"
                            type="number"
                            required
                            // onChange={(e) => setHarga(e.target.value)}
                        />
                    </div>
    
                    <div className="flex flex-col md:gap-2">
                        <label htmlFor="kategori" className="md:text-xl text-base">
                            Kategori
                        </label>
                        <select
                            // onChange={(e) => setKategori(e.target.value)}
                            id="kategori"
                            className="border md:p-2 p-1.5 rounded-xl">
                            <option value="pilih">Pilih Kategori Menu</option>
                            <option value="makanan">Makanan</option>
                            <option value="minuman">Minuman</option>
                        </select>
                    </div>
    
                    <div className="flex flex-col md:gap-2">
                        <label className="md:text-xl text-base" htmlFor="stokmenu">
                            Stok Menu
                        </label>
    
                        <input
                            id="satuan"
                            className="border rounded-xl p-1.5 md:p-2"
                            type="number"
                            required
                            // onChange={(e) => setStokMenu(e.target.value)}
                        />
                    </div>
    
                    <div className="flex flex-col md:gap-2">
                        <label className="md:text-xl text-base" htmlFor="gambar">
                            Gambar Menu
                        </label>
                        <input
                            id="gambar"
                            className="border rounded-xl p-1.5 md:p-2"
                            type="file"
                            required
                            // onChange={postGambar}
                        />
                    </div>
    
                    <button
                        type="submit"
                        className="bg-blue-500 w-1/4 mx-auto px-3 py-2 hover:cursor-pointer hover:bg-blue-600 rounded-xl text-white font-extrabold">
                        Buat
                    </button>
                </form>
                {/* Form End */}
            </Kasir_Layout>
  )
}

export default Update_menu
