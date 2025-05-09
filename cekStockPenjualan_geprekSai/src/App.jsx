import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Manage_menu from "./pages/Manage_menu";
import Add_menu from "./pages/Add_menu";
import Update_menu from "./pages/Update_menu";
import Stok_Bahan from "./pages/Stok_Bahan";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/manage-menu" element={<Manage_menu />} />
                    <Route path="/manage-menu/add-menu" element={<Add_menu />} />
                    <Route path="/manage-menu/update-menu/:id" element={<Update_menu />} />
                    <Route path="/stock-bahan" element={<Stok_Bahan />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
