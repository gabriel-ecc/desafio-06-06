const create = async ({ email, password, rol, lenguage }) => {
  const query =
    "INSERT INTO users (email, password,rol,lenguage) VALUES ($1, $2,$3,$4) RETURNING *";
  const { rows } = await pool.query(query, [email, password]);
  return rows[0];
};
