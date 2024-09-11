<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/search">Search</router-link></li>
      <li v-if="isAdmin"><router-link to="/admin">Admin</router-link></li>
      <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
      <li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>
      <li v-if="isLoggedIn">
        <button @click="logout">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const isLoggedIn = computed(() => store.getters.isLoggedIn);
    const isAdmin = computed(() => store.getters.userRole === 'admin');

    const logout = () => {
      store.dispatch('logout');
      store.commit('SET_SUCCESS_MESSAGE', 'Logout successful!');
      store.dispatch('loadUserFromStorage');
    };

    return {
      isLoggedIn,
      isAdmin,
      logout,
    };
  },
};
</script>

<style scoped>
.navbar {
  background-color: #1e1e1e;
  padding: 1em;
}

.navbar-list {
  list-style: none;
  display: flex;
  gap: 1em;
}

.navbar-list li {
  margin: 0;
}

.navbar-list a {
  color: white;
  text-decoration: none;
}

.navbar-list a:hover {
  text-decoration: underline;
}

button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

button:hover {
  text-decoration: underline;
}
</style>
