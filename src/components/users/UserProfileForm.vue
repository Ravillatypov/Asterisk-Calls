<template>
  <v-row justify="center">
    <v-col cols="10" sm="8" md="6" lg="4">
      <v-card ref="form">
        <v-card-title
          v-text="this.userInfo.lastName + ' ' + this.userInfo.firstName"
        >
        </v-card-title>
        <v-divider class="mt-1"></v-divider>
        <v-card-text>
          <v-text-field
            ref="firstName"
            v-model="firstName"
            label="Имя"
            required
            v-on:keyup.enter="submit()"
          ></v-text-field>
          <v-text-field
            ref="lastName"
            v-model="lastName"
            label="Фамилия"
            required
            v-on:keyup.enter="submit()"
          ></v-text-field>
          <v-text-field
            ref="password"
            v-model="password"
            label="Пароль"
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text> Отмена </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="submit"> Сохранить </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      password: null,
      value: true
    }
  },
  computed: {
    ...mapGetters(['userInfo', 'usersApi']),
    formData () {
      const obj = {
        first_name: this.userInfo.firstName,
        last_name: this.userInfo.lastName
      }
      if (this.firstName) obj.first_name = this.firstName
      if (this.lastName) obj.last_name = this.lastName
      if (this.password) obj.password = this.password
      return { requestUpdateUser: JSON.stringify(obj) }
    }
  },
  methods: {
    submit () {
      this.usersApi.apiV1UsersInfoPost(this.formData, (e, d, r) => {
        if (d) {
          this.updateUserInfo()
        }
      })
    },
    ...mapActions(['updateUserInfo'])
  },
  mounted () {
    this.firstName = this.userInfo.firstName || ''
    this.lastName = this.userInfo.lastName || ''
  }
}
</script>
