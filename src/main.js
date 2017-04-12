import Vue from 'vue'
import App from './App'
import store from './store'
import FastClick from 'fastclick'
import router from './router.js'

FastClick.attach(document.body)   // 使用fastclick
Vue.config.productionTip = false

let app = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

export default app
