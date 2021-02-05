<template>
  <UserProfileForm :nextUrl="url" />
</template>

<script>
import UserProfileForm from '@/components/users/UserProfileForm.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'profile',
  props: ['nextUrl'],
  computed: {
    url () {
      if (this.nextUrl !== null && this.nextUrl !== undefined) {
        return this.nextUrl
      }
      return this.$route.query.nextUrl || '/profile'
    },
    ...mapGetters(['isAuthenticated'])
  },
  components: { UserProfileForm },
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
