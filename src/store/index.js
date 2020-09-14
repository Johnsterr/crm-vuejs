import Vue from 'vue'
import Vuex from 'vuex'
// Подключение модуля auth
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  }
})
