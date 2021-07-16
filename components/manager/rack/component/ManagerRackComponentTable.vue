<template>
  <div>
    <b-table hover striped borderless :fields="getManagerComponentFields" :items="getManagerComponentItems">
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
  name: 'ManagerRackComponentTable',
  computed: {
    getManagerComponentFields() {
      return this.$store.getters['manager/rack/field/getManagerComponentFields']
    },
    getManagerComponentItems() {
      return this.$store.getters['manager/rack/component/getComponent']
    },
  },
  mounted() {
    this.fetchComponent()
  },
  methods: {
    deleteItem(uuid) {
      this.$store.dispatch('manager/rack/component/deleteComponent', uuid).then(() => {
        this.fetchComponent()
      })
    },
    fetchComponent() {
      this.$store.dispatch('manager/rack/component/fetchComponent').then(() => {
        console.warn('getManagerComponentItems', this.getManagerComponentItems)
      })
    },
  },
}
</script>
