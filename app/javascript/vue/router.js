import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from "./components/home.js"

const routes = [
  { path: '/welcome/home', component: HomeComponent }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
