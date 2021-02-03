<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="firstName"
            v-model="firstName"
            :rules="[() => !!firstName || 'Имя обязательное поле']"
            :error-messages="errorMessages"
            label="Имя"
            placeholder="Павел"
            required
            clearable
          ></v-text-field>
          <v-text-field
            ref="lastName"
            v-model="lastName"
            :rules="[() => !!lastName || 'Фамилия обязательное поле']"
            :error-messages="errorMessages"
            label="Фамилия"
            placeholder="Иванов"
            required
            clearable
          ></v-text-field>
          <v-text-field
            ref="username"
            v-model="username"
            :rules="[() => !!username || 'Имя пользователя обязательное поле']"
            :error-messages="errorMessages"
            label="Логин"
            placeholder="pavel"
            required
            clearable
          ></v-text-field>
          <v-text-field
            ref="password"
            v-model="password"
            :rules="[() => !!password || 'Без пароля, увы не получится']"
            label="Пароль"
            placeholder=""
            type="password"
            required
            clearable
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text> Отмена </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="formHasErrors" left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Сбросить</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" text @click="submit">
            Зарегистрироваться
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['nextUrl'],
  data: () => ({
    errorMessages: [],
    username: null,
    password: null,
    firstName: null,
    lastName: null,
    formHasErrors: false
  }),

  computed: {
    form () {
      return {
        username: this.username,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName
      }
    },
    formData () {
      return JSON.stringify({
        username: this.username,
        password: this.password,
        first_name: this.firstName,
        last_name: this.lastName
      })
    },
    ...mapGetters(['authApi', 'isAuthenticated'])
  },

  watch: {
    username () {
      this.errorMessages = ''
    }
  },

  mounted () {
    if (this.isAuthenticated) {
      if (this.nextUrl != null) {
        this.$router.push(this.nextUrl)
      } else {
        this.$router.push('/calls')
      }
    }
  },

  methods: {
    resetForm () {
      this.errorMessages = ''
      this.formHasErrors = false

      this.username = ''
      this.password = ''
      this.firstName = ''
      this.lastName = ''
    },
    submit () {
      this.formHasErrors = false
      const authApi = this.authApi

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true

        this.$refs[f].validate(true)

        authApi.apiV1UsersRegisterPost(
          {
            requestRegister: this.formData
          },
          (e, d, r) => {
            if (d) {
              this.setTokens(d.access_token, d.refresh_token)
              localStorage.setItem('username', this.username)
              this.resetForm()

              if (this.nextUrl != null) {
                this.$router.push(this.nextUrl)
              } else {
                this.$router.push('/calls')
              }
            } else if (r.status === 404 || r.status === 400) {
              this.errorMessages = 'Не правильный логин или пароль'
              this.formHasErrors = true
            } else {
              this.errorMessages =
                'Что-то пошло не так. Попробуйте войти позже'

              this.formHasErrors = true
            }
            if (e) {
              console.log(e)
            }
          }
        )
      })
    },
    ...mapActions(['setTokens'])
  }
}
</script>
