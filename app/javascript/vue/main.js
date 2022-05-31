import * as Vue from "vue"
import router from './router.js'

console.log("go to welcome/home to see the configuration")
const app = Vue.createApp({})

app.use(router)

if (document.getElementById('app')) {
  app.mount('#app')
}
