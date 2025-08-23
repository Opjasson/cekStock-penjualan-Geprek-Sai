import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoSai } from "../../assets";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
    const handleDropDown = () => {
        const getElement = document.querySelector("#dropDown");
        switch (getElement.hasAttribute("hidden")) {
            case true:
                getElement.removeAttribute("hidden");
                break;
            case false:
                getElement.setAttribute("hidden", "");
                break;
            default:
                break;
        }
    };

    const handleKasirDropDown = () => {
        const getElement = document.querySelector("#dropDownMenu");
        switch (getElement.hasAttribute("hidden")) {
            case true:
                getElement.removeAttribute("hidden");
                break;
            case false:
                getElement.setAttribute("hidden", "");
                break;
            default:
                break;
        }
    };

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear()
        navigate("/login")
    }
    const infoLogin = localStorage.getItem("info")
    
    return (
        <nav className=" bg-red-600 lg:px-6 px-4 pt-1.5 flex justify-between items-center mb-5">
            <div className="text-xl text-white flex md:h-[6rem] overflow-hidden items-center">
                <img src={logoSai} alt="logoSai" className="md:h-28 h-16" />
                <h3 className="font-light italic md:text-lg text-sm">
                    Official
                </h3>
            </div>

            <div className="lg:flex hidden list-none text-xl justify-between w-3/4  text-white font-bold">
                <li>
                    <Link
                        to={"/"}
                        className={`hover:text-yellow-300 ${
                            infoLogin === "kasir" ? "block" : "hidden"
                        }`}>
                        Kasir
                    </Link>
                </li>

                <li>
                    <Link
                        to={"/history-transaksi"}
                        className={`hover:text-yellow-300 ${
                            infoLogin === "kasir" ? "block" : "hidden"
                        }`}>
                        History Transaksi
                    </Link>
                </li>

                <li>
                    <Link
                        to={"/laporan-penjualan"}
                        className={`hover:text-yellow-300 ${
                            infoLogin === "kasir" ? "block" : "hidden"
                        }`}>
                        Laporan Penjualan
                    </Link>
                </li>

                <li>
                    <Link
                        to={"/manage-menu"}
                        className={`hover:text-yellow-300 ${
                            infoLogin === "kasir" ? "block" : "hidden"
                        }`}>
                        Manage Menu
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/stock-bahan"}
                        className={`hover:text-yellow-300 ${
                            infoLogin === "kasir" ? "hidden" : "block"
                        }`}>
                        Stok Bahan
                    </Link>
                </li>

                <li>
                    <Link
                        to={"/laporan-stok"}
                        className={`hover:text-yellow-300 ${
                            infoLogin === "kasir" ? "hidden" : "block"
                        }`}>
                        Laporan Stok
                    </Link>
                </li>

                <li>
                    <Link
                        to={"/absensi-setting-spv"}
                        className={`hover:text-yellow-300 ${
                            infoLogin === "kasir" ? "hidden" : "block"
                        }`}>
                        ABSENSI LIST
                    </Link>
                </li>

                <button
                    type="button"
                    hidden={
                        localStorage.getItem("info") === "kasir" ? false : true
                    }
                    onClick={() => navigate("/absensi-user")}
                    className="hover:cursor-pointer bg-green-400 text-white py-2 px-2 rounded hover:bg-green-600 text-sm">
                    ABSENSI
                </button>

                <button
                    type="button"
                    onClick={() => logOut()}
                    className="hover:cursor-pointer bg-yellow-600 text-white py-2 px-2 rounded hover:bg-yellow-700 text-sm">
                    LOGOUT
                </button>
            </div>

            <GiHamburgerMenu
                onClick={handleDropDown}
                className="text-2xl lg:hidden block text-white hover:cursor-pointer hover:text-yellow-300"
            />

            {/* Start DropDown */}
            <div
                hidden
                id="dropDown"
                className="bg-slate-600 p-5 rounded-bl-lg rounded-tl-lg absolute top-24 right-0 h-2/3 w-60 list-none lg:hidden">
                <li className="mb-10">
                    <Link
                        className="text-lg hover:text-yellow-500 hover:underline text-white"
                        to={"/"}>
                        KASIR
                    </Link>
                </li>
                <li className="mb-10">
                    <Link
                        className="text-lg hover:text-yellow-500 hover:underline text-white"
                        to={"/manage-menu"}>
                        MANAGE MENU
                    </Link>
                </li>
                <li className="mb-10">
                    <Link
                        className="text-lg hover:text-yellow-500 hover:underline text-white"
                        to={"/stock-bahan"}>
                        STOK BAHAN
                    </Link>
                </li>
            </div>
            {/* End Drop Down */}
        </nav>
    );
};

export default Navbar;
