<template>
  <div v-if="!isNotFound">
    <ContactData :id="$route.params.id" :setNotFound="setNotFound"/>
    <my-button class="delete" @click="deleteContact">Удалить контакт</my-button>
  </div>
  <div class="container" v-else>
    <h3>Страница не найдена</h3>
    <my-button class="button" @click="$router.push('/')">Назад</my-button>
  </div>
</template>

<script>


import {useContactById, useDeleteById} from "../hooks/useContacts.js";
import {onMounted, onUpdated, ref} from "vue";
import ContactData from "../components/templates/ContactData.vue";

export default {
  components: {ContactData},
  data() {
    return {
      send: false,
      isNotFound: false,
      contact: {}
    }
  },
  methods: {
    deleteContact() {
      this.send = true;
      const isContactDeleted = useDeleteById(this.send, this.$route.params.id)
      if (isContactDeleted) {
        this.$router.push('/');
      }
    },
    setNotFound() {
      this.isNotFound = true;
    }
  },

}
</script>

<style scoped>
.container {
  padding: 30px 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.button {
  font-size: 16px;
}
.delete{
  font-size: 15px;
  margin-top: 15px;
  color: red !important;
  font-weight: bold;
}
</style>