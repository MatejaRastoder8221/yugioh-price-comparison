<template>
    <div class="form-container">
      <div class="form-card">
        <h2>Login</h2>
  
        <div v-if="error" class="error-message">{{ error }}</div>
  
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" v-model="email" placeholder="Enter your email" />
        </div>
  
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" placeholder="Enter your password" />
        </div>
  
        <button @click="login">Login</button>
  
        <div class="alt-action">
          Don't have an account? <router-link to="/register">Register</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
      const error = ref('');
  
      const login = () => {
        // Login logic here
      };
  
      return {
        email,
        password,
        error,
        login,
      };
    },
  };
  </script>
  
  <style scoped>
  .form-container {
    background-color: #121212;
    color: white;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .form-card {
    background-color: #1e1e1e;
    padding: 2em;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 400px;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 1em;
  }
  
  .form-group {
    margin-bottom: 1.5em;
  }
  
  label {
    display: block;
    margin-bottom: 0.5em;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 0.75em;
    background-color: #333;
    color: white;
    border: 1px solid #444;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  input::placeholder {
    color: #bbb;
  }
  
  button {
    width: 100%;
    padding: 0.75em;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #1c86ee;
  }
  
  .error-message {
    color: red;
    text-align: center;
    margin-bottom: 1em;
  }
  
  .alt-action {
    text-align: center;
    margin-top: 1em;
    color: #bbb;
  }
  
  .alt-action a {
    color: #1e90ff;
    text-decoration: none;
  }
  
  .alt-action a:hover {
    text-decoration: underline;
  }
  </style>
  