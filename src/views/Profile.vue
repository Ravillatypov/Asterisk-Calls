<template>
  <UserProfileForm/>
</template>

<script>
import UserProfileForm from '@/components/users/UserProfileForm.vue'

export default {
  name: 'profile',
  props: ['nextUrl'],
  components: { UserProfileForm }
}
</script>
