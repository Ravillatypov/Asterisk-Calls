import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(require('vue-moment'))
let firstView = true

function toRoute (to, from, next) {
  if (
    to.matched.some(record => record.meta.requiresAuth) &&
    !store.getters.isAuthenticated
  ) {
    next({
      path: '/login',
      query: { nextUrl: to.fullPath }
    })
  } else {
    next()
  }
}
router.beforeEach((to, from, next) => {
  if (firstView) {
    firstView = false
    store.dispatch('refreshTokens')
    setTimeout(() => {
      toRoute(to, from, next)
    }, 300)
  } else toRoute(to, from, next)
})

window.webApp = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
