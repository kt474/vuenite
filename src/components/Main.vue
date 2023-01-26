<script setup lang="ts">
import { ref } from "vue";
const websiteType = ref("Landing Page");
const framework = ref("Vue");
const uiLibrary = ref("None");
const backend = ref("None");
const modal = ref(false);

const chooseFramework = (value: string) => {
  framework.value = value;
  modal.value = true;
  setTimeout(() => (modal.value = false), 500);
};

const chooseWebsiteType = (value: string) => {
  websiteType.value = value;
  modal.value = true;
  setTimeout(() => (modal.value = false), 500);
};

const chooseUI = (value: string) => {
  uiLibrary.value = value;
  modal.value = true;
  setTimeout(() => (modal.value = false), 500);
};

const chooseBackend = (value: string) => {
  backend.value = value;
  modal.value = true;
  setTimeout(() => (modal.value = false), 500);
};
</script>

<template>
  <div class="mt-24 mx-8 lg:mx-20 flex flex-wrap justify-between">
    <div class="max-w-md xl:max-w-lg">
      <div class="mb-8">
        <p
          class="font-bold dark:text-slate-200 text-3xl lg:text-4xl xl:text-5xl xl:leading-snug mb-2 xl:mb-0"
        >
          Customizable
        </p>
        <p class="font-bold text-3xl lg:text-4xl xl:text-5xl xl:leading-snug">
          <img src="../assets/vue.svg" class="inline mb-2" width="45px" />
          <a
            href="https://vuejs.org"
            target="_blank"
            class="custom-color ml-4 cursor-pointer"
            >Vue.js</a
          >
        </p>
        <p
          class="font-bold text-3xl lg:text-4xl xl:text-5xl xl:leading-snug dark:text-slate-200 mt-1"
        >
          codebase generator
        </p>
      </div>
      <p class="text-lg lg:text-xl lg:leading-8 dark:text-slate-200 w-4/5">
        Build a modern, responsive,
        <span class="custom-vue font-semibold"
          ><a href="https://vuejs.org" target="_blank">Vue</a></span
        >
        web app in seconds with your favorite framework, UI library, and backend
      </p>
      <button class="btn btn-secondary mt-6">Get Started</button>
    </div>
    <div class="xl:ml-4 max-w-sm xl:max-w-md lg:p-4 mt-4 lg:mt-0">
      <img src="../assets/main_page_holder.svg" />
    </div>
  </div>
  <div class="mx-8 lg:mx-20 mt-20">
    <p class="text-2xl lg:text-3xl my-8 dark:text-slate-200">
      Generate a codebase
    </p>
    <div class="flex flex-wrap justify-between">
      <div class="flex mb-4">
        <p class="text-xl m-1 dark:text-slate-200">Website Type:</p>
        <div class="dropdown w-40">
          <label tabindex="0" class="btn btn-sm btn-primary mt-1"
            >{{ websiteType }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>

          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
            :class="{ hidden: modal }"
          >
            <li>
              <a @click="chooseWebsiteType('Landing Page')">Landing Page</a>
            </li>
            <li><a @click="chooseWebsiteType('Portfolio')">Portfolio</a></li>
          </ul>
        </div>
      </div>
      <div class="flex mb-4">
        <p class="text-xl m-1 dark:text-slate-200">Framework:</p>
        <div class="dropdown w-28">
          <label tabindex="0" class="btn btn-sm btn-primary mt-1"
            >{{ framework }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>

          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
            :class="{ hidden: modal }"
          >
            <li><a @click="chooseFramework('Vue')">Vue</a></li>
            <li><a @click="chooseFramework('Nuxt')">Nuxt</a></li>
          </ul>
        </div>
      </div>
      <div class="flex mb-4">
        <p class="text-xl m-1 dark:text-slate-200">UI Library:</p>
        <div class="dropdown w-36">
          <label tabindex="0" class="btn btn-sm btn-primary mt-1"
            >{{ uiLibrary }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>

          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
            :class="{ hidden: modal }"
          >
            <li><a @click="chooseUI('None')">None</a></li>
            <li><a @click="chooseUI('Vuetify')">Vuetify</a></li>
            <li><a @click="chooseUI('Quasar')">Quasar</a></li>
            <li><a @click="chooseUI('Tailwind')">Tailwind</a></li>
            <li><a @click="chooseUI('Bootstrap')">Bootstrap</a></li>
          </ul>
        </div>
      </div>
      <div class="flex mb-4">
        <p class="text-xl m-1 dark:text-slate-200">Database/CMS:</p>
        <div class="dropdown w-36">
          <label tabindex="0" class="btn btn-sm btn-primary mt-1"
            >{{ backend }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>

          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
            :class="{ hidden: modal }"
          >
            <li><a @click="chooseBackend('None')">None</a></li>
            <li><a @click="chooseBackend('Firestore')">Firestore</a></li>
            <li><a @click="chooseBackend('Supabase')">Supabase</a></li>
            <li><a @click="chooseBackend('Strapi')">Strapi</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mockup-window border border-base-300 mt-8 h-1/2">
      <div
        class="flex justify-center px-4 py-32 border-t border-base-300 dark:text-slate-200"
      >
        {{ websiteType }}
        {{ framework }}
        {{ uiLibrary }}
        {{ backend }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-color {
  color: #42b883;
  border-bottom: 5px solid #35495e;
}

.custom-vue {
  color: #42b883;
  border-bottom: 3px solid #35495e;
}
</style>
