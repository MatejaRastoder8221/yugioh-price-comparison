<template>
    <div class="form-container">
      <div class="form-card">
        <h2>Register</h2>
  
        <div v-if="error" class="error-message">{{ error }}</div>
  
        <div class="form-group">
          <label for="username">Username</label>
          <input id="username" type="text" v-model="username" placeholder="Enter your username" />
        </div>
  
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" v-model="email" placeholder="Enter your email" />
        </div>
  
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" placeholder="Enter your password" />
        </div>
  
        <!-- Role selection radio buttons -->
        <div class="form-group">
          <label>Register as:</label>
          <div class="role-selection">
            <label>
              <input type="radio" v-model="role" value="user" /> User
            </label>
            <label>
              <input type="radio" v-model="role" value="admin" /> Admin
            </label>
          </div>
        </div>
  
        <button @click="register">Register</button>
  
        <div class="alt-action">
          Already have an account? <router-link to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const username = ref('');
      const email = ref('');
      const password = ref('');
      const role = ref('user'); // Default role set to 'user'
      const error = ref('');
  
      const register = () => {
        // Registration logic here
        // Store the username, email, password, and role in your Vuex store or localStorage
      };
  
      return {
        username,
        email,
        password,
        role,
        error,
        register,
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
  
  .role-selection {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5em;
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
  /* Update the existing .role-selection class */
.role-selection {
  display: flex;
  justify-content: space-around;
  margin-top: 2vh;
  gap: 10px; /* Space between radio buttons */
}

/* Style the individual radio buttons and their labels */
.role-selection label {
  background-color: #333;
  padding: 0.5em 1em;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
}
/* Style the custom radio button */
.role-selection input[type="radio"] + label:before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #1e90ff;
  border-radius: 50%;
  margin-right: 10px;
  background-color: transparent;
  transition: background-color 0.3s, border-color 0.3s;
}

/* Style for selected radio button */
.role-selection input[type="radio"]:checked + label:before {
  background-color: #1e90ff;
  border-color: #1e90ff;
}

/* Hover effect for labels */
.role-selection label:hover {
  background-color: #444;
}

  </style>
  