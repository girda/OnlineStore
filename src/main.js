import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAs6RzgLdjbDEbg2T-GdBR0_bwmBPAbLPw',
      authDomain: 'onlinestore-48d2b.firebaseapp.com',
      databaseURL: 'https://onlinestore-48d2b.firebaseio.com',
      projectId: 'onlinestore-48d2b',
      storageBucket: 'onlinestore-48d2b.appspot.com',
      messagingSenderId: '495266488775'
    }

    fb.initializeApp(config)
  }
})
