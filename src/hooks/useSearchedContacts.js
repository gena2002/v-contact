import {ref, computed} from 'vue'

export default function useSearchedContacts(contacts) {
    const searchQuery = ref('')

    const searchedContacts = computed(() => {
        try {
            let byName = contacts.value.filter(contact => contact.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
            let byPhone = contacts.value.filter(contact => contact.phone.toLowerCase().includes(searchQuery.value.toLowerCase()));
            let byEmail = contacts.value.filter(contact => contact.email.toLowerCase().includes(searchQuery.value.toLowerCase()));
            let byTag = contacts.value.filter(contact => contact.tag.toLowerCase().includes(searchQuery.value.toLowerCase()));

            if (byName.length > 0) {
                return byName;
            } else if (byPhone.length > 0) {
                return byPhone;
            } else if (byEmail.length > 0) {
                return byEmail;
            } else if (byTag.length > 0) {
                return byTag;
            } else {
                return [];
            }
        } catch (e) {
            return []
        }

    })

    return {
        searchQuery, searchedContacts
    }
};
