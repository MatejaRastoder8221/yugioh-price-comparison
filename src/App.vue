<template>
  <div class="app-container">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  setup() {
    const store = useStore();
    store.dispatch('loadUserFromStorage'); // Load user from localStorage if available
  },
};
</script>

<style scoped>
.app-container {
  background-color: #121212;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
