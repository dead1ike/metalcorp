<template>
  <div>
    <b-table borderless striped hover :fields="getManagerParameterFields">
      <template #cell(actions)="data">
        <b-btn v-b-popover.hover.topleft="'Удалить'" variant="link">
          <b-icon icon="x-circle" variant="danger"></b-icon
        ></b-btn>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'ManagerRackParameterTable',
  computed: {
    getManagerParameterFields() {
      return this.$store.getters['manager/rack/field/getManagerParameterFields']
    },
  },

  methods: {},
}
</script>
