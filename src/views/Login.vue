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
      if (this.nextUrl !== null && this.nextUrl !== undefined) { return this.nextUrl }
      return this.$route.query.nextUrl || '/calls'
    }
  },
  components: { LoginForm },
  mounted () {
    if (this.$store.getters.isAuthenticated) this.$router.push(this.url)
  }
}
</script>
