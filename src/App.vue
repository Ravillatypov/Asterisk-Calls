<template>
  <v-app>
    <v-navigation-drawer app src="./assets/bg.jpg">
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="calls">
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
    <v-main>
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
    drawer: true,
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
