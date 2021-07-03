<template>
  <b-modal id="manager-rack-type-parameter-add" no-close-on-backdrop no-close-on-esc>
    <template #modal-header>
      <h4>Добавление параметров стеллажа:</h4>
    </template>
    <b-dd variant="corp" :text="selectedRack.title ? selectedRack.title : 'Выберите'">
      <template v-for="item in getRackTypes">
        <b-dd-item v-if="item.uuid !== null" :key="item.uuid" @click="selectRack(item.uuid)">{{
          item.title
        }}</b-dd-item>
      </template>
    </b-dd>
    <b-dd variant="corp" :text="selectedParameter.title ? selectedParameter.title : 'Выберите'">
      <template v-for="item in getParameters">
        <b-dd-item v-if="item.uuid !== null" :key="item.uuid" @click="selectParameter(item.uuid)">{{
          item.title
        }}</b-dd-item>
      </template>
    </b-dd>
    <b-input-group class="d-flex flex-column">
      <label>Введите значение</label>
      <b-input v-model="form.rack_parameter_value" class="w-100"></b-input>
    </b-input-group>
    <template #modal-footer>
      <b-btn variant="corp" @click="addRackTypeParameter">Добавить</b-btn>
      <b-btn variant="danger" @click="closeModal">Отменить</b-btn>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ManagerRackTypeParameterAdd',
  data() {
    return {
      form: {
        rack_type_uuid: null,
        rack_parameter_uuid: null,
        rack_parameter_value: '',
      },
    }
  },
  computed: {
    getRackTypes() {
      return this.$store.getters['type/getTypes']
    },
    getParameters() {
      return this.$store.getters['parameter/getParameter']
    },
    selectedRack() {
      if (this.getRackTypes.find((item) => item.uuid === this.form.rack_type_uuid)) {
        return this.getRackTypes.find((item) => item.uuid === this.form.rack_type_uuid)
      }
      return {}
    },
    selectedParameter() {
      if (this.getParameters.find((item) => item.uuid === this.form.rack_parameter_uuid)) {
        return this.getParameters.find((item) => item.uuid === this.form.rack_parameter_uuid)
      }
      return {}
    },
  },
  mounted() {
    this.$bvModal.show('manager-rack-type-parameter-add')
    this.$store.dispatch('parameter/fetchParameter')
    this.$store.dispatch('type/fetchTypes')
  },
  methods: {
    getUuid() {
      return this.$store.getters.getNewUuid(new Date())
    },
    addRackTypeParameter() {
      this.$store
        .dispatch('parameter/postRackTypeParameter', {
          ...this.form,
          uuid: this.getUuid(),
        })
        .then(() => {
          this.$store.dispatch('parameter/fetchRackTypeParameter')
          this.closeModal()
        })
    },
    selectRack(rackUuid) {
      this.form.rack_type_uuid = rackUuid
    },
    selectParameter(parameterUuid) {
      this.form.rack_parameter_uuid = parameterUuid
    },
    closeModal() {
      this.form.rack_type_uuid = null
      this.form.rack_parameter_uuid = null
      this.form.rack_parameter_value = ''
      this.$store.commit('setActiveModal', {
        modalName: 'managerRackTypeParameterAdd',
        modalStatus: false,
      })
    },
  },
}
</script>

<style scoped></style>
