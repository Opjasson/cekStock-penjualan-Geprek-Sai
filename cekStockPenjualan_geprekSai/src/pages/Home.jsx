import React from "react";
import Kasir_Layout from "../components/mainLayout/Kasir_Layout";
import { MdOutlineDataset } from "react-icons/md";


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
                    <h1>Keranjang</h1>
                </div>
            </div>
        </Kasir_Layout>
    );
};

export default Home;
