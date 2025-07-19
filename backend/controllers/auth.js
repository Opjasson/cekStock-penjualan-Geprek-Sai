import Users from "../models/usersModel.js";
import argon2 from "argon2";

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email } });
    if (!user) {
        return res.status(401).json({
            message: "Email yang anda masukan salah",
        });
    }
    const isValidPassword = await argon2.verify(user.password, password);
    if (!isValidPassword) {
        return res.status(401).json({ message: "password salah" });
    }
    res.status(201).json({ message: "Login succesfully", response: user });
};

export const forgotPassword = async (req, res) => {
    const { email, password, confPassword } = req.body;
    const user = await Users.findOne({ where: { email } });
    if (!user) {
        return res.status(401).json({
            message: "Email yang anda masukan salah",
        });
    }
    if (password !== confPassword) {
        return res
            .status(400)
            .json({ message: "Password dan Confirm Password tidak cocok" });
    }

    const HashPassword = await argon2.hash(password);
    await Users.update(
        {
            email,
            password: HashPassword,
        },
        {
            where: {
                id: user.id,
            },
        }
    );
    res.status(200).json({ msg: "Password Berhasil dirubah!" });
};
