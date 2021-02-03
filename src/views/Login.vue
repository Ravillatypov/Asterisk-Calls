<template>
  <LoginForm :nextUrl="url" />
</template>

<script>
import LoginForm from '@/components/auth/LoginForm.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'login',
  props: ['nextUrl'],
  computed: {
    url () {
      if (this.nextUrl !== null && this.nextUrl !== undefined) {
        return this.nextUrl
      }
      return this.$route.query.nextUrl || '/calls'
    },
    ...mapGetters(['isAuthenticated'])
  },
  components: { LoginForm },
  mounted () {
    if (this.isAuthenticated) this.$router.push(this.url)
  },
  watch: {
    isAuthenticated (oldVal, newVal) {
      if (newVal) this.$router.push(this.url)
    }
  }
}
</script>
