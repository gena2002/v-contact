<template>
  <div class="header">
    <div class="content">
      <my-button class="link">Выйти</my-button>
      <div class="title">Контакты</div>
      <my-button class="button">+</my-button>
    </div>
    <search-input placeholder="Поиск"/>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  padding: 15px 0;
  background-color: white;
}

.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-weight: bold;
  font-size: 16px;
}

.button {
  font-size: 30px;
}

.link {
  font-size: 16px;
}


</style>