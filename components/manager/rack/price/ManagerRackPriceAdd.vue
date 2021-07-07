<template>
  <b-modal id="manager-price-parameter-add" size="lg" class="w-100 h-100">
    <template #modal-header>
      <h5>Добавление цены для комплектующего:</h5>
    </template>
    <div class="d-flex flex-row">
      <div class="mx-2">
        <h6>Компонент</h6>
        <b-dd
          variant="corp"
          :text="
            selectedRackComponent.rack_component_value
              ? selectedRackComponent.rack_title + ' ' + selectedRackComponent.rack_component_value
              : 'Выберите'
          "
        >
          <template v-for="item in getRackComponents">
            <b-dd-item v-if="item.uuid !== null" :key="item.uuid" @click="selectRackComponent(item.uuid)">
              {{ item.rack_title + ' ' + item.rack_component_value }}
            </b-dd-item>
          </template>
        </b-dd>
      </div>
      <div v-if="selectedRackComponent.is_constructor === true" class="mx-2">
        <h6>Комплектующий</h6>
        <b-dd
          variant="corp"
          :text="
            selectedChildRackComponent.rack_component_value
              ? selectedChildRackComponent.rack_component_value
              : 'Выберите'
          "
        >
          <template v-for="item in getCurrentChild">
            <b-dd-item v-if="item.uuid !== null" :key="item.uuid" @click="selectRackChildComponent(item.uuid)">
              {{ item.rack_component_value }}
            </b-dd-item>
          </template>
        </b-dd>
      </div>
      <div class="mx-2">
        <h6>Параметр</h6>
        <b-dd variant="corp" :text="selectedParameter.title ? selectedParameter.title : 'Выберите'">
          <template v-for="item in getParameters">
            <b-dd-item v-if="item.uuid !== null" :key="item.uuid" @click="selectParameter(item.uuid)">
              {{ item.title }}
            </b-dd-item>
          </template>
        </b-dd>
      </div>
    </div>

    <div class="d-flex flex-column">
      <div>
        <h6>Введите значение параметра</h6>
        <b-input v-model="form.parameter_value"></b-input>
      </div>
      <div>
        <h6>Введите цену параметра</h6>
        <b-input v-model="form.price"></b-input>
      </div>
    </div>
    <template #modal-footer>
      <b-btn variant="corp" @click="addComponentPrice()">Добавить</b-btn>
      <b-btn variant="danger" @click="closeModal()">Отменить</b-btn>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ManagerRackPriceAdd',
  data() {
    return {
      form: {
        price: '',
        parameter_value: '',
        parameter_uuid: null,
        rack_component_uuid: null,
        rack_child_component_uuid: null,
      },
    }
  },
  computed: {
    getRackComponents() {
      return this.$store.getters['manager/rack/component/getRackComponent'].filter((item) => item.parent_uuid === null)
    },
    getRackChildComponents() {
      return this.$store.getters['manager/rack/component/getRackComponent'].filter((item) => item.parent_uuid !== null)
    },
    getCurrentChild() {
      return this.getRackChildComponents.filter((item) => item.parent_uuid === this.form.rack_component_uuid)
    },
    getParameters() {
      return this.$store.getters['manager/rack/parameter/getParameter']
    },
    selectedRackComponent() {
      if (this.getRackComponents.find((item) => item.uuid === this.form.rack_component_uuid)) {
        return this.getRackComponents.find((item) => item.uuid === this.form.rack_component_uuid)
      }
      return {}
    },
    selectedChildRackComponent() {
      if (this.getRackChildComponents.find((item) => item.uuid === this.form.rack_child_component_uuid)) {
        return this.getRackChildComponents.find((item) => item.uuid === this.form.rack_child_component_uuid)
      }
      return {}
    },
    selectedParameter() {
      if (this.getParameters.find((item) => item.uuid === this.form.parameter_uuid)) {
        return this.getParameters.find((item) => item.uuid === this.form.parameter_uuid)
      }
      return {}
    },
  },
  mounted() {
    this.$bvModal.show('manager-price-parameter-add')
    this.$store.dispatch('manager/rack/parameter/fetchParameter')
    this.$store
      .dispatch('manager/rack/component/fetchRackComponent')
      .then(() => console.warn('asdasdasd', this.getRackComponents))
    console.warn('asdasdasd', this.getRackComponents)
  },
  methods: {
    getUuid() {
      return this.$store.getters.getNewUuid(new Date())
    },
    selectRackComponent(uuid) {
      this.form.rack_component_uuid = uuid
    },
    selectRackChildComponent(uuid) {
      this.form.rack_child_component_uuid = uuid
      console.warn('child', this.selectedChildRackComponent)
    },
    selectParameter(uuid) {
      this.form.parameter_uuid = uuid
    },
    addComponentPrice() {
      this.$store
        .dispatch('manager/rack/price/postComponentPrice', {
          price: this.form.price,
          parameter_value: this.form.parameter_value,
          parameter_uuid: this.form.parameter_uuid,
          rack_component_uuid: this.form.rack_component_uuid,
          uuid: this.getUuid(),
        })
        .then(() => {
          this.$store.dispatch('manager/rack/price/fetchComponentPrice')
          this.form.price = ''
          this.form.parameter_value = ''
          this.form.parameter_uuid = null
          this.form.rack_component_uuid = null
          this.closeModal()
        })
    },
    closeModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerRackPriceParameterAdd',
        modalStatus: false,
      })
    },
  },
}
</script>
