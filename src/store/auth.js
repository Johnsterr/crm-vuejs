import firebase from 'firebase/app'

export default {
  actions: {
    // Функция login для авторизации
    async login ({ dispatch, commit }, { email, password }) {
      // eslint-disable-next-line no-useless-catch
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        throw e
      }
    },
    // Функция logout для выхода
    async logout () {
      await firebase.auth().signOut()
    }
  }
}
