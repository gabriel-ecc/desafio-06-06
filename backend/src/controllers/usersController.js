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
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    const isMatch = bcript.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const payload = {
      email,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    return res.status(200).json({
      message: "Login successfully",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const validarJWT = async (req, res) => {
  try {
    const Authorization = req.header("Authorization");
    const token = Authorization.split("Bearer ")[1];
    jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send({ error: "Invalid token" });
  }
};
