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
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
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
      ordering: '-created_at'
    }
  },
  methods: {
    ...mapActions(['getCalls'])
  },
  watch: {
    selectedState () {
      if (this.selectedState === 'NEED_RECALL') {
        this.$store.commit('_setCallsFilters', {
          needRecall: true,
          state: null
        })
      } else {
        this.$store.commit('_setCallsFilters', {
          needRecall: false,
          state: this.selectedState
        })
      }
      this.getCalls()
    },
    selectedCallType () {
      this.$store.commit('_setCallsFilters', {
        callType: this.selectedCallType
      })
      this.getCalls()
    }
  }
}
</script>
