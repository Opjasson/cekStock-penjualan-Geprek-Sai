import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Kasir_Layout from "../components/mainLayout/Kasir_Layout";

const KelolaUserSpv = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confPassword, setConfPassword] = useState();
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const getAkunUsers = async () => {
        try {
            const response = await axios.get("http://localhost:8000/user");
            console.log(response.data);

            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAkunUsers();
    }, []);

    const filterKasirOnly = data.filter((item) => item.role === "kasir");

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await axios.post("http://localhost:8000/user", {
                email,
                role: "kasir",
                password,
                confPassword,
            });
            alert("User berhasil ditambahkan!");
            navigate("/absensi-setting-spv");
        } catch (error) {
            alert("Password dan Confirm Password Tidak Sama!")
        }
        
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8000/user/${id}`);
        alert("User berhasil dihapus!");
        navigate("/absensi-setting-spv");
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
                        + Tambah Kasir
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

                {/* Daftar Pengguna */}
                <div className="bg-white shadow p-4 border">
                    <h2 className="text-lg font-semibold text-pink-600 mb-4">
                        📋 Daftar Akun Kasir
                    </h2>
                    <table className="w-full border text-left">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 border">No</th>
                                <th className="p-2 border">Username</th>
                                <th className="p-2 border">Role</th>
                                <th className="p-2 border">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterKasirOnly.map((user, index) => (
                                <tr key={index}>
                                    <td className="p-2 border">{index + 1}</td>
                                    <td className="p-2 border">{user.email}</td>
                                    <td className="p-2 border">{user.role}</td>
                                    <td className="p-2 border">
                                        <button
                                            onClick={() =>
                                                handleDelete(user.id)
                                            }
                                            className="bg-red-500 mr-5 text-white px-3 py-1 rounded hover:bg-red-600">
                                            Hapus
                                        </button>

                                        <button
                                            onClick={() =>
                                                navigate(
                                                    `/kelola-user/ubah-akun-kasir/${user.id}`
                                                )
                                            }
                                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                                            Ubah
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Kasir_Layout>
    );
};

export default KelolaUserSpv;
