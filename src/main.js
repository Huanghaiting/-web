// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// axios.defaults.headers.common['apikey'] = '0b2bdeda43b5688921839c8ecb20399b'
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
