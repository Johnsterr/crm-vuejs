import firebase from 'firebase/app'

export default {
  actions: {
    // Функции ниже возвращают promise, поэтому используем async/await
    // Функция login для авторизации
    async login ({ dispatch, commit }, { email, password }) {
      // eslint-disable-next-line no-useless-catch
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    // Функция register для регистрации
    async register ({ dispatch, commit }, { email, password, name }) {
      // eslint-disable-next-line no-useless-catch
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 10000, // начальный счет
          name: name
        })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    // Получение UID пользователя из firebase
    getUid () {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    // Функция logout для выхода
    async logout ({ commit }) {
      await firebase.auth().signOut()
      commit('clearInfo')
    }
  }
}
