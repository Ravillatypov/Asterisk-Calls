<template>
  <div class="home">
    <input type="text" v-model="username" name="username" />
    <input type="password" v-model="password" name="password" />
    <button v-on:click="login()">login</button>
    <p>{{ v }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import AuthApi from 'asterisk_service_api/dist/api/AuthApi'

const authApi = new AuthApi()

export default {
  name: 'login',
  data () {
    return {
      username: null,
      password: null,
      message: null
    }
  },
  methods: {
    login () {
      authApi.apiV1UsersLoginPost(
        {
          requestAuth: JSON.stringify({
            username: this.username,
            password: this.password
          })
        },
        (e, d, r) => {
          if (r.status === 200) {
            authApi.apiClient.authentications.jwt.apiKey = d.access_token
            localStorage.setItem('refreshToken', d.refresh_token)
            localStorage.setItem('username', this.username)
            this.message = null
          } else if (r.status === 404) {
            this.message = 'Не правильный логин или пароль'
          } else {
            this.message = 'Что-то пошло не так...'
          }
        }
      )
    }
  }
}
</script>
