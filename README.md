# Vue 3 + Vite

# Yu-Gi-Oh Encyclopedia Web Application

## Overview
This project is a web-based application built with Vue.js, providing an interactive platform for users to explore and manage a Yu-Gi-Oh encyclopedia. The project implements user authentication, role-based access control, and admin functionalities.

## Features
- **User Authentication**: Users can register, log in, and log out of the application.
- **Role-Based Access Control**: Access to certain features (e.g., admin panel) is restricted based on user roles.
- **Admin Dashboard**: Admin users can manage (edit and delete) user accounts directly from the admin page.
- **Custom Input Component**: A reusable custom input component is used for form data entry, allowing for dynamic user data manipulation.
- **Responsive Design**: The application is responsive and adapts to different screen sizes.

## Project Structure
- **Components**:
  - `CustomInput.vue`: A reusable component for handling form inputs with two-way data binding.
  - `AdminPage.vue`: The admin dashboard where user management is handled.
  - `Login.vue`, `Register.vue`: Components for user authentication.
- **Vuex Store**:
  - **State**: Manages user data, current logged-in user, and success messages.
  - **Mutations**: Functions for adding, deleting, and updating users in the state.
  - **Actions**: Handle user registration, login, logout, and other operations.
  - **Getters**: Provide computed access to state data, like checking if a user is logged in or retrieving the user list.

## Key Concepts and Implementation
### Two-Way Data Binding
The `CustomInput` component uses `v-model` for two-way data binding, allowing form inputs to update the Vuex state and reflect changes in real-time. This is crucial for editing user data within the admin panel.

### State Management
Vuex is used for centralized state management, keeping track of users and their authentication state. The state is synchronized with `localStorage` to persist data across sessions.

### Role-Based Routing
Vue Router is configured to manage navigation between different views. Role-based routing ensures that only admin users can access the admin dashboard.

### Responsiveness
CSS is utilized to make sure the application is fully responsive, providing an optimal user experience on both desktop and mobile devices.

## Project Setup
1. **Installation**:
   ```bash
   npm install
   ```
2. **Running the Project**:
   ```bash
   npm run dev
   ```
3. **Building for Production**:
   ```bash
   npm run build
   ```

## How to Use
1. **User Registration**: Navigate to the registration page, fill in the form, and submit to create a new account.
2. **User Login**: Log in using the registered credentials to access the application's features.
3. **Admin Panel**: After logging in as an admin, navigate to the admin dashboard to manage user accounts.

## Future Enhancements
- Implementing a backend for storing user data securely.
- Adding more detailed error handling and validation.
- Expanding the Yu-Gi-Oh card database with more features.

## Conclusion
This project demonstrates a comprehensive understanding of Vue.js and its ecosystem, focusing on component-based architecture, state management with Vuex, and dynamic routing with Vue Router.

---

This documentation should provide a clear overview of the project and help others understand its structure and functionality. Let me know if you need any more details or changes!
