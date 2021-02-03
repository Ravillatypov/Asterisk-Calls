import { getCallStateName, getCallTypeName, timeDifference } from '@/utils'

export default {
  state: {
    calls: [],
    callsFilters: {
      limit: 10000,
      needRecall: true,
      callType: null,
      state: null,
      startedFrom: null,
      startedTo: null,
      offset: null
    },
    callsOrdering: '-created_at'
  },
  mutations: {
    _setCalls (state, calls) {
      state.calls = [...calls]
    },
    _setCallsFilters (state, options) {
      state.callsFilters = { ...state.callsFilters, ...options }
    },
    _setcallsOrdering (state, options) {
      state.callsOrdering = options
    }
  },
  actions: {
    getCalls ({ getters, commit }) {
      const callsApi = getters.callsApi
      callsApi.apiV1CallsGet(getters.callsFilters, (e, d, r) => {
        if (d) {
          commit('_setCalls', d.result)
        }
      })
    }
  },
  getters: {
    calls: state =>
      state.calls.map(i => {
        const res = { ...i }

        res.is_record = res.call_type === 'INTERNAL' ? false : res.is_record
        res.ext_number =
          i.call_type === 'INCOMING' ? i.request_number : i.from_number
        res.state = getCallStateName(res.state)
        res.call_type = getCallTypeName(res.call_type)

        res.waiting_time = timeDifference(res.voice_started_at, res.started_at)
        res.duration = timeDifference(res.finished_at, res.voice_started_at)

        res.a_number = res.from_pin !== '' ? res.from_pin : res.from_number
        res.b_number = res.request_number

        if (res.request_pin.length > 0) res.b_number = res.request_pin

        return res
      }),
    callsFilters: state => state.callsFilters
  }
}
