<template>
  <RegisterForm :nextUrl="url" />
</template>

<script>
import RegisterForm from '@/components/auth/RegisterForm.vue'

export default {
  name: 'register',
  props: ['nextUrl'],
  computed: {
    url () {
      if (this.nextUrl) return this.nextUrl
      return this.$route.query.nextUrl || '/register'
    }
  },
  components: { RegisterForm },
  mounted () {
    if (this.$store.getters.isAuthenticated) this.$router.push(this.url)
  }
}
</script>
