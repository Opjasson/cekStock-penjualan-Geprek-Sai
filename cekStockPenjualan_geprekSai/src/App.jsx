import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Manage_menu from "./pages/Manage_menu";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/manage-menu" element={<Manage_menu />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
