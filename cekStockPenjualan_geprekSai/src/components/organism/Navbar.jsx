import React from "react";
import { Link } from "react-router-dom";
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

    return (
        <nav className=" bg-red-600 lg:px-6 px-4 pt-1.5 flex justify-between items-center mb-5">
            <div className="text-xl text-white flex md:h-[6rem] overflow-hidden items-center">
                <img src={logoSai} alt="logoSai" className="md:h-28 h-16" />
                <h3 className="font-light italic md:text-lg text-sm">
                    Official
                </h3>
            </div>

            <div className="lg:flex hidden list-none text-xl justify-between w-1/2  text-white font-bold">
                <div className="flex items-center gap-1.5 relative">
                    <li>
                        <Link to={"/"} className="hover:text-yellow-300">
                            Kasir
                        </Link>
                    </li>
                    <FaArrowRight
                        onClick={handleKasirDropDown}
                        className="cursor-pointer hover:rotate-90 delay-200"
                    />
                    <div
                        id="dropDownMenu"
                        hidden
                        className="border absolute top-8 left-10 w-48 bg-slate-300 px-2 rounded-xl">
                        <li>
                            <a
                                href="/history-transaksi"
                                className="hover:text-yellow-300">
                                History transaksi
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:text-yellow-300">
                                Laporan
                            </a>
                        </li>
                    </div>
                </div>
                <li>
                    <Link to={"/manage-menu"} className="hover:text-yellow-300">
                        Manage Menu
                    </Link>
                </li>
                <li>
                    <Link to={"/stock-bahan"} className="hover:text-yellow-300">
                        Stok Bahan
                    </Link>
                </li>
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
