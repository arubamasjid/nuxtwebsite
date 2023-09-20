import { defineEventHandler } from 'h3';
import pkg from 'pg';
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

initializeApp({
  credential: applicationDefault()
});
async function checkAuth() {
  let user = await getAuth().getUser("gU2rxaYJmtVPVuVLz1oq0ZB6rAf2");
  user = user.toJSON();
  return user;
}

const { Pool } = pkg;
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "arubatestdb",
  password: "postgres"
});
async function getDatabase() {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
}

const hello = defineEventHandler(async () => {
  await getDatabase();
  const user = await checkAuth();
  return {
    user
  };
});

export { hello as default };
//# sourceMappingURL=hello.mjs.map
