<template>
  <v-card elevation="2" rounded="5" class="grey lighten-5 pa-6 mt-4 mb-2">
    <v-card-title>
      Звонки
      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Поиск"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-card-subtitle>
      <calls-filters/>
    </v-card-subtitle>
    <v-data-table
      :headers="availableHeaders"
      :items="calls"
      :search="search"
      multi-sort
      show-group-by
      class="elevation-1"
    >
      <template v-slot:item.started_at="{ item }">
        {{ item.started_at | moment('DD.MM.YYYY, HH:mm:ss') }}
      </template>

      <template v-slot:item.state="{ item }">
        <span v-if="item.state == 'Пропущен'" class="red--text">{{
            item.state
          }}</span>
        <span v-else>{{ item.state }}</span>
      </template>

      <template v-slot:item.a_number="{ item }">
        <a @click="updateFilterAndGetCalls(item.a_number)"> {{ item.a_number }} </a>
      </template>

      <template v-slot:item.b_number="{ item }">
        <a @click="updateFilterAndGetCalls(item.b_number)"> {{ item.b_number }} </a>
      </template>

      <template v-slot:item.ext_number="{ item }">
        <a @click="updateFilterAndGetCalls(item.ext_number)"> {{ item.ext_number }} </a>
      </template>

      <template v-slot:item.is_record="{ item }">
        <div v-if="item.is_record">
          <CallRecordingDialog :call-id="item.id"/>
          <v-btn icon color="indigo" link :href="callRecordUrl(item.id)" target="_blank" aria-label="Download">
            <v-icon dense>mdi-download-circle-outline</v-icon>
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CallsFilters from './CallFiltersForm'
import CallRecordingDialog from '@/components/calls/CallRecordingDialog'

export default {
  data () {
    return {
      showPlayerCallId: null,
      selectedState: 'NEED_RECALL',
      selectedCallType: null,
      statesSelect: [
        {
          state: 'NEED_RECALL',
          title: 'Необходимо перезвонить'
        },
        {
          state: 'NEW',
          title: 'Новый'
        },
        {
          state: 'CONNECTED',
          title: 'Начат'
        },
        {
          state: 'END',
          title: 'Успешный'
        },
        {
          state: 'MISSED',
          title: 'Пропущен'
        },
        {
          state: 'NOT_CONNECTED',
          title: 'Недозвон'
        }
      ],
      callTypeSelect: [
        {
          type: 'INCOMING',
          title: 'Входящий'
        },
        {
          type: 'OUTBOUND',
          title: 'Исходящий'
        },
        {
          type: 'INTERNAL',
          title: 'Внутренний'
        }
      ],
      showFilter: false,
      ordering: '-created_at',
      search: '',
      callList: [],
      headers: [
        {
          text: 'Дата',
          align: 'start',
          value: 'started_at',
          groupable: false,
          permission: null
        },
        {
          text: 'Тип',
          value: 'call_type',
          groupable: false,
          permission: null
        },
        {
          text: 'Кто',
          value: 'a_number',
          groupable: false,
          permission: null
        },
        {
          text: 'Внешний номер',
          value: 'ext_number',
          groupable: false,
          permission: null
        },
        {
          text: 'Кому',
          value: 'b_number',
          groupable: false,
          permission: null
        },
        {
          text: 'Ожидание',
          value: 'waiting_time',
          groupable: false,
          permission: null
        },
        {
          text: 'Длительность',
          value: 'duration',
          groupable: false,
          permission: null
        },
        {
          text: 'Статус',
          value: 'state',
          groupable: false,
          permission: null
        },
        {
          text: 'Запись',
          value: 'is_record',
          groupable: false,
          permission: 3
        }
        // { text: "Метки", value: "tags", permission: null },
      ]
    }
  },
  computed: {
    availableHeaders () {
      return this.headers.filter((i) => {
        return (i.permission === null || this.permissions.includes(i.permission))
      })
    },
    ...mapGetters(['calls', 'permissions', 'apiUrl'])
  },
  mounted () {
    this.getCalls()
  },
  methods: {
    callRecordUrl (callId) {
      return `${this.apiUrl}/api/v1/record/?call_id=${callId}`
    },
    updateFilterAndGetCalls (num) {
      this.$store.commit('_setCallsFilters', { number: num })
      this.getCalls()
    },
    ...mapActions(['getCalls'])
  },
  components: {
    CallsFilters,
    CallRecordingDialog
  }
}
</script>
