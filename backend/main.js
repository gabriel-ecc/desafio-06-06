import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";


const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000,console.log("SERVER ON http://localhost:3000"));