<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style>
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #333;
}

.app {
  width: 100%;
  margin: 0 auto;
  max-width: 500px;
  padding: 0 30px 30px 30px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>