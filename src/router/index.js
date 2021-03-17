import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/login',
    name: 'AuthLogin',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/Auth.vue'),
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        component: () => import('@/views/Login.vue'),
      },
    ],
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/views/Detail.vue'),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '*',
    name: 'ErrorPage',
    component: () => import('@/views/Error.vue'),
  },
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
const logged = true
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requiresAuth)) {
    if (logged) {
      next()
    } else {
      next('/login')
    }
  }
  next()
})

export default router
