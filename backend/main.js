import express from "express";
import cors from "cors";

import { createUserController } from "./src/controllers/usersController.js"

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, console.log("SERVER ON http://localhost:3000"));

app.post("/usuarios",createUserController);
