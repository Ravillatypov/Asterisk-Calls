import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(require('vue-moment'))

router.beforeEach((to, from, next) => {
  if (
    to.matched.some(record => record.meta.requiresAuth) &&
    !store.getters.isAuthenticated
  ) {
    next({
      path: '/login',
      params: { nextUrl: to.fullPath }
    })
  } else {
    next()
  }
})

window.webApp = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
