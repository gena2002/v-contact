import Contact from "../pages/Contact.vue";
import Main from "../pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/:id',
        component: Contact
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;