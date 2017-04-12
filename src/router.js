import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './store'
import VueMeta from 'vue-meta'
import article from '@/pages/article'
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
      path: '/download',
      component: download
    }
  ]
})

// 同步store和路由
sync(store, router)

export default router
