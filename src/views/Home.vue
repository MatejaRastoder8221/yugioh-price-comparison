<template>
  <div class="container" id="welcomeText">
    <h1>Welcome to the Yu-Gi-Oh encyclopedia by Marabunta</h1>
    <router-link to="/search">Search for Cards</router-link>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
#welcomeText{
  padding-top: 10vh;
}
.container {
  text-align: center;
  background-color: #121212;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
}
h1 {
  margin-bottom: 1em;
}
a {
  color: #1e90ff;
  text-decoration: none;
  font-size: 1.2em;
}
</style>
