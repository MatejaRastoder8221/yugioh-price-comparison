<template>
  <div class="container">
    <h1>Search for Yu-Gi-Oh! Cards</h1>
    <div class="search-container">
      <input 
        v-model="query" 
        placeholder="Enter card name" 
        @keypress.enter="searchCards"
      />
      <button @click="searchCards">
        <i class="search-icon"></i> Search
      </button>
    </div>

    <!-- Error message below the search bar -->
    <div v-if="error" class="error-message">
      <p>{{ error }}</p>
    </div>

    <!-- Loading animation -->
    <div v-if="loading" class="loading-overlay">
      <div class="spinner"></div>
    </div>

    <!-- Search results with pagination -->
    <div v-if="cards.length && !loading">
      <h2>Search Results</h2>
      
      <!-- Pagination controls on top -->
      <div class="pagination-controls">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
      
      <div v-for="card in paginatedCards" :key="card.id" class="card-result">
        <CardResultItem :card="card" :imageUrl="getCardImageUrl(card)" />
      </div>

      <!-- Pagination controls on bottom -->
      <div class="pagination-controls">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import axios from 'axios';
import CardResultItem from '../components/CardResultItem.vue';

export default {
  components: {
    CardResultItem,
  },
  setup() {
    const query = ref(''); // Search query
    const cards = ref([]); // Search results list
    const error = ref(''); // Error message
    const loading = ref(false); // Loading state
    const currentPage = ref(1); // Current page
    const cardsPerPage = 10; // Number of cards per page
    const cache = ref({}); // Caching results

    const searchCards = async () => {
      if (!query.value) {
        error.value = 'Please enter a card name to search.';
        cards.value = [];
        return;
      }

      if (cache.value[query.value]) {
        cards.value = cache.value[query.value];
        error.value = '';
        loading.value = false;
        return;
      }

      error.value = '';
      loading.value = true;
      try {
        const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
          params: { fname: query.value },
        });

        // Simulate loading delay
        setTimeout(() => {
          if (response.data.data.length > 0) {
            cards.value = response.data.data;
            cache.value[query.value] = cards.value;
            currentPage.value = 1; // Reset to first page
          } else {
            cards.value = [];
            error.value = 'No results found.';
          }
          loading.value = false;
        }, 1000); // 2-second delay

      } catch (err) {
        console.error('Error fetching data from YGOPRODeck:', err);
        error.value = 'Error fetching data. Please try again later.';
        cards.value = [];
        loading.value = false;
      }
    };

    // Function to get the image URL
    const getCardImageUrl = (card) => {
      const name = card.name.replace(/[/\\?%*:|"<>]/g, '');

      const isMonster = card.type.includes("Monster");

      if (isMonster) {
        const typeline = card.typeline ? card.typeline[0] : '';
        const cardType = card.type ? card.type.replace(/_/g, ' ').replace(/\s+/g, ' ') : '';
        const level = card.level ? `_lvl${card.level}` : '';
        const attribute = card.attribute ? `_${card.attribute}` : '';

        const fileName = `${name}_${typeline}_${cardType}${level}${attribute}.jpg`;
        return `/cards/${fileName}`;
      } else {
        const firstWordOfType = card.humanReadableCardType ? card.humanReadableCardType.split(' ')[0] : '';
        const cardType = card.type ? card.type.replace(/_/g, ' ').replace(/\s+/g, ' ') : '';

        const fileName = `${name}_${firstWordOfType}_${cardType}.jpg`;
        return `/cards/${fileName}`;
      }
    };

    // Computed property to calculate total pages
    const totalPages = computed(() => Math.ceil(cards.value.length / cardsPerPage));

    // Paginated results
    const paginatedCards = computed(() => {
      const start = (currentPage.value - 1) * cardsPerPage;
      return cards.value.slice(start, start + cardsPerPage);
    });

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value += 1;
        // Add delay when changing pages
        loading.value = true;
        setTimeout(() => {
          loading.value = false;
        }, 1000);
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value -= 1;
        // Add delay when changing pages
        loading.value = true;
        setTimeout(() => {
          loading.value = false;
        }, 1000);
      }
    };

    return {
      query,
      cards,
      error,
      loading,
      currentPage,
      totalPages,
      paginatedCards,
      searchCards,
      getCardImageUrl,
      nextPage,
      prevPage,
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

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
}

input {
  padding: 0.5em;
  width: 70%;
  max-width: 400px;
  background-color: #333;
  color: white;
  border: 1px solid #444;
  border-radius: 4px 0 0 4px;
}

button {
  padding: 0.5em 1em;
  cursor: pointer;
  background-color: #1e90ff;
  color: white;
  border: 1px solid #444;
  border-radius: 0 4px 4px 0;
  display: flex;
  align-items: center;
}

button:hover {
  background-color: #1c86ee;
}

.search-icon::before {
  content: "🔍"; /* Unicode for magnifying glass */
  margin-right: 0.5em;
}

.error-message {
  color: red;
  text-align: center;
  margin-bottom: 1em;
}

.card-result + .card-result {
  margin-top: 1em;
}

.pagination-controls {
  display: flex;
  justify-content: center;
  margin-top: 1em;
}

.pagination-controls button {
  margin: 0 0.5em;
  padding: 0.5em 1em;
  cursor: pointer;
}

.pagination-controls span {
  display: flex;
  align-items: center;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
