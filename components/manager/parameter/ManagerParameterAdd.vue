<template>
  <b-modal id="manager-parameter-add" size="sm" no-close-on-backdrop no-close-on-esc>
    <template #modal-header>
      <h4>Добавление параметра</h4>
    </template>
    <b-input-group class="d-flex flex-column">
      <h5>Введите название параметра:</h5>
      <b-form-input v-model="form.title" class="w-100"></b-form-input>
    </b-input-group>
    <template #modal-footer>
      <b-btn variant="corp" @click="addParameter">Добавить</b-btn>
      <b-btn variant="danger" @click="closeModal">Отмена</b-btn>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ManagerParameterAdd',
  data() {
    return {
      form: {
        title: '',
      },
    }
  },
  mounted() {
    this.$bvModal.show('manager-parameter-add')
  },
  methods: {
    getUuid() {
      return this.$store.getters.getNewUuid(new Date())
    },
    addParameter() {
      this.$store
        .dispatch('parameter/postParameter', {
          title: this.form.title,
          uuid: this.getUuid(),
        })
        .then(() => {
          this.closeModal()
          this.$store.dispatch('parameter/fetchParameter')
        })
    },
    closeModal() {
      this.form.title = ''
      this.$store.commit('setActiveModal', {
        modalName: 'managerParameterAdd',
        modalStatus: false,
      })
    },
  },
}
</script>
