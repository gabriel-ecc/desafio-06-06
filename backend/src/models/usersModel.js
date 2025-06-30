import pool from "../../db/config.js";

export const createUser = async ( email, password, rol, lenguage ) => {
  
  const query =
    "INSERT INTO usuarios (email, password,rol,lenguage) VALUES ($1, $2 ,$3 ,$4) RETURNING *";
  const { rows } = await pool.query(query, [email, password, rol, lenguage]);
  return rows[0];
};
