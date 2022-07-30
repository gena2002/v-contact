<template>
  <div>
    <light-line/>
    <div class="item" @click="$router.push(`/${contact.id}`)">
      <div class="name">{{ contact.name }}</div>
      <div class="small">{{ contact.phone }}</div>
      <div class="small">{{ contact.email }}</div>
      <div class="small">{{ contact.tag }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.item {
  cursor: pointer;
  padding: 15px 0;
  transition-property: all;
  transition-duration: .3s;
}

/*.item:hover .name {*/
/*  font-weight: bold;*/
/*}*/

.item:active {
  background-color: #f3f3f3;
}

.small {
  font-size: 13px;
  color: #c7c7c7;
}

.bold {
  font-weight: bold;
  color: #333333 !important;
}
</style>