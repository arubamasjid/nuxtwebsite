<template>
  <div :class="$style.container">
    <form @submit.prevent>
      <div :class="$style.form">
        <div class="text-2xl font-bold">Create your account</div>
        <div>
          <label for="email" class="text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            v-model="email"
            class="input input-bordered input-sm input-accent w-full rounded-sm shadow-md"
          />
        </div>
        <div>
          <label for="password" class="text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            v-model="password"
            class="input input-bordered input-sm input-accent w-full rounded-sm shadow-md"
          />
        </div>
        <div>
          <button
            @click="emailAndPasswordSignup"
            class="btn btn-accent rounded-sm shadow-md"
          >
            Sign up
          </button>
        </div>
        <div>
          <a class="text-xs text-accent"> Already signed up? Login instead </a>
        </div>
        <div>
          <button
            @click="googleSignup"
            class="btn btn-secondary rounded-sm shadow-md"
          >
            Sign up / Login with Google
          </button>
        </div>
        <div class="border-t-2 border-accent">
          <button @click="signOut" class="btn btn-warning rounded-sm shadow-md">
            Sign Out
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";

import { onMounted } from "vue";

let firebaseAuthObj, firebaseClient;

onMounted(() => {
  //catchGoogleSignupRedirect()
  //firebaseClient = useFirebaseClientApp();
  //console.log("firebase client", firebaseClient);
  firebaseAuthObj = getAuth();
  console.log(firebaseAuthObj);
});

let password, email;

function emailAndPasswordSignup() {
  //console.log(password, email)
  firebaseAuthObj.onAuthStateChanged(async (user) => {
    if (user) {
      console.log("user", user);
      //const response = await getRedirectResult(firebaseAuthObj)
      //console.log('redirect response', response)
    } else {
      console.log("A user is not currently logged in");
    }
  });
}

function googleSignup() {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(firebaseAuthObj, provider);
}

async function catchGoogleSignupRedirect() {
  firebaseAuthObj.onAuthStateChanged(async (user) => {
    if (user) {
      console.log("user", user);
      const response = await getRedirectResult(firebaseAuthObj);
      console.log("redirect response", response);
    } else {
      console.log("A user is not currently logged in");
    }
  });
}

function signOut() {
  console.log("Signed out");
  firebaseAuthObj.signOut();
}

function sendUidAndEmailToBackend(firebaseUid, email) {}
</script>

<style module>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 6rem);
  @apply bg-slate-100;
}

.form {
  padding: 1rem 2rem 1rem 2rem;
  @apply ring-1 ring-accent shadow-xl;
}

.form > div:nth-child(-n + 34) {
  padding: 1rem 1rem 1rem 1rem;
}

.form > div:nth-child(5) {
  padding: 0 1rem 1rem 1rem;
}
.form > div:nth-child(6) {
  padding: 0 1rem 1.5rem 1rem;
}

.form > div:last-child {
  padding: 1rem;
  padding-top: 1.5rem;
  /* border-top: 1px solid black; */
}

label {
  display: block;
  padding-right: 0.5rem;
}
</style>
