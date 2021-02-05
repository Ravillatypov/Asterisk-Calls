<template>
  <v-app>
    <v-navigation-drawer
      app
      :mini-variant="drawer"
      src="./assets/bg.jpg"
      color="#0f362f"
      dark
    >
      <template v-slot:img="{ props }">
        <v-img src="./assets/bg.jpg" style="opacity: 0.2" min-height="100vh">{{
          props
        }}</v-img>
      </template>
      <v-list nav dense>
        <v-list-item-group>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-list-item-group>

        <v-list-item-group
          v-model="group"
          active-class="indigo--text text--lighten-5"
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="indigo--text text--lighten-5"
          >
            <v-list-item v-show="isAuthenticated" @click="fullLogout()">
              <v-list-item-icon>
                <v-icon>mdi-exit-to-app</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="white--text text--darken-1"
                  >Выход</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-main>
      <router-view id="web-app-router-view" class="mt-6"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {
  mdiLocationEnter,
  mdiTagMultipleOutline,
  mdiAccountEdit,
  mdiAccountPlusOutline,
  mdiPhoneOutline
} from '@mdi/js'

export default {
  name: 'App',

  data: () => ({
    menuItems: [
      {
        icon: mdiLocationEnter,
        title: 'Вход',
        link: 'login',
        permission: null,
        authRequired: false
      },
      {
        icon: mdiAccountPlusOutline,
        title: 'Регистрация',
        link: 'register',
        permission: null,
        authRequired: false
      },
      {
        icon: mdiAccountEdit,
        title: 'Мой профайл',
        link: 'profile',
        permission: null,
        authRequired: true
      },
      {
        icon: mdiPhoneOutline,
        title: 'Звонки',
        link: 'calls',
        permission: 0,
        authRequired: true
      },
      {
        icon: mdiTagMultipleOutline,
        title: 'Метки',
        link: 'tags',
        permission: 4,
        authRequired: true
      }
    ],
    drawer: false,
    group: null,
    timerUpdateUserInfo: null
  }),
  computed: {
    items () {
      const permissions = this.permissions
      const isAuth = this.isAuthenticated
      return this.menuItems.filter(
        (i) =>
          (i.authRequired === isAuth && i.permission === null) ||
          permissions.includes(i.permission)
      )
    },
    ...mapGetters(['isAuthenticated', 'userInfo', 'permissions'])
  },
  methods: {
    fullLogout () {
      this.logout()
      this.$router.push('/login')
    },
    ...mapActions(['refreshTokens', 'updateUserInfo', 'logout'])
  },
  mounted () {
    this.refreshTokens()
    this.updateUserInfo()
    this.timerUpdateUserInfo = setInterval(this.updateUserInfo, 60000)
  },
  beforeDestroy () {
    if (this.timerUpdateUserInfo) {
      clearInterval(this.timerUpdateUserInfo)
    }
  }
}
</script>
