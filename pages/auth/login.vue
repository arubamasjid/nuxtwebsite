<template>
  <div :class="$style.container">
    <form @submit.prevent>
      <div :class="$style.form">
        <div class="text-2xl font-bold">Login your account</div>
        <div>
          <label for="email" class="text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            v-model="email"
            class="input input-bordered input-sm input-accent rounded-sm shadow-md"
          />
        </div>
        <div>
          <label for="password" class="text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            v-model="password"
            class="input input-bordered input-sm input-accent rounded-sm shadow-md"
          />
        </div>
        <div>
          <button
            @click="emailLogin"
            class="btn btn-accent rounded-sm shadow-md"
          >
            Login
          </button>
        </div>
        <div>
          <a class="text-xs text-accent"> Forgot your password? </a>
        </div>
        <div>
          <button
            @click="googleLogin"
            class="btn btn-secondary rounded-sm shadow-md"
          >
            Login with Google
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { onMounted } from "vue";

let password, email;

function emailLogin() {
  console.log(password, email);
}

function googleLogin() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider).then(() => {
    getRedirectResult(auth)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  });
}

onMounted(() => {
  // const { $app } = useNuxtApp();
  // console.log("firebase client ", $app);
  //const auth = getAuth();
  //console.log(auth);
});

definePageMeta({
  middleware: ["use-login-status"],
});
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

.form > div:nth-child(-n + 4) {
  padding: 1rem 1rem 1rem 1rem;
}

.form > div:nth-child(5) {
  padding: 0 1rem 1rem 1rem;
}

.form > div:last-child {
  padding: 1rem;
  padding-top: 1.5rem;
  @apply border-t-2 border-accent;
}

label {
  display: block;
  padding-right: 0.5rem;
}
</style>
