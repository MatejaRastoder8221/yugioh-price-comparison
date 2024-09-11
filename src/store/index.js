import { createStore } from 'vuex';

export default createStore({
  state: {
    users: JSON.parse(localStorage.getItem('users')) || [],
    user: JSON.parse(localStorage.getItem('user')) || null,
    successMessage: '',
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    LOGOUT(state) {
      state.user = null;
    },
    SET_SUCCESS_MESSAGE(state, message) {
      state.successMessage = message;
    },
    ADD_USER(state, user) {
      state.users.push(user);
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    DELETE_USER(state, email) {
      state.users = state.users.filter(user => user.email !== email);
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    UPDATE_USER(state, updatedUser) {
      const index = state.users.findIndex(user => user.email === updatedUser.email);
      if (index !== -1) {
        state.users.splice(index, 1, updatedUser);
        localStorage.setItem('users', JSON.stringify(state.users));
      }
    },
    SET_USERS(state, users) {
      state.users = users;
      localStorage.setItem('users', JSON.stringify(users));
    }
  },
  actions: {
    register({ commit }, user) {
      commit('ADD_USER', user);
      commit('SET_USER', user);
      localStorage.setItem('user', JSON.stringify(user));
      commit('SET_SUCCESS_MESSAGE', 'Registration successful!');
    },
    login({ commit, state }, credentials) {
      const user = state.users.find(u => u.email === credentials.email && u.password === credentials.password);
      if (user) {
        commit('SET_USER', user);
        localStorage.setItem('user', JSON.stringify(user));
        commit('SET_SUCCESS_MESSAGE', 'Login successful!');
      } else {
        throw new Error('Invalid credentials');
      }
    },
    logout({ commit }) {
      commit('LOGOUT');
      localStorage.removeItem('user');
    },
    loadUserFromStorage({ commit }) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        commit('SET_USER', user);
      }
    },
    deleteUser({ commit }, email) {
      commit('DELETE_USER', email);
    },
    updateUser({ commit }, updatedUser) {
      commit('UPDATE_USER', updatedUser);
    },
  },
  getters: {
    isLoggedIn: state => !!state.user,
    userRole: state => (state.user ? state.user.role : null),
    successMessage: state => state.successMessage,
    users: state => state.users,
  }
});
