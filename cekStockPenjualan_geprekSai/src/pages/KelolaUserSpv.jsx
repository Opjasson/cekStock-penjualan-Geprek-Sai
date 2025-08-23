import React, { useEffect } from "react";
import { useState } from "react";
import MainLayout from "../Components/Templates/MainLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const KelolaUserSpv = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();
    const [data, setData] = useState();

    const navigate = useNavigate();

    const getAkunUsers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/user");
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAkunUsers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/user", {
            username,
            role,
            password,
        });
        alert("User berhasil ditambahkan!");
        navigate("/");
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/user/${id}`);
        alert("User berhasil dihapus!");
        navigate("/");
    };

    return (
        <MainLayout>
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">
                    <span className="text-purple-700 mr-2">👤</span>
                    Kelola Akun Kasir
                </h1>

                {/* Tambah Pengguna */}
                <div className="bg-white shadow p-4 mb-6 border">
                    <h2 className="text-lg font-semibold text-purple-700 mb-2">
                        + Tambah Pengguna
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={(a) => setUsername(a.target.value)}
                            className="w-full border p-2 rounded bg-blue-100"
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(a) => setPassword(a.target.value)}
                            className="w-full border p-2 rounded bg-blue-100"
                        />

                        <select
                            name="role"
                            onChange={(a) => setRole(a.target.value)}
                            className="w-full border p-2 rounded">
                            <option value="">-- Pilih Role --</option>
                            <option value="admin">Admin</option>
                            <option value="kasir">Kasir</option>
                        </select>

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
                        📋 Daftar Pengguna
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
                            {data?.map((user, index) => (
                                <tr key={index}>
                                    <td className="p-2 border">{index + 1}</td>
                                    <td className="p-2 border">
                                        {user.username}
                                    </td>
                                    <td className="p-2 border">{user.role}</td>
                                    <td className="p-2 border">
                                        <button
                                            onClick={() =>
                                                handleDelete(user.id)
                                            }
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayout>
    );
};

export default KelolaUserSpv;
