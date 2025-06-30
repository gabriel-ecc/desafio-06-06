import express from "express";
import cors from "cors";

import { createUserController,loginController,getDatabyMailController } from "./src/controllers/usersController.js"
import { authMiddleware } from "./src/middlewares/auth.middleware.js";


const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, console.log("SERVER ON http://localhost:3000"));

app.post("/usuarios",createUserController);

app.post("/login",loginController)

app.get("/usuarios",authMiddleware,getDatabyMailController)