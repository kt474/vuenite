<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "./store/store";
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

const store = useStore();
const darkMode = computed(() => {
  return store.darkMode;
});
</script>

<template>
  <div :class="{ dark: darkMode }">
    <div class="dark:bg-slate-800">
      <div class="container mx-auto">
        <Navbar />
        <Main />
      </div>
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
