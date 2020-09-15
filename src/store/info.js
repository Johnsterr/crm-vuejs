import firebase from 'firebase/app'

export default {
  state: {
    info: {}
  },
  mutations: {
    // Получение информации о пользователе
    setInfo (state, info) {
      state.info = info
    },
    // Очистка информации при выходе пользователя
    clearInfo (state) {
      state.info = {}
    }
  },
  actions: {
    async fetchInfo ({ dispatch, commit }) {
      try {
        // Получение информации пользователя по его ключу в БД
        const uid = await dispatch('getUid')
        const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
        commit('setInfo', info)
      } catch (e) {}
    }
  },
  getters: {
    info: s => s.info
  }
}
