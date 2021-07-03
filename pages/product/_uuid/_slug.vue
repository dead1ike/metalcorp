<template>
  <div class="h-100 w-100 overflow-auto jus">
    <div class="d-flex flex-row justify-content-between">
      <div class="d-flex flex-column m-3 w-100">
        <h3>{{ form.title ? form.title : '' }}</h3>
        <div class="mt-3">
          <img :src="form.image" style="width: 30%" />
        </div>
        <div class="mt-2">
          <div class="d-flex flex-row text-left">
            <div class="mt-2">
              <div class="w-100 text-truncate" v-if="getTypeByUuid.shelf_load">
                <label>Нагрузка на полку: </label>
                <span class="ml-2">
                  <b> {{ getTypeByUuid.shelf_load }}кг </b>
                </span>
              </div>
              <div class="w-100 text-truncate" v-if="getTypeByUuid.section_load">
                <label>Нагрузка на секцию: </label>
                <span class="ml-2">
                  <b> {{ getTypeByUuid.section_load }}кг </b>
                </span>
              </div>
              <div class="w-100 text-truncate" v-if="getTypeByUuid.load">
                <label>Нагрузка на стеллаж: </label>
                <span class="ml-2">
                  <b> {{ getTypeByUuid.load }}кг </b>
                </span>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div class="d-flex flex-fill flex-row-reverse w-50">
        <div class="d-flex flex-column">
          <h4>Описание:</h4>
          <span>{{ form.description }}</span>
        </div>
      </div>
      <div class="d-flex flex-row-reverse p-3">
        <div class="d-flex flex-column">
          <div>
            <div>
              <label class="text-right">Высота:</label>
            </div>
            <div>
              <b-dd
                block
                no-caret
                variant="corp"
                :text="
                  selectedRackHeight.rack_parameter_value ? selectedRackHeight.rack_parameter_value + ' мм' : 'Выберите'
                "
              >
                <template v-for="item in getRackHeight">
                  <b-dd-item :key="item.uuid" @click="selectHeight(item)">
                    {{ item.rack_parameter_value }} мм
                  </b-dd-item>
                </template>
              </b-dd>
            </div>
          </div>
          <div>
            <label>Ширина:</label>
            <b-dd
              block
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
          <div>
            <label>Глубина:</label>
            <b-dd
              block
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
          <div>
            <label>Кол-во полок:</label>
            <b-dd
              block
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
          <div v-if="getRackDeck.length !== 0">
            <label>Настил:</label>
            <b-dd
              block
              no-caret
              variant="corp"
              :text="selectedRackDeck.rack_parameter_value ? selectedRackDeck.rack_parameter_value : 'Выберите'"
            >
              <template v-for="item in getRackDeck">
                <b-dd-item :key="item.uuid" @click="selectDeck(item)"> {{ item.rack_parameter_value }} </b-dd-item>
              </template>
            </b-dd>
          </div>
          <div class="m-3 d-flex align-self-end flex-column">
            <label>Кол-во стеллажей:</label>
            <b-spinbutton v-model="form.rack_count" inline min="1" step="1" inputmode="true"></b-spinbutton>
          </div>
          <div class="m-3 d-flex align-self-end">
            <b-btn block variant="corp" @click="addProduct()">Добавить в заказ</b-btn>
          </div>
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
        rack_deck: {},
        rack_count: 1,
        title: '',
        image: '',
        description: '',
      },
    }
  },

  computed: {
    getRackHeight() {
      if (this.getTypeByUuid.rack_type_parameters) {
        return this.getTypeByUuid.rack_type_parameters.filter((item) => {
          return item.rack_parameter_uuid === 'b2b2928e-5f7b-45f3-8797-5cd03ca378c1'
        })
      }
      return []
    },
    getRackWidth() {
      if (this.getTypeByUuid.rack_type_parameters) {
        return this.getTypeByUuid.rack_type_parameters.filter((item) => {
          return item.rack_parameter_uuid === 'bc335e6a-768b-4f85-b652-52bc2d09aa64'
        })
      }
      return []
    },
    getRackDepth() {
      if (this.getTypeByUuid.rack_type_parameters) {
        return this.getTypeByUuid.rack_type_parameters.filter((item) => {
          return item.rack_parameter_uuid === 'f0c368ae-73bf-42c8-a9fe-4e6b2c04d0a4'
        })
      }
      return []
    },
    getRackDeck() {
      if (this.getTypeByUuid.rack_type_parameters) {
        return this.getTypeByUuid.rack_type_parameters.filter((item) => {
          return item.rack_parameter_uuid === '56c3377e-b4b9-4fe4-a716-10a3278e7f3d'
        })
      }
      return []
    },
    getRackShelves() {
      if (this.getTypeByUuid.rack_type_parameters) {
        return this.getTypeByUuid.rack_type_parameters.filter((item) => {
          return item.rack_parameter_uuid === 'ba4a2bf9-d1b0-4171-9cf8-aaff2eb78219'
        })
      }
      return []
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
    selectedRackDeck() {
      if (this.getRackDeck.find((rack) => rack.uuid === this.form.rack_deck.uuid)) {
        return this.getRackDeck.find((rack) => rack.uuid === this.form.rack_deck.uuid)
      }
      return {}
    },
    getTypeByUuid() {
      return this.$store.getters['type/getTypeById'](this.typeUuid) || {}
    },
  },
  mounted() {
    this.$store.dispatch('type/fetchTypes').then(() => {
      this.form.title = this.getTypeByUuid.title
      this.form.description = this.getTypeByUuid.description
      this.form.image = this.getTypeByUuid.image
    })
    console.warn('currentRack', this.getTypeByUuid)
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
    selectDeck(item) {
      this.form.rack_deck = item
    },
    getUuid() {
      return this.$store.getters.getNewUuid(new Date())
    },

    addProduct() {
      this.$store.commit('type/setAddBasketProduct', {
        title: this.form.title,
        rack_height: this.form.rack_height,
        rack_width: this.form.rack_width,
        rack_depth: this.form.rack_depth,
        rack_shelves_count: this.form.rack_shelves_count,
        rack_count: this.form.rack_count,
        rack_deck: this.form.rack_deck,
        uuid: this.getUuid(),
      })
    },
    clearBasket() {
      this.$store.commit('type/setDelBasketProducts')
    },
  },
}
</script>
