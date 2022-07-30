<template>
  <div class="list" v-if="contacts.length > 0">
    <ContactItem
        v-for="contact in contacts"
        :contact="contact"
        :key="contact.id"
    />
  </div>
  <h4 v-else class="error">
    Контакты не найдены
  </h4>
</template>

<script>
import ContactItem from './ContactItem.vue'

export default {
  components: {ContactItem},
  props: {
    contacts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.list {
  margin-top: 15px;
}

.error {
  text-align: center;
}
</style>