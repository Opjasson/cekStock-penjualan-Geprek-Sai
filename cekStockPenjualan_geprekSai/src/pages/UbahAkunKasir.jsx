import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Kasir_Layout from "../components/mainLayout/Kasir_Layout";

const UbahAkunKasir = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confPassword, setConfPassword] = useState();
    const [data, setData] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();

    const getAkunUser = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/user`);
            console.log(response.data);

            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAkunUser();
    }, []);

    const filterKasirOnly = data.filter((item) => item.role === "kasir");

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await axios.patch(`http://localhost:8000/user/${id}`, {
                email,
                role: "kasir",
                password,
                confPassword,
            });
            alert("User berhasil dirubah!");
            navigate("/absensi-setting-spv");
        } catch (error) {
            alert("Password dan Confirm Password Tidak Sama!");
        }
    };

    return (
        <Kasir_Layout>
            <div className="p-6 max-w-4xl mx-auto ">
                <h1 className="text-2xl font-bold mb-4 bg-amber-300 px-5 rounded-xl">
                    Kelola Akun Kasir
                </h1>

                {/* Tambah Pengguna */}
                <div className="bg-amber-300 shadow p-4 mb-6 border rounded-xl">
                    <h2 className="text-lg font-semibold text-purple-700 mb-2">
                        + Ubah Akun Kasir
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={(a) => setEmail(a.target.value)}
                            className="w-full border p-2 rounded bg-blue-100"
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(a) => setPassword(a.target.value)}
                            className="w-full border p-2 rounded bg-blue-100"
                        />

                        <input
                            type="password"
                            name="confPassword"
                            placeholder="Confirm Password"
                            onChange={(a) => setConfPassword(a.target.value)}
                            className="w-full border p-2 rounded bg-blue-100"
                        />

                        <button
                            type="submit"
                            className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">
                            Simpan
                        </button>
                    </form>
                </div>
            </div>
        </Kasir_Layout>
    );
};

export default UbahAkunKasir;
