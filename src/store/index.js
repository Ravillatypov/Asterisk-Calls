import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import api from './modules/api'
import calls from './modules/calls'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    api,
    calls
  },
  state: {},
  mutations: {},
  actions: {}
})
