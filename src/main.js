import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import VueKonva from 'vue-konva';

import './assets/main.css'
const store = createStore({
  state () {
    return {
      count: 10
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})


const app = createApp(App)

app.use(store)

app.use(router)
app.use(VueKonva)

app.mount('#app')
