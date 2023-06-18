import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/MainView.vue')
  },
  {
    path: '/tasks',
    name: 'tasks.index',
    component: () => import('@/views/Tasks/IndexView.vue')
  },
  {
    path: '/tasks/create',
    name: 'tasks.create',
    component: () => import('@/views/Tasks/CreateView.vue')
  },
  {
    path: '/tasks/:id/edit',
    name: 'tasks.edit',
    component: () => import('@/views/Tasks/EditView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
