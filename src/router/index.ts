import Vue from 'vue'
import VueRouter from 'vue-router'
import CodeExamples from '../views/CodeExamples.vue'
import TopStories from '../views/TopStories.vue'
// import MyFavorites from '../views/MyFavorites.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'top-stories',
        component: TopStories
    },
    {
        path: '/code-examples',
        name: 'code-examples',
        component: CodeExamples
    },
    {
        path: '/favorites',
        name: 'my-favorites',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/MyFavorites.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
