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
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
