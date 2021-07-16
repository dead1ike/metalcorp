<template>
  <div>
    <b-table borderless striped hover :fields="getManagerParameterFields" :items="getManagerParameterItems">
      <!--      <template #cell(actions)="data">-->
      <!--        <b-dd v-b-popover.hover.topleft="'Удалить'" variant="link" no-caret size="sm">-->
      <!--          <template #button-content>-->
      <!--            <b-icon icon="x-circle" scale="1.6" variant="danger"></b-icon>-->
      <!--          </template>-->
      <!--          <h6 class="text-center">Вы уверены?</h6>-->
      <!--          <hr />-->
      <!--          <b-dd-item>-->
      <!--            <b-btn variant="danger" size="sm" block @click="deleteItem(data.item.uuid)">Да</b-btn>-->
      <!--          </b-dd-item>-->
      <!--          <b-dd-item>-->
      <!--            <b-btn variant="corp" size="sm" block>Нет</b-btn>-->
      <!--          </b-dd-item>-->
      <!--        </b-dd>-->
      <!--      </template>-->
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
    getManagerParameterItems() {
      return this.$store.getters['manager/rack/parameter/getParameter']
    },
  },
  mounted() {
    this.fetchParameters()
  },
  methods: {
    deleteItem(uuid) {
      this.$store.dispatch('manager/rack/parameter/deleteParameter', uuid).then(() => {
        this.fetchParameters()
      })
    },
    fetchParameters() {
      this.$store.dispatch('manager/rack/parameter/fetchParameter').then(() => {})
    },
  },
}
</script>
