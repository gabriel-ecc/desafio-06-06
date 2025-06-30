import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcript from "bcryptjs";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, console.log("SERVER ON http://localhost:3000"));

app.post("/usuarios", (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body;
    const passwordEncrypt = bcript.hashSync(password, 10);
  } catch (error) {
    console.log(error);
  }
});

