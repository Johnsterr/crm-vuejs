import Vue from 'vue'
import Vuex from 'vuex'
// Подключение модуля auth
import auth from './auth'
// Подключение модуля info
import info from './info'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, info
  }
})
