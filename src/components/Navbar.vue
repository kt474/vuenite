<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue";
import { useStore } from "../store/store";

const store = useStore();
const systemDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
const checked = ref(systemDarkMode);

const darkMode = computed(() => {
  return store.darkMode;
});

onMounted(() => {
  if (systemDarkMode && !localStorage.darkMode) {
    checked.value = true;
    store.updateDarkMode(true);
  } else if (localStorage.darkMode) {
    checked.value = JSON.parse(localStorage.darkMode);
    store.updateDarkMode(checked.value);
  }
});

watch(checked, () => {
  localStorage.darkMode = checked.value;
  store.updateDarkMode(checked.value);
});
</script>

<template>
  <div class="flex pt-8 mx-8 lg:mx-20 2xl:mx-36 justify-between">
    <div class="text-3xl flex">
      <p class="text-primary font-bold hover:text-secondary">VUE</p>
      <p class="text-secondary font-bold hover:text-primary">NITE</p>
    </div>
    <div class="dropdown dropdown-end block sm:hidden">
      <div class="dropdown w-10">
        <label tabindex="0" class="btn btn-sm btn-primary mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            :stroke="darkMode ? '#e2e8f0' : '#1e293b'"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </label>

        <ul
          tabindex="0"
          class="dropdown-content menu shadow bg-base-200 rounded-box"
        >
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Docs</a></li>
        </ul>
      </div>
    </div>
    <div class="hidden sm:flex sm:text-2xl">
      <p
        class="mx-4 cursor-pointer hover:border-b-secondary hover:border-b-4 dark:text-slate-200"
      >
        Home
      </p>
      <p
        class="mx-4 cursor-pointer hover:border-b-secondary hover:border-b-4 dark:text-slate-200"
      >
        About
      </p>
      <p
        class="mx-4 cursor-pointer hover:border-b-secondary hover:border-b-4 dark:text-slate-200"
      >
        Docs
      </p>
      <div
        class="divider divider-horizontal -ml-1 mr-0 before:dark:bg-slate-200 after:dark:bg-slate-200"
      ></div>
      <div class="flex w-16">
        <input
          type="checkbox"
          class="toggle toggle-sm mt-2 ml-2"
          v-model="checked"
        />
        <svg
          v-if="!checked"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mt-1.5 ml-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="darkMode ? '#e2e8f0' : '#1e293b'"
          class="w-5 h-5 mt-2 ml-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
