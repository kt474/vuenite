import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  // arrow function recommended for full type inference
  state: () => ({ darkMode: false }),
  actions: {
    updateDarkMode(payload: boolean) {
      this.darkMode = payload;
    },
  },
});
