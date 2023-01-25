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
  <div class="mt-32 mx-12 flex justify-around">
    <div class="w-1/3">
      <p class="font-bold text-5xl mb-12 leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p class="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam est
        reiciendis nihil illo. Commodi, mollitia neque!
      </p>
    </div>
    <div class="ml-8">
      <img class="max-w-lg" src="../assets/main_page_holder.svg" />
    </div>
  </div>
  <div class="mx-24 mt-20">
    <p class="text-3xl my-8">Generate a codebase</p>
    <div class="flex justify-between">
      <div class="flex mb-4">
        <p class="text-xl m-1">Website Type:</p>
        <div class="dropdown">
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
        <p class="text-xl m-1">Framework:</p>
        <div class="dropdown">
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
        <p class="text-xl m-1">UI Library:</p>
        <div class="dropdown">
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
        <p class="text-xl m-1">Database/CMS:</p>
        <div class="dropdown">
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
            <li><a @click="chooseBackend('Contentful')">Contentful</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mockup-window border border-base-300 mt-8">
      <div class="flex justify-center px-4 py-16 border-t border-base-300">
        Hello!
      </div>
    </div>
  </div>
</template>

<style scoped></style>
