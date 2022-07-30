<template>
  <div class="content">
    <my-button class="link">Выйти</my-button>
    <div class="title">
      <p>Контакты</p>
      <div class="betaIcon">demo</div>
    </div>
    <my-button class="button" @click="showAddContact">+</my-button>
  </div>
</template>

<script>
export default {
  props: {
    showAddContact: {
      type: Function
    }
  },
}
</script>

<style scoped>
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-weight: bold;
  font-size: 16px;
  position: relative;
}

.button {
  font-size: 30px;
}

.link {
  font-size: 16px;
}

.betaIcon {
  padding: 3px 5px;
  background-color: #007bff;
  color: white;
  position: absolute;
  right: -45px;
  top: -10px;
  font-size: 12px;
  font-weight: normal;
  border-radius: 6px;
}

</style>