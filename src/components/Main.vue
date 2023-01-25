<script setup lang="ts"></script>

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
            >Landing Page
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
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Landing Page</a></li>
            <li><a>Portfolio</a></li>
          </ul>
        </div>
      </div>
      <div class="flex mb-4">
        <p class="text-xl m-1">Framework:</p>
        <div class="dropdown">
          <label tabindex="0" class="btn btn-sm btn-primary mt-1"
            >Vue
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
          >
            <li><a>Vue</a></li>
            <li><a>Nuxt</a></li>
          </ul>
        </div>
      </div>
      <div class="flex mb-4">
        <p class="text-xl m-1">UI Library:</p>
        <div class="dropdown">
          <label tabindex="0" class="btn btn-sm btn-primary mt-1"
            >Material UI
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
          >
            <li><a>Material UI</a></li>
            <li><a>Quasar</a></li>
            <li><a>Tailwind</a></li>
            <li><a>Bootstrap</a></li>
            <li><a>None</a></li>
          </ul>
        </div>
      </div>
      <div class="flex mb-4">
        <p class="text-xl m-1">Database/CMS:</p>
        <div class="dropdown">
          <label tabindex="0" class="btn btn-sm btn-primary mt-1"
            >None
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
          >
            <li><a>None</a></li>
            <li><a>Firestore</a></li>
            <li><a>Supabase</a></li>
            <li><a>Strapi</a></li>
            <li><a>Contentful</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mockup-window border border-base-300 mt-12">
      <div class="flex justify-center px-4 py-16 border-t border-base-300">
        Hello!
      </div>
    </div>
  </div>
</template>

<style scoped></style>
