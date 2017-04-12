import Vue from 'vue'
import Vuex from 'vuex'
import ant from './modules/store'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    ant
  }
})
