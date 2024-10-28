<template>
  <v-navigation-drawer
    class="bg-grey-lighten-5 border-0"
    v-model="drawer"
    width="350"
  >
    <SignInForm />
  </v-navigation-drawer>

  <v-card class="my-6 rounded-xl border" flat>
    <v-list-item class="px-6" height="88">
      <template v-slot:prepend>
        <v-icon
          v-if="$vuetify.display.mdAndDown"
          color="grey-darken-4"
          icon="mdi-menu"
          @click="drawer = !drawer"
        ></v-icon>
        <v-icon
          v-if="$vuetify.display.lgAndUp"
          color="grey-darken-4"
          :icon="drawer ? 'mdi-fullscreen' : 'mdi-fullscreen-exit'"
          size="x-large"
          @click="drawer = !drawer"
        ></v-icon>
      </template>

      <template v-slot:title>
        <h1
          class="text-h6 text-md-h5 text-center font-weight-bold text-grey-darken-3"
        >
          Welcome back
        </h1>
      </template>

      <template v-slot:append>
        <v-icon
          color="primary"
          icon="mdi-square-rounded-badge"
          size="60"
        ></v-icon>
      </template>
    </v-list-item>

    <v-divider></v-divider>
    <v-card-text :class="$vuetify.display.smAndUp ? 'pa-6' : ''">
      <v-container class="d-flex flex-column ga-16" fluid>
        <v-sheet class="my-12 d-flex flex-row justify-center">
          <v-sheet class="d-flex flex-column text-center">
            <v-icon
              color="primary"
              icon="mdi-square-rounded-badge"
              size="100"
            ></v-icon>
            <p class="text-subtitle-2">Chat App</p>
          </v-sheet>
        </v-sheet>

        <v-sheet class="d-flex flex-row justify-start">
          <v-sheet class="d-flex flex-column">
            <p
              :class="$vuetify.display.smAndUp ? 'w-75' : 'w-100'"
              class="border rounded-lg text-body-1 font-weight-thin px-4 py-4 bg-grey-lighten-5"
            >
              Chat App is a software application that uses artificial
              intelligence (AI) technologies to assist users in various tasks
              and provide information. These assistants can perform a wide range
              of functions, depending on their design and capabilities.
            </p>
          </v-sheet>
        </v-sheet>
      </v-container>
    </v-card-text>
    <v-card-actions class="d-flex flex-row align-start pr-6">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-paperclip" variant="text" v-bind="props"></v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" :value="i">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-sheet class="bg-transparent d-flex flex-column w-100">
        <v-text-field
          color="primary"
          variant="outlined"
          aria-label="prompt"
          placeholder="Ask me anything..."
          append-inner-icon="mdi-send-outline"
          @click:append-inner="onClick"
        >
        </v-text-field>
        <div class="text-center">version 1.01</div>
      </v-sheet>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref, shallowRef } from "vue";

const drawer = shallowRef(true);

const loaded = ref(false);
const items = ref([
  { title: "Photo", icon: "mdi-camera-outline" },
  { title: "Audio", icon: "mdi-microphone-outline" },
  { title: "Select File", icon: "mdi-file-cabinet" },
]);

function onClick() {
  loaded.value = true;
  console.log("Attached");
}
</script>
