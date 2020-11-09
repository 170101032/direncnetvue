import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Anasayfa",
    component: Homepage
  },
  {
    path: "/productdetails",
    name: "Urun Sayfasi",
    component: () => import("../views/ProductPage.vue")
  },
  {
    path: "/cart",
    name: "Sepet Sayfasi",
    component: () => import("../views/CartPage.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
