import axios from "axios";
import {ref, onMounted} from 'vue';
import {api} from "../main.js";

export function useContacts() {
    const contacts = ref([])
    const isContactsLoading = ref(true)

    const fetching = async () => {
        try {
            const response = await axios.get(`${api}/contacts`);
            contacts.value = response.data.contacts;
        } catch (e) {
            console.log(e)
        } finally {
            isContactsLoading.value = false;
        }
    }

    onMounted(fetching)

    return {
        contacts, isContactsLoading
    }
}

export function useContactById(id) {
    const contact = ref({})
    const isContactLoading = ref(true)

    const fetching = async () => {
        try {
            const response = await axios.get(`${api}/contacts?id=${id}`);
            contact.value = response.data.contacts[0];
            console.log(contact.value)
        } catch (e) {
            console.log(e)
            contact.value = {null: 'null'}
        } finally {
            isContactLoading.value = false;
        }
    }

    onMounted(fetching)

    return {
        contact, isContactLoading,
    }
}

export function useDeleteById(send, id) {
    const isContactDeleted = ref(false)

    const fetching = async () => {
        if (send === true) {
            try {
                const response = await axios.post(`${api}/delete`, {id});
                console.log(response)
                isContactDeleted.value = true;
            } catch (e) {
                console.log(e)
                alert("Не удалось удалить")
            }
        }
    }

    fetching()

    return isContactDeleted;
}

export function useAddContact(send, name, phone, email, tag) {
    const isContactAdded = ref(false);
    const isAddLoading = ref(true);

    const fetching = async () => {
        console.log(send, name, phone, email, tag)
        if (send === true) {
            try {
                const response = await axios.post(`${api}/add`,
                    {name: name, phone: phone, email: email, tag: tag}, {});
                console.log(response)
                isContactAdded.value = true;
            } catch (e) {
                console.log(e)
                alert("Не удалось создать")
            } finally {
                isAddLoading.value = false;
            }
        }
    }

    fetching();

    return {
        isContactAdded,
        isAddLoading,
    };
}