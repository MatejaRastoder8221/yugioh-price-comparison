<template>
  <div class="single-card-container" v-if="card">
    <div class="card-image">
      <img :src="getCardImageUrl(card)" :alt="card.name" />
    </div>
    <div class="card-details">
      <h2>{{ card.name }}</h2>
      <p><strong>Type:</strong> {{ card.type }}</p>
      <p><strong>Race:</strong> {{ card.race }}</p>
      <p><strong>Attribute:</strong> {{ card.attribute }}</p>
      <p v-if="card.level"><strong>Level:</strong> {{ card.level }}</p>
      <p v-if="card.atk"><strong>ATK:</strong> {{ card.atk }}</p>
      <p v-if="card.def"><strong>DEF:</strong> {{ card.def }}</p>
      <p v-else-if="card.def==0"><strong>DEF:</strong> {{ card.def }}</p>
      <p v-if="card.desc"><strong>Description:</strong> {{ card.desc }}</p>
      <router-link to="/search">Back to search results</router-link>
    </div>
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

    const fetchCardData = async (id) => {
      try {
        const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
          params: { id },
        });

        if (response.data.data.length > 0) {
          card.value = response.data.data[0];
        }
      } catch (err) {
        console.error('Error fetching card data:', err);
      }
    };

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

    onMounted(() => {
      const cardId = route.params.id;
      fetchCardData(cardId);
    });

    return {
      card,
      getCardImageUrl,
    };
  },
};
</script>
  
<style scoped>
.single-card-container {
  background-color: #121212;
  color: white;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2em;
}

.card-image img {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  margin: 5vw;
}

.card-details {
  max-width: 500px;
}

.card-details h2 {
  margin-bottom: 0.5em;
  font-size: 2em;
  text-align: left;
}

.card-details p {
  margin: 0.5em 0;
  text-align: left;
}

.router-link {
  display: block;
  margin-top: 1em;
  color: #1e90ff;
  text-decoration: none;
  text-align: left;
}

.router-link:hover {
  text-decoration: underline;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .card-content {
    flex-direction: column;
    align-items: center;
  }

  .card-image img {
    width: 80%;
    max-width: 80%;
    margin: 1em 0;
  }

  .card-details {
    text-align: center;
    max-width: 90%;
  }

  .card-details h2 {
    font-size: 1.5em;
    text-align: center;
  }

  .card-details p {
    text-align: center;
  }

  .router-link {
    text-align: center;
  }
}
</style>

  