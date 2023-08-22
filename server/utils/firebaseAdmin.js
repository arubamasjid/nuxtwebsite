import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

export const firebaseApp = initializeApp({
  credential: applicationDefault(),
});

export async function checkAuth() {
  let user = await getAuth().getUser("gU2rxaYJmtVPVuVLz1oq0ZB6rAf2");
  user = user.toJSON();
  return user;
}

// console.log("server firebase", app);
