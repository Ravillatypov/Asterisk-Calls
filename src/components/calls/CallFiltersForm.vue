<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="statesSelect"
          v-model="selectedState"
          item-text="title"
          item-value="state"
          label="Статус"
          clearable
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="callTypeSelect"
          v-model="selectedCallType"
          item-text="title"
          item-value="type"
          label="Тип"
          clearable
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <v-text-field
          v-model="number"
          item-text="title"
          item-value="type"
          label="Номер"
          readonly
          clearable
          @click:clear="updateFilterAndGetCalls({number: null})"
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-menu
          ref="menuFrom"
          v-model="menuFrom"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="formattedDateRange"
              label="Период"
              v-bind="attrs"
              readonly
              clearable
              @click:clear="dates = [null, null]"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="dates"
            no-title
            range
            @input="mayBeHideDatePicker()"
            locale="ru-ru"
          ></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    const dt = new Date()
    dt.setHours(0, 0, 0, 0)
    const dtFrom = new Date(dt.getTime() - 7 * 24 * 60 * 60 * 1000)
    return {
      menuFrom: false,
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
      dates: [dtFrom.toISOString().split('T')[0], dt.toISOString().split('T')[0]],
      ordering: '-created_at'
    }
  },
  methods: {
    mayBeHideDatePicker () {
      if (this.dates.length === 2 && !this.dates.includes(null)) this.menuFrom = false
    },
    updateFilterAndGetCalls (payload) {
      this.$store.commit('_setCallsFilters', payload)
      this.getCalls()
    },
    ...mapActions(['getCalls'])
  },
  watch: {
    selectedState () {
      let payload = {}
      if (this.selectedState === 'NEED_RECALL') {
        payload = {
          needRecall: true,
          state: null
        }
      } else {
        payload = {
          needRecall: false,
          state: this.selectedState
        }
      }
      this.updateFilterAndGetCalls(payload)
    },
    selectedCallType () {
      this.updateFilterAndGetCalls({
        callType: this.selectedCallType
      })
    },
    dates () {
      this.updateFilterAndGetCalls({
        startedFrom: this.dates[0],
        startedTo: this.dates[1]
      })
    },
    propsNumber (old, newVal) {
      this.updateFilterAndGetCalls({ number: newVal })
    }
  },
  computed: {
    formattedDateRange: {
      get: function () {
        if (this.dates !== undefined && this.dates.length === 2 && !this.dates.includes(null)) {
          return this.dates.map(i => {
            const [y, m, d] = i.split('-')
            return `${d}.${m}.${y}`
          }).join(' - ')
        }
        return ''
      },
      set: function (val) {}
    },
    number: {
      get: function () {
        return this.filterByNumber
      },
      set: function () {}
    },
    ...mapGetters(['filterByNumber'])
  }
}
</script>
