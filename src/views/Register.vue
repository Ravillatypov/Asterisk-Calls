<template>
  <RegisterForm :nextUrl="url" />
</template>

<script>
import RegisterForm from '@/components/auth/RegisterForm.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'register',
  props: ['nextUrl'],
  computed: {
    url () {
      if (this.nextUrl) return this.nextUrl
      return this.$route.query.nextUrl || '/calls'
    },
    ...mapGetters(['isAuthenticated'])
  },
  components: { RegisterForm },
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
