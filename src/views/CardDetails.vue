<template>
  <div class="container" v-if="card">
    <h1>{{ card.name_en }}</h1>
    <img :src="card.image" alt="card.name_en" />
    <p>Price: {{ card.price_cents / 100 }} {{ card.price_currency }}</p>
    <p>Condition: {{ card.condition }}</p>
    <router-link to="/search">Back to Search</router-link>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    const route = useRoute();
    const card = ref(null);

    const fetchCardDetails = async (id) => {
      try {
        const response = await axios.get(`https://api.cardtrader.com/api/v2/marketplace/products/${id}`, {
          headers: {
            'Authorization': `Bearer ovde_treba_token_mozda?`,
          },
        });
        card.value = response.data;
      } catch (error) {
        console.error('Error fetching data from CardTrader:', error);
      }
    };

    onMounted(() => {
      fetchCardDetails(route.params.id);
    });

    return {
      card,
    };
  },
};
</script>

<style scoped>
.container {
  background-color: #121212;
  color: white;
  min-height: 100vh;
  padding: 2em;
}
h1 {
  text-align: center;
}
img {
  display: block;
  margin: 0 auto;
  max-width: 300px;
}
p {
  text-align: center;
}
a {
  color: #1e90ff;
  text-decoration: none;
  display: block;
  text-align: center;
  margin-top: 1em;
}
a.router-link-exact-active {
  font-weight: bold;
  border-bottom: 2px solid #1e90ff;
}
</style>
