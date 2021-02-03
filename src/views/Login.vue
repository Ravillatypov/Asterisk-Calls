<template>
  <LoginForm :nextUrl="url" />
</template>

<script>
import LoginForm from '@/components/auth/LoginForm.vue'

export default {
  name: 'login',
  props: ['nextUrl'],
  computed: {
    url () {
      if (this.nextUrl) return this.nextUrl
      return this.$route.query.nextUrl || '/register'
    }
  },
  components: { LoginForm },
  mounted () {
    const to = this.nextUrl === null ? '/calls' : this.nextUrl

    if (this.$store.getters.isAuthenticated) this.$router.push(to)
  }
}
</script>
