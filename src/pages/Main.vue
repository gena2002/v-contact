<template>
  <div style="position: relative">
    <main-header/>
    <contacts-list/>
    <add-contact/>
  </div>
</template>

<script>
import MainHeader from "../components/templates/MainHeader.vue";
import ContactsList from "../components/templates/ContactsList.vue";
import AddContact from "../components/templates/AddContact.vue";

export default {
  components: {AddContact, ContactsList, MainHeader}
}
</script>

<style scoped>

</style>