<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  border: none;
  background: none;
  box-shadow: none;
  cursor: pointer;
  color: #007bff;
  opacity: 1;
  transition-property: all;
  transition-duration: .3s;

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.btn:hover{
  opacity: 0.5;
}
.btn:active{
  color: gray;
}

</style>
