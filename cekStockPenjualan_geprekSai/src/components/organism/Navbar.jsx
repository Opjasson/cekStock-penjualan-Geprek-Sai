import React from "react";
import { Link } from "react-router-dom";
import { logoSai } from "../../assets";

const Navbar = () => {
    return (
        <nav className="bg-red-600 px-6 pt-1.5 flex justify-between items-center">
            <div className="text-xl text-white flex h-[6rem] overflow-hidden items-center">
                <img src={logoSai} alt="logoSai" className="h-28" />
                <h3 className="font-light italic">Official</h3>
            </div>

            <div className="flex list-none text-xl justify-between w-1/2 text-white font-bold">
                <li>
                    <Link className="hover:text-yellow-300">Kasir</Link>
                </li>
                <li>
                    <Link className="hover:text-yellow-300">Manage Menu</Link>
                </li>
                <li>
                    <Link className="hover:text-yellow-300">Transaksi</Link>
                </li>
                <li>
                    <Link className="hover:text-yellow-300">Stok Bahan</Link>
                </li>
            </div>
        </nav>
    );
};

export default Navbar;
