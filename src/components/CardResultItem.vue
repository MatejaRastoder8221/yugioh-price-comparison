<template>
    <div class="card-result">
      <img :src="imageUrl" :alt="card.name" class="card-image" />
      <div class="card-details">
        <h2>{{ card.name }}</h2>
        <p class="card-type">
          [{{ humanReadableCardType }}]
          <span v-if="isMonster">- ATK/{{ card.atk }} DEF/{{ card.def }}</span>
        </p>
        <p class="card-description">{{ card.desc }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      card: {
        type: Object,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
    },
    computed: {
      humanReadableCardType() {
        return this.card.type.replace('_', ' ');
      },
      isMonster() {
        return this.card.type.toLowerCase().includes('monster');
      },
    },
  };
  </script>
  
  <style scoped>
  .card-result {
    display: flex;
    background-color: #222;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 8px;
    border: 1px solid #333;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .card-image {
    width: 100px;
    height: 140px;
    margin-right: 1em;
    border: 1px solid #444;
    border-radius: 4px;
  }
  
  .card-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .card-details h2 {
    margin: 0;
    font-size: 1.5em;
    color: #1e90ff;
  }
  
  .card-type {
    font-size: 1.2em;
    color: #aaa;
    margin: 0.5em 0;
  }
  
  .card-description {
    font-size: 1em;
    color: #ccc;
  }
  </style>
  