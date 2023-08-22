import { checkAuth } from "../utils/firebaseAdmin";

export default defineEventHandler(async () => {
  const db = await getDatabase();
  //console.log("db", db);
  //console.log(firebaseApp);
  const user = await checkAuth();
  return {
    user,
  };
});
