<template>
  <div class="admin-container">
    <h1>Admin Dashboard</h1>

    <div class="admin-section">
      <h2>Manage Users</h2>
      <ul v-if="users.length">
        <li v-for="user in users" :key="user.email">
          {{ user.username }} - {{ user.role }}
          <button @click="deleteUser(user.email)">Delete</button>
          <button @click="editUser(user)">Edit</button>
        </li>
      </ul>
      <p v-else>No users available.</p>
    </div>

    <!-- Custom Input Component for Editing Users -->
    <div v-if="editingUser">
      <custom-input v-model="editingUser.username" label="Username"></custom-input>
      <custom-input v-model="editingUser.email" label="Email"></custom-input>
      <custom-input v-model="editingUser.password" label="Password"></custom-input>
      <custom-input v-model="editingUser.role" label="Role"></custom-input>
      <button @click="saveUserEdits">Save</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CustomInput from '../components/CustomInput.vue';

export default {
  components: { CustomInput },
  data() {
    return {
      editingUser: null, // Holds the user being edited
    };
  },
  computed: {
    ...mapState(['users']),
  },
  methods: {
    ...mapActions(['deleteUser', 'updateUser']),

    editUser(user) {
      this.editingUser = { ...user }; // Clone the user to avoid direct mutation
    },
    saveUserEdits() {
      this.updateUser(this.editingUser);
      this.editingUser = null; // Clear the editing form after saving
    },
  }
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
