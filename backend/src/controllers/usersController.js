import { createUser } from "../models/usersModel.js";
import bcript from "bcryptjs";

export const createUserController = async (req, res) => {

    
  try {
    const { email, password, rol, lenguage } = req.body;
    const passwordEncrypt = bcript.hashSync(password, 10);
    console.log(passwordEncrypt);
    await createUser(email, passwordEncrypt, rol, lenguage);
    res.send("Usuario creado");
  } catch (error) {
    console.log(error);
  }
};
