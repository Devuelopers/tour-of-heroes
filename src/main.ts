import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$filters = {
    uppercase: (name: string) => {
        return name.toUpperCase();
    }
  }

  app.mount('#app')