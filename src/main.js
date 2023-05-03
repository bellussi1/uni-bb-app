import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import fontawesome from './assets/fonts/fontAwesome.js'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(fontawesome)
app.mount('#app')
