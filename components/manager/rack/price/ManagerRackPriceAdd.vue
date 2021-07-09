<template>
  <b-modal id="manager-price-parameter-add" size="lg" class="w-100 h-100">
    <template #modal-header>
      <h5>Добавление цены для компонента:</h5>
    </template>
    <div class="d-flex flex-row">
      <div class="mx-2">
        <h6>Стеллаж</h6>
        <b-dd variant="corp" :text="selectedRack.title ? selectedRack.title : 'Выберите'">
          <template v-for="item in getRacks">
            <b-dd-item v-if="item.uuid !== null" :key="item.uuid" @click="selectRack(item.uuid)">
              {{ item.title }}
            </b-dd-item>
          </template>
        </b-dd>
      </div>
      <div class="mx-2">
        <h6>Компонент</h6>
        <b-dd
          variant="corp"
          :text="
            selectedRackComponent.rack_component_value
              ? selectedRackComponent.rack.title + ' ' + selectedRackComponent.rack_component_value
              : 'Выберите'
          "
        >
          <template v-for="item in getRackComponents">
            <b-dd-item :key="item.uuid" @click="selectRackComponent(item.uuid)">
              {{ item.rack.title + ' ' + item.rack_component_value }}
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
          <template v-for="item in selectedRackComponent.rack_component_childs">
            <b-dd-item :key="item.uuid" @click="selectRackChildComponent(item.uuid)">
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
        <h6>Введите количество компонентов на стеллаж::</h6>
        <b-input v-model="form.count"></b-input>
      </div>
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
        rack_type_uuid: null,
        rack_component_uuid: null,
        rack_child_component_uuid: null,
        count: '1',
      },
    }
  },
  computed: {
    getSelectedComponentUuid() {
      if (this.form.rack_child_component_uuid !== null) {
        return this.form.rack_child_component_uuid
      } else if (this.form.rack_component_uuid !== null) {
        return this.form.rack_component_uuid
      }
      return null
    },
    getRackComponents() {
      return this.$store.getters['manager/rack/component/getRackComponent'].filter(
        item => item.rack_uuid === this.form.rack_type_uuid,
      )
    },
    getParameters() {
      return this.$store.getters['manager/rack/parameter/getParameter']
    },
    selectedRackComponent() {
      if (this.getRackComponents.find(item => item.uuid === this.form.rack_component_uuid)) {
        return this.getRackComponents.find(item => item.uuid === this.form.rack_component_uuid)
      }
      return {}
    },
    selectedChildRackComponent() {
      if (
        this.selectedRackComponent.rack_component_childs.find(item => item.uuid === this.form.rack_child_component_uuid)
      ) {
        return this.selectedRackComponent.rack_component_childs.find(
          item => item.uuid === this.form.rack_child_component_uuid,
        )
      }
      return {}
    },
    selectedParameter() {
      if (this.getParameters.find(item => item.uuid === this.form.parameter_uuid)) {
        return this.getParameters.find(item => item.uuid === this.form.parameter_uuid)
      }
      return {}
    },
    selectedRack() {
      if (this.getRacks.find(item => item.uuid === this.form.rack_type_uuid)) {
        return this.getRacks.find(item => item.uuid === this.form.rack_type_uuid)
      }
      return {}
    },
    getRacks() {
      return this.$store.getters['type/getTypes']
    },
  },
  mounted() {
    this.$bvModal.show('manager-price-parameter-add')
    this.$store.dispatch('type/fetchTypes')
    this.$store.dispatch('manager/rack/parameter/fetchParameter')
    this.$store
      .dispatch('manager/rack/component/fetchRackComponent')
      .then(() => console.warn('asdasdasd', this.getRackComponents))
  },
  methods: {
    selectRack(uuid) {
      this.form.rack_type_uuid = uuid
    },
    getUuid() {
      return this.$store.getters.getNewUuid(new Date())
    },
    selectRackComponent(uuid) {
      console.warn('uuid', uuid)
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
          rack_component_uuid: this.getSelectedComponentUuid,
          count: this.form.count,
          uuid: this.getUuid(),
        })
        .then(() => {
          this.$store.dispatch('manager/rack/price/fetchComponentPrice')
          this.form.price = ''
          this.form.parameter_value = ''
          this.form.count = '1'
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
