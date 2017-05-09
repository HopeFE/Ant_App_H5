import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './store'
import VueMeta from 'vue-meta'
import article from '@/pages/article'
import credit from '@/pages/credit'
import insurance from '@/pages/insurance'
import induction from '@/pages/induction'
import download from '@/pages/download'

Vue.use(VueMeta)  // 使用变动title
Vue.use(Router)

let router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/download',
      component: article
    },
    {
      path: '/article/:id',
      component: article
    },
    {
      path: '/credit/:area',
      component: credit
    },
    {
      path: '/insurance/:area',
      component: insurance
    },
    {
      path: '/induction',
      component: induction
    },
    {
      path: '/download',
      component: download
    }
  ]
})

// 同步store和路由
sync(store, router)

export default router
