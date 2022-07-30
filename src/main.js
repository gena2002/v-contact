import {createApp, ref} from 'vue'
import App from './App.vue';
import router from './router/router.js';
import components from './components/UI/index.js'

const app = createApp(App)
export const api = 'http://vcontact.gamesmash.uz:3001';

components.forEach(component => {
    app.component(component.name, component)
})


app
    .use(router)
    .mount('#app')
