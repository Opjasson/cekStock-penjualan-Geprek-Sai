import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login_Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [invalid, setInvalid] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/login", {
                email,
                password,
            });
            navigate("/");
        } catch (error) {            
            setInvalid(error.response.data.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-300">
            <div className="bg-white rounded shadow-md p-8 w-full max-w-sm relative">
                {/* Icon Lingkaran Hijau */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 rounded-full p-4">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.121 17.804A7.5 7.5 0 0112 15a7.5 7.5 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Form */}
                <form className="mt-10" onSubmit={handleSubmit}>
                    <h2 className="text-center text-lg font-semibold mb-6">
                        Login Member
                    </h2>

                    <input
                        type="text"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 mb-4 border rounded bg-gray-100 placeholder-gray-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 mb-4 border rounded bg-gray-100 placeholder-gray-500"
                    />

                    <p className="text-lg text-red-500 text-center">
                        {invalid}
                    </p>

                    <button
                        type="submit"
                        className="w-full hover:cursor-pointer bg-green-600 text-white py-2 rounded hover:bg-green-700">
                        LOGIN
                    </button>

                    <p
                        className="text-center text-sm text-gray-500 mt-4 hover:cursor-pointer hover:underline"
                        onClick={() => navigate("/forgot-pass")}>
                        Lupa Password
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login_Page;
