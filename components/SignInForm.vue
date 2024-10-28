<template>
  <v-container class="my-6" fluid>
    <h1 class="mb-6 text-h5 text-center text-grey-darken-4">
      Sign in to your account
    </h1>

    <v-form @submit.prevent="handleLogin" v-model="isValid">
      <v-text-field
        v-model="username"
        color="primary"
        variant="outlined"
        aria-label="Input"
        placeholder="Phone number or email"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        :append-inner-icon="
          isVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
        "
        :type="isVisible ? 'text' : 'password'"
        placeholder="Password"
        variant="outlined"
        @click:append-inner="isVisible = !isVisible"
        aria-label="Password Input"
      ></v-text-field>

      <a
        class="pb-1 text-end text-primary d-block"
        style="cursor: pointer"
        @click="
          showLogin = false;
          showSignup = false;
          error = null;
        "
        >Forgot Password?</a
      >

      <v-btn
        :loading="isLoading"
        type="submit"
        class="my-2 text-subtitle-1 text-white rounded-lg"
        color="primary"
        size="x-large"
        aria-label="Sign In Button"
        block
        flat
      >
        Sign in
      </v-btn>

      <v-sheet
        class="mt-4 border d-flex flex-row justify-space-between align-center"
      >
        <v-checkbox
          class="ml-2 w-100"
          label="I am human"
          color="primary"
        ></v-checkbox>
        <v-container class="w-100 d-flex flex-column align-center">
          <v-img
            alt="hcaptcha logo"
            src="/logo/hcaptcha-logo.webp"
            width="60"
            height="60"
          ></v-img>
          <a
            class="text-grey-darken-4 text-subtitle-2 font-weight-light"
            style="cursor: pointer"
            >Privacy - Terms</a
          >
        </v-container>
      </v-sheet>

      <v-container class="mt-4 d-flex align-center">
        <v-divider class="mr-4"></v-divider>
        <p class="text-subtitle-1 text-grey-darken-2">Or</p>
        <v-divider class="ml-4"></v-divider>
      </v-container>

      <v-container class="text-center">
        <v-btn
          class="mb-4 text-grey-darken-4 font-weight-light text-subtitle-1 rounded-lg"
          prepend-icon="mdi-apple"
          color="blue-lighten-5"
          size="x-large"
          block
          flat
        >
          <template v-slot:prepend>
            <v-icon color="grey-darken-4" size="x-large"></v-icon>
          </template>

          Sign in with Apple ID
        </v-btn>

        <v-btn
          class="mb-4 text-grey-darken-4 font-weight-light text-subtitle-1 rounded-lg"
          prepend-icon="mdi-google"
          color="blue-lighten-5"
          size="x-large"
          block
          flat
        >
          <template v-slot:prepend>
            <v-icon color="red-darken-4" size="x-large"></v-icon>
          </template>

          Sign in with Google
        </v-btn>

        <v-btn
          class="mb-4 text-grey-darken-4 font-weight-light text-subtitle-1 rounded-lg"
          prepend-icon="mdi-facebook"
          color="blue-lighten-5"
          size="x-large"
          block
          flat
        >
          <template v-slot:prepend>
            <v-icon color="primary" size="x-large"></v-icon>
          </template>

          Sign in with Facebook
        </v-btn>

        <p class="mt-6 text-grey-darken-4">
          Don’t you have an account?
          <a class="ml-2 text-primary" style="cursor: pointer">Sign up</a>
        </p>
      </v-container>
    </v-form>
  </v-container>
</template>
<script setup>
import { ref, onMounted } from "vue";

const username = ref("");
const password = ref("");
const isLoading = ref(false);

const isVisible = ref(false);
const isValid = ref(false);

onMounted(() => {});

const handleLogin = () => {
  isLoading.value = true;
  setTimeout(async () => {
    isLoading.value = false;
    await navigateTo("/chat");
  }, 1000);
};

const validateInput = [
  (value) => !!value || "Phone or Email is required",
  (value) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value) ||
    /^[0-9]{10}$/i.test(value) ||
    "Phone number or Email must be valid",
];

const passwordRules = [
  (value) => !!value || "Password is required",
  (value) => value.length >= 6 || "Password must be at least 6 characters",
];
</script>
