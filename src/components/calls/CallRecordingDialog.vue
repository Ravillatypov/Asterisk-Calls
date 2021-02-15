<template>
  <v-tooltip
    left
    v-model="show"
  >
    <template v-slot:activator>
      <v-btn
        icon
      >
        <v-icon @click="show = !show">
          mdi-play-circle-outline
        </v-icon>
      </v-btn>
    </template>
    <audio controls :src="callRecordUrl"></audio>
  </v-tooltip>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['callId'],
  data () {
    return {
      show: false
    }
  },
  computed: {
    callRecordUrl () {
      return `${this.apiUrl}/api/v1/record/?call_id=${this.callId}`
    },
    ...mapGetters(['apiUrl'])
  }
}
</script>
