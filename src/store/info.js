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
    async updateInfo ({ dispatch, commit, getters }, toUpdate) {
      try {
        const uid = await dispatch('getUid')
        const updateData = { ...getters.info, ...toUpdate }
        await firebase.database().ref(`/users/${uid}/info`).update(toUpdate)
        commit('setInfo', updateData)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async fetchInfo ({ dispatch, commit }) {
      try {
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
