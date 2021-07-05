<template>
  <b-modal id="manager-price-parameter-add" size="lg" class="w-100 h-100">
    <template #modal-header>
      <h5>Добавление цены для параметра:</h5>
    </template>
    <div class="d-flex flex-wrap w-100">
      <div class="d-flex flex-column">
        <p>Стеллаж:</p>
        <b-dd class="mx-2" variant="corp" :text="selectedRack.title ? selectedRack.title : 'Выберите'">
          <template v-for="item in getRackTypeItems">
            <b-dd-item v-if="item.uuid !== null" :key="item.uuid" @click="selectRack(item.uuid)">{{
              item.title
            }}</b-dd-item>
          </template>
        </b-dd>
      </div>
      <div class="d-flex flex-column">
        <p>Высота:</p>
        <b-dd
          :disabled="form.rack_type_parameter_uuid_extra !== null"
          class="mx-2"
          variant="corp"
          :text="selectedHeight.rack_parameter_value ? selectedHeight.rack_parameter_value : 'Выберите'"
        >
          <template v-for="item in getRackTypeHeightItems">
            <b-dd-item v-if="item.uuid !== null" :key="item.uuid" @click="selectHeight(item.uuid)">{{
              item.rack_parameter_value
            }}</b-dd-item>
          </template>
        </b-dd>
      </div>
      <div class="d-flex flex-column">
        <p>Ширина:</p>
        <b-dd
          class="mx-2"
          variant="corp"
          :text="selectedWidth.rack_parameter_value ? selectedWidth.rack_parameter_value : 'Выберите'"
        >
          <template v-for="item in getRackTypeWidthItems">
            <b-dd-item v-if="item.uuid !== null" :key="item.uuid" @click="selectWidth(item.uuid)">{{
              item.rack_parameter_value
            }}</b-dd-item>
          </template>
        </b-dd>
      </div>
      <div v-if="selectedHeight.rack_parameter_value !== null" class="d-flex flex-column">
        <p>Глубина:</p>
        <b-dd
          class="mx-2"
          variant="corp"
          :text="selectedDepth.rack_parameter_value ? selectedDepth.rack_parameter_value : 'Выберите'"
        >
          <template v-for="item in getRackTypeDepthItems">
            <b-dd-item v-if="item.uuid !== null" :key="item.uuid" @click="selectDepth(item.uuid)">{{
              item.rack_parameter_value
            }}</b-dd-item>
          </template>
        </b-dd>
      </div>
      <div v-if="getRackTypeDeckItems.length !== 0" class="d-flex flex-column">
        <p>Настил:</p>
        <b-dd
          class="mx-2"
          variant="corp"
          :text="selectedDeck.rack_parameter_value ? selectedDeck.rack_parameter_value : 'Выберите'"
        >
          <template v-for="item in getRackTypeDeckItems">
            <b-dd-item v-if="item.uuid !== null" :key="item.uuid" @click="selectDeck(item.uuid)">{{
              item.rack_parameter_value
            }}</b-dd-item>
          </template>
        </b-dd>
      </div>
      <div class="d-flex flex-column">
        <p>Цена:</p>
        <b-input v-model="form.rack_price_parameter"></b-input>
      </div>
    </div>
    <template #modal-footer>
      <b-btn variant="corp" @click="addParameterPrice()">Добавить</b-btn>
      <b-btn variant="danger" @click="closeModal()">Отменить</b-btn>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ManagerPriceAdd',
  data() {
    return {
      form: {
        rack_type_uuid: null,
        rack_type_parameter_uuid: null,
        rack_type_parameter_uuid_extra: null,
        rack_price_parameter: '',
      },
    }
  },
  computed: {
    getRackTypeItems() {
      return this.$store.getters['type/getTypes']
    },
    getRackTypeParameterItems() {
      return this.$store.getters['parameter/getRackTypeParameter'].filter((item) => {
        return item.rack_type_uuid === this.form.rack_type_uuid
      })
    },
    getRackTypeWidthItems() {
      return this.getRackTypeParameterItems.filter((item) => {
        return item.rack_parameter_title === 'Ширина'
      })
    },
    getRackTypeHeightItems() {
      return this.getRackTypeParameterItems.filter((item) => {
        return item.rack_parameter_title === 'Высота'
      })
    },
    getRackTypeDepthItems() {
      return this.getRackTypeParameterItems.filter((item) => {
        return item.rack_parameter_title === 'Глубина'
      })
    },
    getRackTypeDeckItems() {
      return this.getRackTypeParameterItems.filter((item) => {
        return item.rack_parameter_title === 'Настил'
      })
    },
    selectedRack() {
      if (this.getRackTypeItems.find((item) => item.uuid === this.form.rack_type_uuid)) {
        return this.getRackTypeItems.find((item) => item.uuid === this.form.rack_type_uuid)
      }
      return {}
    },
    selectedHeight() {
      if (this.getRackTypeHeightItems.find((item) => item.uuid === this.form.rack_type_parameter_uuid)) {
        return this.getRackTypeHeightItems.find((item) => item.uuid === this.form.rack_type_parameter_uuid)
      }
      return {}
    },
    selectedWidth() {
      if (this.getRackTypeWidthItems.find((item) => item.uuid === this.form.rack_type_parameter_uuid)) {
        return this.getRackTypeWidthItems.find((item) => item.uuid === this.form.rack_type_parameter_uuid)
      }
      return {}
    },
    selectedDepth() {
      if (this.getRackTypeDepthItems.find((item) => item.uuid === this.form.rack_type_parameter_uuid_extra)) {
        return this.getRackTypeDepthItems.find((item) => item.uuid === this.form.rack_type_parameter_uuid_extra)
      }
      return {}
    },
    selectedDeck() {
      if (this.getRackTypeDeckItems.find((item) => item.uuid === this.form.rack_type_parameter_uuid)) {
        return this.getRackTypeDeckItems.find((item) => item.uuid === this.form.rack_type_parameter_uuid)
      }
      return {}
    },
  },
  mounted() {
    this.$bvModal.show('manager-price-parameter-add')
    this.fetchRackParameters()
    this.fetchRackTypes()
  },
  methods: {
    addParameterPrice() {
      this.$store
        .dispatch('price/postParameterPrice', {
          ...this.form,
        })
        .then(() => {
          this.form.rack_price_parameter = ''
          this.form.rack_type_parameter_uuid_extra = null
          this.form.rack_type_parameter_uuid = null
          this.form.rack_type_uuid = null
          this.$store.dispatch('price/fetchParameterPrice')
          this.closeModal()
        })
    },
    selectHeight(heightUuid) {
      this.form.rack_type_parameter_uuid = heightUuid
    },
    selectWidth(widthUuid) {
      this.form.rack_type_parameter_uuid = widthUuid
    },
    selectDeck(deckUuid) {
      this.form.rack_type_parameter_uuid = deckUuid
    },
    selectDepth(depthUuid) {
      this.form.rack_type_parameter_uuid_extra = depthUuid
    },
    selectRack(rackUuid) {
      this.form.rack_type_uuid = rackUuid
    },
    closeModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerRackPriceParameterAdd',
        modalStatus: false,
      })
    },
    fetchRackTypes() {
      this.$store.dispatch('type/fetchTypes')
    },
    fetchRackParameters() {
      this.$store.dispatch('parameter/fetchRackTypeParameter')
    },
  },
}
</script>
