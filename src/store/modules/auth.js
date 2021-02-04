const uid = localStorage.getItem('UserID')

const defaultUserInfo = {
  id: ['null', 'undefined'].includes(uid) ? null : uid,
  firstName: null,
  lastName: null,
  permissions: [],
  username: null
}

export default {
  state: {
    userInfo: { ...defaultUserInfo }
  },
  actions: {
    refreshTokens ({ commit, getters, actions, dispatch }) {
      const refresh = getters.refreshToken
      if (refresh) {
        getters.authApi.apiV1UsersRefreshTokenPost(
          { requestRefreshToken: JSON.stringify({ refresh_token: refresh }) },
          (e, d, r) => {
            if (d) {
              actions.setTokens(d.access_token, d.refresh_token)
            }
            if ([400, 401, 403].includes(r.status)) {
              dispatch('resetTokens')
              commit('_resetUserInfo')
            }
          }
        )
      }
    },
    logout ({ commit, getters, dispatch }) {
      const refresh = getters.refreshToken
      if (refresh) {
        getters.authApi.apiV1UsersRevokeTokenPost(
          { requestRevokeToken: JSON.stringify({ refresh_token: refresh }) },
          (e, d, r) => {
            if (e) {
              console.log(e)
            }
          }
        )
      }
      dispatch('resetTokens')
      commit('_resetUserInfo')
    },
    updateUserInfo ({ commit, getters }) {
      getters.usersApi.apiV1UsersInfoGet((e, d, r) => {
        if (d) {
          commit('_updateUserInfo', d)
        }
      })
    }
  },
  mutations: {
    _updateUserInfo (state, data) {
      state.userInfo.id = data.id
      state.userInfo.firstName = data.first_name
      state.userInfo.lastName = data.last_name
      state.userInfo.permissions = data.permissions
      state.userInfo.username = data.username
    },
    _resetUserInfo (state) {
      state.userInfo = { ...defaultUserInfo }
    }
  },
  getters: {
    isAuthenticated: state => !!state.userInfo.id,
    permissions: state => state.userInfo.permissions,
    userInfo: state => state.userInfo
  }
}
