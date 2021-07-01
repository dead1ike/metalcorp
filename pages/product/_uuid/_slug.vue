<template>
  <div class="h-100 w-100 overflow-auto">
    <div class="d-flex flex-row">
      <div class="d-flex flex-column m-3">
        <h3>{{ getTypeByUuid.title ? getTypeByUuid.title : '' }}</h3>
        <div class="mt-3">
          <img :src="getTypeByUuid.image" style="width: 60%" />
        </div>
        <div class="mt-2">
          <h4>Описание:</h4>
          <span>{{ getTypeByUuid.description }}</span>
        </div>
      </div>
      <div class="mt-2">
        <div class="w-100 text-truncate" v-if="getTypeByUuid.shelf_load">
          <label>Нагрузка на полку: </label>
          <span class="ml-2"
            ><b> {{ getTypeByUuid.shelf_load }}кг </b></span
          >
        </div>
        <div class="w-100 text-truncate" v-if="getTypeByUuid.section_load">
          <label>Нагрузка на секцию: </label>
          <span class="ml-2"
            ><b> {{ getTypeByUuid.section_load }}кг </b></span
          >
        </div>
        <div class="w-100 text-truncate" v-if="getTypeByUuid.rack_load">
          <label>Нагрузка на стеллаж: </label>
          <span class="ml-2"
            ><b> {{ getTypeByUuid.rack_load }}кг </b></span
          >
        </div>
      </div>
      <div class="d-flex w-100 flex-column">
        <div class="d-flex flex-row align-self-end">
          <div class="d-flex flex-column m-3">
            <label>Высота:</label>
            <b-dd
              no-caret
              variant="corp"
              :text="
                selectedRackHeight.rack_parameter_value ? selectedRackHeight.rack_parameter_value + ' мм' : 'Выберите'
              "
            >
              <template v-for="item in getRackHeight">
                <b-dd-item :key="item.uuid" @click="selectHeight(item)"> {{ item.rack_parameter_value }} мм </b-dd-item>
              </template>
            </b-dd>
          </div>
          <div class="d-flex flex-column m-3">
            <label>Ширина:</label>
            <b-dd
              no-caret
              variant="corp"
              :text="
                selectedRackWidth.rack_parameter_value ? selectedRackWidth.rack_parameter_value + ' мм' : 'Выберите'
              "
            >
              <template v-for="item in getRackWidth">
                <b-dd-item :key="item.uuid" @click="selectWidth(item)"> {{ item.rack_parameter_value }} мм </b-dd-item>
              </template>
            </b-dd>
          </div>
        </div>
        <div class="d-flex flex-row align-self-end">
          <div class="d-flex flex-column m-3">
            <label>Глубина:</label>
            <b-dd
              no-caret
              variant="corp"
              :text="
                selectedRackDepth.rack_parameter_value ? selectedRackDepth.rack_parameter_value + ' мм' : 'Выберите'
              "
            >
              <template v-for="item in getRackDepth">
                <b-dd-item :key="item.uuid" @click="selectDepth(item)"> {{ item.rack_parameter_value }} мм </b-dd-item>
              </template>
            </b-dd>
          </div>
          <div class="d-flex flex-column m-3">
            <label>Кол-во полок:</label>
            <b-dd
              no-caret
              variant="corp"
              :text="
                selectedRackShelves.rack_parameter_value ? selectedRackShelves.rack_parameter_value + ' шт' : 'Выберите'
              "
            >
              <template v-for="item in getRackShelves">
                <b-dd-item :key="item.uuid" @click="selectShelves(item)">
                  {{ item.rack_parameter_value }} шт
                </b-dd-item>
              </template>
            </b-dd>
          </div>
        </div>
        <div class="m-3 d-flex align-self-end flex-column">
          <label>Кол-во стеллажей:</label>
          <b-spinbutton inline v-model="form.rack_count" min="1" step="1" inputmode="true"></b-spinbutton>
        </div>
        <div class="m-3 d-flex align-self-end">
          <b-btn block variant="corp" @click="addProduct()">Добавить в заказ</b-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    console.warn('typeParams', params)
    const typeSlug = params.slug
    const typeUuid = params.uuid
    return { typeSlug, typeUuid }
  },
  data() {
    return {
      form: {
        rack_height: {},
        rack_width: {},
        rack_depth: {},
        rack_shelves_count: {},
        rack_count: 1,
      },
    }
  },
  mounted() {
    console.warn('currentRack', this.getTypeByUuid)
  },
  computed: {
    getRackHeight() {
      if (this.getTypeByUuid.rack_type_parameters) {
        return this.getTypeByUuid.rack_type_parameters.filter((item) => {
          return item.rack_parameter_uuid === 'ad5c39ff-23d0-4bf3-be2c-cb7eb2474516'
        })
      }
      return {}
    },
    getRackWidth() {
      return this.getTypeByUuid.rack_type_parameters.filter((item) => {
        return item.rack_parameter_uuid === '11e9ebff-cf3e-438e-88bc-3da542169cf6'
      })
    },
    getRackDepth() {
      return this.getTypeByUuid.rack_type_parameters.filter((item) => {
        return item.rack_parameter_uuid === '2cc05daf-d674-45a2-96e6-39ba73605e00'
      })
    },
    getRackShelves() {
      return this.getTypeByUuid.rack_type_parameters.filter((item) => {
        return item.rack_parameter_uuid === '64edbba5-8480-447b-8989-c83846ece32e'
      })
    },
    selectedRackHeight() {
      if (this.getRackHeight.find((rack) => rack.uuid === this.form.rack_height.uuid)) {
        return this.getRackHeight.find((rack) => rack.uuid === this.form.rack_height.uuid)
      }
      return {}
    },
    selectedRackWidth() {
      if (this.getRackWidth.find((rack) => rack.uuid === this.form.rack_width.uuid)) {
        return this.getRackWidth.find((rack) => rack.uuid === this.form.rack_width.uuid)
      }
      return {}
    },
    selectedRackDepth() {
      if (this.getRackDepth.find((rack) => rack.uuid === this.form.rack_depth.uuid)) {
        return this.getRackDepth.find((rack) => rack.uuid === this.form.rack_depth.uuid)
      }
      return {}
    },
    selectedRackShelves() {
      if (this.getRackShelves.find((rack) => rack.uuid === this.form.rack_shelves_count.uuid)) {
        return this.getRackShelves.find((rack) => rack.uuid === this.form.rack_shelves_count.uuid)
      }
      return {}
    },
    getTypeByUuid() {
      return this.$store.getters['type/getTypeById'](this.typeUuid)
    },
  },
  created() {
    this.$store.dispatch('type/fetchTypes')
  },

  methods: {
    selectHeight(item) {
      this.form.rack_height = item
    },
    selectWidth(item) {
      this.form.rack_width = item
    },
    selectDepth(item) {
      this.form.rack_depth = item
    },
    selectShelves(item) {
      this.form.rack_shelves_count = item
    },
    getUuid() {
      return this.$store.getters.getNewUuid(new Date())
    },

    addProduct() {
      this.$store.commit('type/setAddBasketProduct', {
        title: this.getTypeByUuid.title,
        rack_height: this.form.rack_height,
        rack_width: this.form.rack_width,
        rack_depth: this.form.rack_depth,
        rack_shelves_count: this.form.rack_shelves_count,
        rack_count: this.form.rack_count,
        uuid: this.getUuid(),
      })
    },
    clearBasket() {
      this.$store.commit('type/setDelBasketProducts')
    },
  },
}
</script>
