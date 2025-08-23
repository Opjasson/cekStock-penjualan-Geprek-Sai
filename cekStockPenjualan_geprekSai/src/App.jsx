import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Manage_menu from "./pages/Manage_menu";
import Add_menu from "./pages/Add_menu";
import Update_menu from "./pages/Update_menu";
import Stok_Bahan from "./pages/Stok_Bahan";
import Add_StockBahan from "./pages/Add_StockBahan";
import Update_StockBahan from "./pages/Update_StockBahan";
import Login_Page from "./pages/Login_Page"; 
import Forgot_Pass from "./pages/Forgot_Pass";
import History_transaksi from "./pages/History_transaksi";
import Laporan_Page from "./pages/Laporan_Page";
import LaporanStok from "./pages/LaporanStokBahan";
import AbsenList from "./pages/AbsenList";
import AbsenSetSpv from "./pages/AbsenSetSpv";
import DetailAbsenKasir from "./pages/DetailAbsenKasir";
import KelolaUserSpv from "./pages/KelolaUserSpv";
import UbahAkunKasir from "./pages/UbahAkunKasir";


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login_Page />} />
                    <Route path="/forgot-pass" element={<Forgot_Pass />} />
                    <Route path="/manage-menu" element={<Manage_menu />} />
                    <Route path="/manage-menu/add-menu" element={<Add_menu />} />
                    <Route path="/manage-menu/update-menu/:id" element={<Update_menu />} />
                    <Route path="/stock-bahan" element={<Stok_Bahan />} />
                    <Route path="/stock-bahan/add-stockBahan" element={<Add_StockBahan />} />
                    <Route path="/stock-bahan/update-stockBahan/:id" element={<Update_StockBahan />} />
                    <Route path="/history-transaksi" element={<History_transaksi />} />
                    <Route path="/laporan-penjualan" element={<Laporan_Page />} />
                    <Route path="/laporan-stok" element={<LaporanStok />} />
                    <Route path="/absensi-user" element={<AbsenList />} />
                    <Route path="/absensi-setting-spv" element={<AbsenSetSpv />} />
                    <Route path="/absensi-setting-spv/detail-absensi/:id" element={<DetailAbsenKasir />} />
                    <Route path="/kelola-user" element={<KelolaUserSpv />} />
                    <Route path="/kelola-user/ubah-akun-kasir/:id" element={<UbahAkunKasir />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
