import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
FastClick.attach(document.body)
Vue.use(VueLazyLoad)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
