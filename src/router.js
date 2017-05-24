import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './store'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)  // 使用变动title
Vue.use(Router)

let router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/download'
    },
    {
      path: '/download',
      component: r => require.ensure([], () => r(require('@/pages/download')), '/download')
    },
    {
      name: 'article',
      path: '/article/:id',
      component: r => require.ensure([], () => r(require('@/pages/article')), '/article')
    },
    {
      name: 'credit',
      path: '/credit/:area',
      component: r => require.ensure([], () => r(require('@/pages/credit')), '/credit')
    },
    {
      name: 'insurance',
      path: '/insurance/:area',
      component: r => require.ensure([], () => r(require('@/pages/insurance')), '/insurance')
    },
    {
      name: 'induction',
      path: '/induction/:type/:index',
      component: r => require.ensure([], () => r(require('@/pages/induction')), '/induction')
    }
  ]
})

// 同步store和路由
sync(store, router)

export default router
