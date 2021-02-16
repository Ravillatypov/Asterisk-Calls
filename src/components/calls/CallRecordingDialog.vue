<template>
  <v-dialog
    left
    v-model="show"
    max-width="400px"
    @click:outside="pauseAllPlays()"
  >
    <template v-slot:activator="{on}">
      <v-btn
        icon
        v-bind="on"
        @click="show = !show"
      >
        <v-icon>
          mdi-play-circle-outline
        </v-icon>
      </v-btn>
    </template>
    <audio controls autoplay preload="auto" :id="playerId">
      <source :src="callRecordUrl">
    </audio>
  </v-dialog>
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
      return `${this.apiUrl}/api/v1/record/?call_id=${this.callId}&token=${this.accessToken}`
    },
    playerId () {
      return `audio-${this.callId}`
    },
    ...mapGetters(['apiUrl', 'accessToken'])
  },
  watch: {
    show (old, newval) {
      if (!newval) this.pauseAllPlays()
    }
  },
  methods: {
    pauseAllPlays () {
      const player = window.document.getElementById(this.playerId)
      if (player !== null && player !== undefined) player.pause()
    }
  }
}
</script>
