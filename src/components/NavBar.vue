<template>
    <nav>
      <ul>
        <router-link to="/" exact-active-class="active-link"><li>Home</li></router-link>
        <router-link to="/search" exact-active-class="active-link"><li>Search</li></router-link>
        <router-link to="/login" exact-active-class="active-link"><li>Login</li></router-link>
        <router-link to="/register" exact-active-class="active-link"><li>Register</li></router-link>
        <router-link to="/admin" exact-active-class="active-link"><li>Admin Panel</li></router-link>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: left;
    margin: 0;
    padding: 0 0 0 10vw;
  }
  li {
    margin: 0;
    padding: 2vh;
  }
  li:hover{
    background-color: #1c1c1c;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a.router-link-exact-active {
    font-weight: bold;
    /* border-bottom: 2px solid #fff; */
  }
  .active-link li {
  background-color: #4e4e4e; /* Change this to your desired active background color */
  font-weight: bold;
}
  </style>
  