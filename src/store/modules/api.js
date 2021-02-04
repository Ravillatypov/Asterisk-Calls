import ApiClient from '@/requests/ApiClient'
import UsersApi from '@/requests/api/UsersApi'
import AuthApi from '@/requests/api/AuthApi'
import PermissionsApi from '@/requests/api/PermissionsApi'
import CallApi from '@/requests/api/CallApi'
import CallRecordApi from '@/requests/api/CallRecordApi'
import TagsApi from '@/requests/api/TagsApi'

const client = new ApiClient()
const refreshKey = 'refreshToken'
const lrefToken = localStorage.getItem(refreshKey)
const refToken = ['null', 'undefined'].includes(lrefToken) ? null : lrefToken

export default {
  state: {
    cleint: client,
    tagsApi: new TagsApi(client),
    usersApi: new UsersApi(client),
    authApi: new AuthApi(client),
    callsApi: new CallApi(client),
    callRecordsApi: new CallRecordApi(client),
    permissionsApi: new PermissionsApi(client),
    refreshToken: refToken
  },
  getters: {
    cleint: state => state.cleint,
    tagsApi: state => state.tagsApi,
    usersApi: state => state.usersApi,
    authApi: state => state.authApi,
    callsApi: state => state.callsApi,
    callRecordsApi: state => state.callRecordsApi,
    permissionsApi: state => state.permissionsApi,
    refreshToken: state => state.refreshToken
  },
  mutations: {
    _resetTokens (state) {
      localStorage.setItem(refreshKey, null)
      localStorage.setItem('UserID', null)
      localStorage.setItem('accessToken', null)
      client.authentications.jwt.apiKey = null
      state.refreshToken = null
    },
    _setRefreshToken (state, refresh) {
      state.refreshToken = refresh
    }
  },
  actions: {
    setTokens ({ commit }, access, refresh) {
      client.authentications.jwt.apiKey = access
      localStorage.setItem(refreshKey, refresh)
      localStorage.setItem('accessToken', access)
      commit('_setRefreshToken', refresh)
    },
    resetTokens ({ commit }) {
      commit('_resetTokens')
    }
  }
}
