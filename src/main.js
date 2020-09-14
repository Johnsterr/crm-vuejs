import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import 'materialize-css/dist/js/materialize.min'

// Команда npm i firebase
// Делаем импорт firebase
import firebase from 'firebase/app'
// Подключение модуля авторизации
import 'firebase/auth'
// Подключение модуля базы данных
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
