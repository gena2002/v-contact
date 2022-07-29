<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: 'search-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  border: none;
  padding: 10px 15px;
  margin-top: 15px;
  background-color: #f3f3f3;
  border-radius: 8px;
  transition-property: outline-color;
  transition-duration: .3s;
  outline-color: rgba(0, 119, 255, 0);
}

.input:focus {
  outline: 2px solid #007bff;
}


</style>
