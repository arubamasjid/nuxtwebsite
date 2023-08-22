import { initializeApp, getApps } from "firebase/app";
import { getAuthObserver } from "../utils/authHandlers";

const firebaseConfig = {
  apiKey: "AIzaSyAyzOxR31P2gojBNsILGoXZp6yS9f9ikLM",
  authDomain: "aruba-auth-d03e7.firebaseapp.com",
  projectId: "aruba-auth-d03e7",
  storageBucket: "aruba-auth-d03e7.appspot.com",
  messagingSenderId: "738497032431",
  appId: "1:738497032431:web:0218bbc291875577bd2b1a",
  measurementId: "G-6WMR4H68LH",
};

export default defineNuxtPlugin(async (nuxtApp) => {
  let app;

  if (process.server) {
    //  console.log(getApps().length, "server app length");
  }
  // if (process.client) {
  //   console.log(getApps().length, "client app length");
  // }

  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    // const observer = getAuthObserver();
    // observer.then((result) => {
    //   console.log(result);
    // });
    if (process.server) {
      // console.log("app created server", getApps());
    }
    // if (process.client) {
    //   console.log("app created client", getApps());
    // }
  } else {
    if (process.server) {
      // console.log("current app instance server", getApps());
    }
    // if (process.client) {
    //   console.log("current app instance client", getApps());
    // }
  }

  return {
    provide: {
      firebaseApp: app,
    },
  };
});
