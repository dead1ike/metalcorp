<template>
  <b-modal id="manager-type-component-add" no-close-on-backdrop no-close-on-esc>
    <template #modal-header>
      <h5>Добавление компонента:</h5>
    </template>
    <div class="d-flex flex-column">
      <h5>Введите название компонента:</h5>
      <b-input v-model="form.title"></b-input>
    </div>
    <template #modal-footer>
      <b-btn variant="corp" @click="addComponent()">Добавить</b-btn>
      <b-btn variant="danger" @click="closeModal()">Отменить</b-btn>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ManagerRackTypeComponentAdd',
  data() {
    return {
      form: {
        title: '',
      },
    }
  },
  mounted() {
    this.$bvModal.show('manager-type-component-add')
  },
  methods: {
    getUuid() {
      return this.$store.getters.getNewUuid(new Date())
    },
    closeModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerRackComponentAdd',
        modalStatus: false,
      })
    },
    addComponent() {
      this.$store
        .dispatch('manager/rack/component/postComponent', {
          title: this.form.title,
          uuid: this.getUuid(),
        })
        .then(() => {
          this.form.title = ''
          this.closeModal()
          this.$store.dispatch('manager/rack/component/fetchComponent')
        })
    },
  },
}
</script>
