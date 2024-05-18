import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: HomeView
    },
    {
      path: '/:productId',
      name: 'productdetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductsDetails.vue')
    }
  ]
})

export default router
