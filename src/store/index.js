// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null, // State to hold the current logged-in user
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user; // Mutate the user state when a user logs in or registers
    },
    LOGOUT(state) {
      state.user = null; // Clear the user state when the user logs out
    }
  },
  actions: {
    register({ commit }, user) {
      let users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(user); // Add the new user to the local storage
      localStorage.setItem('users', JSON.stringify(users));
      commit('SET_USER', user); // Set the current user state
      localStorage.setItem('user', JSON.stringify(user)); // Persist the logged-in user in localStorage
    },
    login({ commit }, credentials) {
      let users = JSON.parse(localStorage.getItem('users')) || [];
      let user = users.find(u => u.username === credentials.username && u.password === credentials.password);
      if (user) {
        commit('SET_USER', user); // Set the current user state if login is successful
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        throw new Error('Invalid credentials'); // Throw an error if login fails
      }
    },
    logout({ commit }) {
      commit('LOGOUT'); // Clear the user state on logout
      localStorage.removeItem('user'); // Remove user data from localStorage
    },
    loadUserFromStorage({ commit }) {
      let user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        commit('SET_USER', user); // Load the user from localStorage if they are still logged in
      }
    }
  },
  getters: {
    isLoggedIn: state => !!state.user, // Return true if a user is logged in
    userRole: state => (state.user ? state.user.role : null), // Get the role of the current user
  }
});
