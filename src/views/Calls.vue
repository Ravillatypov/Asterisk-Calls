<template>
  <CallsList/>
</template>

<script>
import CallsList from '@/components/calls/CallsList.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'calls',
  components: { CallsList },
  data () {
    return {
      ws: null,
      wsClose: false
    }
  },
  computed: {
    websocketUrl () {
      const path = '/api/v1/calls/ws/'
      let wsUrl

      if (this.apiUrl.includes('https:')) {
        wsUrl = this.apiUrl.replace('https:', 'wss:') + path
      } else {
        wsUrl = this.apiUrl.replace('http:', 'ws:') + path
      }

      return wsUrl
    },
    ...mapGetters(['apiUrl', 'accessToken'])
  },
  methods: {
    connectToWS () {
      if (this.wsClose) return

      const this2 = this

      this.ws = new WebSocket(this.websocketUrl)
      this.ws.onmessage = (data) => {
        console.log(data)
        this2.getCalls()
      }
      this.ws.onclose = (e) => {
        setTimeout(this2.connectToWS, 300)
      }
    },
    ...mapActions(['getCalls'])
  },
  mounted () {
    this.connectToWS()
  },
  destroyed () {
    this.wsClose = true
    this.ws.close()
  }
}
</script>
