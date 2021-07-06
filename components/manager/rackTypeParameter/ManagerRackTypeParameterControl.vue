<template>
  <div>
    <b-btn variant="corp" @click="rackTypeParameterAdd">+</b-btn>
    <b-dd v-b-popover.hover.top="'Стеллажи'" variant="corp" size="sm" toggle-class="live-edit" no-caret>
      <template #button-content>
        <b-icon icon="funnel"></b-icon>
      </template>
      <template v-for="itemRack in optionRackType">
        <b-dd-form v-if="itemRack.uuid !== null" :key="itemRack.uuid">
          <b-btn variant="outline-corp" class="b-check live-edit pr-1">
            <b-icon v-if="checkSelectItem('uuid', itemRack.uuid)" icon="record-circle" variant="corp"></b-icon>
            <b-icon v-else icon="circle" variant="corp" @click="updateFilterItem('uuid', itemRack.uuid)"></b-icon>
          </b-btn>
          {{ itemRack.title }}
        </b-dd-form>
      </template>
    </b-dd>
  </div>
</template>

<script>
export default {
  name: 'ManagerRackTypeParameterControl',
  data() {
    return {
      filter: { search: '' },
    }
  },
  computed: {
    optionRackType() {
      const rackType = [
        {
          uuid: 'all',
          title: 'Все',
        },
      ]

      return rackType.concat(this.$store.getters['type/getTypes'])
    },
    getFilter() {
      return this.$store.getters.getFilter
    },
  },
  watch: {
    getFilter: {
      handler() {
        this.fetchRackD()
      },
      deep: true,
    },
  },
  created() {
    this.fetchRackD = _.debounce(this.fetchRack, 1000)
  },
  methods: {
    checkSelectItem(fieldName, value) {
      return this.$store.getters['type/getFilter'][fieldName] === value
    },
    updateFilterItem(fieldName, value) {
      console.warn('filter', fieldName)
      console.warn('filter', value)
      this.$store.commit('type/setFilterItem', {
        fieldName,
        value,
      })
    },
    rackTypeParameterAdd() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerRackTypeParameterAdd',
        modalStatus: true,
      })
    },
    fetchRack() {
      this.$store.dispatch('type/fetchTypes')
    },
  },
}
</script>

<style scoped></style>
