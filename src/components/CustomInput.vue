<template>
    <div class="custom-input">
      <label :for="inputId">{{ label }}</label>
      <input 
        :id="inputId"
        :type="type" 
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "CustomInput",
    props: {
      label: {
        type: String,
        required: true,
      },
      modelValue: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'text',
      },
      inputId: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-input {
    margin-bottom: 1rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  