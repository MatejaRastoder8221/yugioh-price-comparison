<template>
  <div class="container" id="welcomeText">
    <h1>Welcome to the Yu-Gi-Oh encyclopedia by Mateja Rastoder</h1>
    <router-link to="/search">Search for Cards</router-link>
  </div>
  <div class="home-container">
    <div v-if="successMessage" class="success-banner">{{ successMessage }}</div>
    <!-- Other content for your homepage -->
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const successMessage = ref('');

    onMounted(() => {
      successMessage.value = store.getters.successMessage;

      // if (successMessage.value) {
      //   // Clear the success message after 3 seconds
      //   setTimeout(() => {
      //     store.commit('clearSuccessMessage');
      //   }, 3000);
      // }
    });

    return {
      successMessage,
    };
  },
};
</script>

<style scoped>
#welcomeText{
  padding-top: 10vh;
}
.container {
  text-align: center;
  background-color: #121212;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
}
h1 {
  margin-bottom: 1em;
}
a {
  color: #1e90ff;
  text-decoration: none;
  font-size: 1.2em;
}
.home-container {
  padding: 2em;
}

.success-banner {
  background-color: #4caf50;
  color: white;
  padding: 1em;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 1em;
  opacity: 1;
  transition: opacity 1s ease-in-out;
}

.success-banner-leave-active {
  opacity: 0;
}
</style>
