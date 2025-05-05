import React from "react";
import Kasir_Layout from "../components/mainLayout/Kasir_Layout";
import { MdOutlineDataset } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const Home = () => {
    return (
        <Kasir_Layout>
            <div className="flex">
                <div className="border w-4/6">
                    <div className="flex">
                        <MdOutlineDataset className="text-3xl" />
                        <h1>Data Menu</h1>
                    </div>
                </div>
                <div className="border w-[34%]">
                    <div>
                        <FaShoppingCart className="text-3xl" />
                        <h1>Keranjang</h1>
                    </div>
                </div>
            </div>
        </Kasir_Layout>
    );
};

export default Home;
