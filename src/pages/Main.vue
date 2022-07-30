<template>
  <div style="position: relative">
    <div class="header">
      <main-header :showAddContact="showAddContact"/>
      <search-input v-model="searchQuery" placeholder="Поиск"/>
    </div>
    <contacts-list :contacts="searchedContacts" v-if="!isContactsLoading"/>
    <div v-else>Загрузка...</div>
    <add-contact v-model:show="addContactVisible"/>
  </div>
</template>

<script>
import MainHeader from "../components/templates/MainHeader.vue";
import ContactsList from "../components/templates/ContactsList.vue";
import AddContact from "../components/templates/AddContact.vue";
import useSearchedContacts from "../hooks/useSearchedContacts.js";
import {useContacts} from "../hooks/useContacts.js";

export default {
  components: {AddContact, ContactsList, MainHeader},
  data() {
    return {
      addContactVisible: false,
    }
  },
  methods: {
    showAddContact() {
      this.addContactVisible = true;
    }
  },
  updated() {


  },
  setup(props) {
    const {contacts, isContactsLoading} = useContacts();
    const {searchQuery, searchedContacts} = useSearchedContacts(contacts)

    return {
      contacts,
      isContactsLoading,
      searchQuery,
      searchedContacts,
    }
  }
}
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

</style>