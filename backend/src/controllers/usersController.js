import { createUser, getUserByEmail } from "../models/usersModel.js";
import bcript from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUserController = async (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body;
    const passwordEncrypt = bcript.hashSync(password, 10);
    console.log(passwordEncrypt);
    await createUser(email, passwordEncrypt, rol, lenguage);
    res.status(200).send("Usuario creado");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const loginController = async (req, res) => {
  try {
    const user = await getUserByEmail(req.body.email);
    const isMatch = bcript.compareSync(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const payload = {
      email: req.body.email,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getDatabyMailController = async (req, res) => {
  try {
    const data = await getUserByEmail(req.user.email);
    res.status(200).json([data]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
