import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    components: {
      main: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
    }
  },
  {
    path: '/',
    redirect: '/lottery/list',
  },
  {
    path: '/lottery',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      main: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
    },
    children: [
      {
        path: 'edit',
        components: {
          content: () => import(/* webpackChunkName: "lottery-edit" */ '@/views/lottery-edit/index.vue')
        },
      },
      {
        path: 'list',
        components: {
          content: () => import(/* webpackChunkName: "lottery-list" */ '@/views/lottery-list/index.vue')
        },
      },
    ]
  },
  {
    path: '/ad',
    components: {
      main: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
    },
    children: [
      {
        path: 'list',
        components: {
          content: () => import(/* webpackChunkName: "ad-list" */ '@/views/ad-list/index.vue')
        },
      }
    ]
  },
  {
    path: '/member',
    components: {
      main: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
    },
    children: [
      {
        path: 'list',
        components: {
          content: () => import(/* webpackChunkName: "member-list" */ '@/views/member-list/index.vue')
        },
      }
    ]
  },
  {
    path: '/power',
    components: {
      main: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
    },
    children: [
      {
        path: 'info',
        components: {
          content: () => import(/* webpackChunkName: "power-info" */ '@/views/power-info/index.vue')
        },
      },
      {
        path: 'roles',
        components: {
          content: () => import(/* webpackChunkName: "power-info" */ '@/views/power-roles/index.vue')
        },
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
