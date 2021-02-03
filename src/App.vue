<template>
  <v-app>
    <v-app-bar
      absolute
      color="#43a047"
      dark
      shrink-on-scroll
      src="./assets/bg.jpg"
      fade-img-on-scroll
      scroll-target="#web-app-router-view"
      scroll-threshold="200"
      dense
      app
      v-show="isAuthenticated"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-card-title class="white--text"> Звонки </v-card-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        src="./assets/bg.jpg"
      >
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item to="home">
              <v-list-item-icon>
                <v-icon>mdi-phone</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Звонки</v-list-item-title>
            </v-list-item>

            <v-list-item to="login">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <router-view id="web-app-router-view" class="mt-6"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',

  data: () => ({
    items: [{ icon: '', text: '', link: '' }],
    drawer: false,
    group: null,
    timerUpdateUserInfo: null
  }),
  computed: {
    ...mapGetters(['isAuthenticated', 'userInfo'])
  },
  methods: {
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
