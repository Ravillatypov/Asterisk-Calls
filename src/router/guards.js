import store from '@/store'

let firstLaunch = true

export default function (to, from, next) {
  if (firstLaunch) {
    store.dispatch('refreshTokens')
    firstLaunch = false
  }
  const authRequired = to.meta.requiresAuth === true
  if (['login', 'register'].includes(to.name) && store.getters.isAuthenticated) {
    next({ name: 'calls' })
  } else if (!authRequired || store.getters.isAuthenticated) {
    next()
    return
  }
  next({ name: 'login' })
}
