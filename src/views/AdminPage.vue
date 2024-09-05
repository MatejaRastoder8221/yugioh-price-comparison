<template>
    <div class="admin-container">
      <h1>Admin Dashboard</h1>
  
      <div class="admin-section">
        <h2>Manage Users</h2>
        <button @click="fetchUsers">Load Users</button>
        <ul v-if="users.length">
          <li v-for="user in users" :key="user.id">
            {{ user.name }} - {{ user.role }}
            <button @click="deleteUser(user.id)">Delete</button>
            <button @click="editUser(user.id)">Edit</button>
          </li>
        </ul>
      </div>
  
      <div class="admin-section">
        <h2>Manage Cards</h2>
        <button @click="fetchCards">Load Cards</button>
        <ul v-if="cards.length">
          <li v-for="card in cards" :key="card.id">
            {{ card.name }} - {{ card.type }}
            <button @click="deleteCard(card.id)">Delete</button>
            <button @click="editCard(card.id)">Edit</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        users: [],
        cards: [],
      };
    },
    computed: {
      ...mapState(['userList', 'cardList']),
    },
    methods: {
      ...mapActions(['fetchUsers', 'fetchCards', 'deleteUser', 'editUser', 'deleteCard', 'editCard']),
  
      // Load users and cards on demand
      fetchUsers() {
        this.users = this.userList; // This assumes data is already in the Vuex store
      },
      fetchCards() {
        this.cards = this.cardList; // This assumes data is already in the Vuex store
      },
    },
  };
  </script>
  
  <style scoped>
  .admin-container {
    background-color: #282c34;
    color: #fff;
    padding: 2rem;
    border-radius: 8px;
    max-width: 800px;
    margin: 2rem auto;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .admin-section {
    margin-bottom: 2rem;
  }
  
  .admin-section h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  button {
    background-color: #1e90ff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-right: 0.5rem;
  }
  
  button:hover {
    background-color: #1c86ee;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    background-color: #3b3f46;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  </style>
  