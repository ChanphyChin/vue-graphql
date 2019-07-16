import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueApollo from 'vue-apollo'
import { apolloClient } from './vue-apollo'


// Install the vue plugin
Vue.use(VueApollo)

Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

window.vm = new Vue({
  router,
  apolloProvider,
  store,
  render: h => h(App)
}).$mount('#app')
