import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'

export default defineStore('common', {
  state: () => {
    return {
      isHome: useRoute().name == 'home',
    }
  },
})
