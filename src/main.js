import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin' // Импорт кастомного плагина
import Loader from '@/components/app/Loader' // Импорт лоадера
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

// Команда npm i firebase
// Делаем импорт firebase
import firebase from 'firebase/app'
// Подключение модуля авторизации
import 'firebase/auth'
// Подключение модуля базы данных
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin) // Подключение кастомного плагина
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.component('Loader', Loader)

// Firebase конфигурация от сайта firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCWdDNI31_i4WEUwgU5aLhaDpaGt5lCO_Y',
  authDomain: 'crm-on-vuejs.firebaseapp.com',
  databaseURL: 'https://crm-on-vuejs.firebaseio.com',
  projectId: 'crm-on-vuejs',
  storageBucket: 'crm-on-vuejs.appspot.com',
  messagingSenderId: '1043094530579',
  appId: '1:1043094530579:web:9fd90f9ee72eddaf31ede6'
}
// Инициализация firebase
firebase.initializeApp(firebaseConfig)

// Создаем переменную app
let app
firebase.auth().onAuthStateChanged(() => {
  // Проверка на наличие уже созданного new Vue в переменной app
  // и инициализация самого приложения
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
