<template>
  <b-modal id="manager-rack-type-parameter-add" no-close-on-backdrop no-close-on-esc>
    <template #modal-header>
      <h4>Добавление параметров стеллажа:</h4>
    </template>
    <template #modal-footer>
      <b-btn variant="corp">Добавить</b-btn>
      <b-btn variant="danger" @click="closeModal">Отменить</b-btn>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ManagerRackTypeParameterAdd',
  methods: {
    closeModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerRackTypeParameterAdd',
        modalStatus: false,
      })
    },
  },
}
</script>
