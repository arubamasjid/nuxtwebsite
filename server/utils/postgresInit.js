import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "arubatestdb",
  password: "postgres",
});

export async function getDatabase() {
  const result = await pool.query("SELECT * FROM users");
  //console.log(result.rows);
  return result.rows;
}

export function useSum(a, b) {
  return a + b;
}
