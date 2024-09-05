// store/modules/auth.js

// Initial state
const state = {
    user: null, // Will store user data when logged in
    token: null, // JWT or other authentication token
    role: null,  // User role (e.g., 'admin', 'user')
    isAuthenticated: false, // Boolean to check if user is authenticated
  };
  
  // Getters
  const getters = {
    isAuthenticated: (state) => state.isAuthenticated,
    getUser: (state) => state.user,
    getUserRole: (state) => state.role,
  };
  
  // Actions
  const actions = {
    // Load user data from localStorage when the app initializes
    loadUserFromStorage({ commit }) {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');
  
      if (user && token && role) {
        commit('setAuthData', { user, token, role });
      }
    },
  
    // Login action
    login({ commit }, { user, token, role }) {
      // Simulate API call
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
  
      commit('setAuthData', { user, token, role });
    },
  
    // Logout action
    logout({ commit }) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
  
      commit('clearAuthData');
    },
  
    // Registration action (for demonstration)
    register({ commit }, { user, token, role }) {
      // This would typically involve an API call
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
  
      commit('setAuthData', { user, token, role });
    },
  };
  
  // Mutations
  const mutations = {
    setAuthData(state, { user, token, role }) {
      state.user = user;
      state.token = token;
      state.role = role;
      state.isAuthenticated = true;
    },
    clearAuthData(state) {
      state.user = null;
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;
    },
  };
  
  export default {
    state,
    getters,
    actions,
    mutations,
  };
  