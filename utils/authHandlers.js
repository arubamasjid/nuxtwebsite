import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getApps, initializeApp } from "firebase/app";

function getCurrentUser() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    console.log("getCurrentUser", user);
  } else {
    console.log("no user getCurrentUser");
  }
}

function getAuthObserver() {
  const auth = getAuth();
  return new Promise((res, rej) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("found user");
        res(user);
      } else {
        rej("no user in here");
      }
    });
  });
}

export { getAuthObserver, getCurrentUser };
