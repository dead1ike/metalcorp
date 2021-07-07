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
              <div v-if="getTypeByUuid.shelf_load" class="w-100 text-truncate">
                <label>Нагрузка на полку: </label>
                <span class="ml-2">
                  <b> {{ getTypeByUuid.shelf_load }}кг </b>
                </span>
              </div>
              <div v-if="getTypeByUuid.section_load" class="w-100 text-truncate">
                <label>Нагрузка на секцию: </label>
                <span class="ml-2">
                  <b> {{ getTypeByUuid.section_load }}кг </b>
                </span>
              </div>
              <div v-if="getTypeByUuid.load" class="w-100 text-truncate">
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

          {{ rackPrice }}<br />
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
                :text="selectedRackHeight.parameter_value ? selectedRackHeight.parameter_value + ' мм' : 'Выберите'"
              >
                <template v-for="item in getRackHeight">
                  <b-dd-item :key="item.uuid" @click="selectHeight(item)"> {{ item.parameter_value }} мм </b-dd-item>
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
              :text="selectedRackWidth.parameter_value ? selectedRackWidth.parameter_value + ' мм' : 'Выберите'"
            >
              <template v-for="item in getWidth">
                <b-dd-item :key="item.uuid" @click="selectWidth(item)"> {{ item.parameter_value }} мм </b-dd-item>
              </template>
            </b-dd>
          </div>
          <div>
            <label>Глубина:</label>
            <b-dd
              block
              no-caret
              variant="corp"
              :text="selectedRackDepth.parameter_value ? selectedRackDepth.parameter_value + ' мм' : 'Выберите'"
            >
              <template v-for="item in getRackDepth">
                <b-dd-item :key="item.uuid" @click="selectDepth(item)"> {{ item.parameter_value }} мм </b-dd-item>
              </template>
            </b-dd>
          </div>
          <div>
            <label>Кол-во полок:</label>
            <b-dd
              block
              no-caret
              variant="corp"
              :text="selectedRackShelves.parameter_value ? selectedRackShelves.parameter_value + ' шт' : 'Выберите'"
            >
              <template v-for="item in getRackShelves">
                <b-dd-item :key="item.uuid" @click="selectShelves(item)"> {{ item.parameter_value }} шт </b-dd-item>
              </template>
            </b-dd>
          </div>
          <div v-if="getRackDeck.length !== 0">
            <label>Настил:</label>
            <b-dd
              block
              no-caret
              variant="corp"
              :text="selectedRackDeck.parameter_value ? selectedRackDeck.parameter_value : 'Выберите'"
            >
              <template v-for="item in getRackDeck">
                <b-dd-item :key="item.uuid" @click="selectDeck(item)"> {{ item.parameter_value }} </b-dd-item>
              </template>
            </b-dd>
          </div>
          <div class="m-3 d-flex align-self-end flex-column">
            <label>Кол-во стеллажей:</label>
            <b-spinbutton v-model="form.rack_count" inline min="1" step="1" inputmode="true"></b-spinbutton>
          </div>
          <div>
            <p>Цена: {{ rackPrice + ' ' }}руб</p>
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
    rackPrice() {
      if (this.form.rack_height.price && this.form.rack_shelves_count && this.form.rack_width.price) {
        const width = Number(this.form.rack_width.price)
        const depth = Number(this.form.rack_depth.price)
        const shelf = Number(this.form.rack_shelves_count.parameter_value)
        const height = Number(this.form.rack_height.price)
        const count = Number(this.form.rack_count)
        const deck = Number(this.form.rack_deck.price)
        if (deck) {
          return ((depth * 2 + width * 2 + deck) * shelf + height * 4) * count
        } else if (depth === width) {
          return (depth * shelf + height * 4) * count
        }
        return ((depth * 2 + width * 2) * shelf + height * 4) * count
      }
      return 0
    },
    getHeight() {
      return _.intersection(this.getRackHeight)
    },
    getWidth() {
      // return _.uniqBy(this.getRackWidth, this.getRackWidth.parameter_value)
      return _.uniqBy(this.getRackWidth, this.getRackWidth.parameter_value)
    },
    getRackHeight() {
      if (this.getRackComponentByUuid) {
        return this.getRackComponentByUuid.filter((item) => {
          return item.parameter.title === 'Высота'
        })
      }
      return []
    },
    getRackWidth() {
      if (this.getRackComponentByUuid) {
        return this.getRackComponentByUuid.filter((item) => {
          return item.parameter.title === 'Ширина'
        })
      }
      return []
    },
    getRackDepth() {
      if (this.getRackComponentByUuid) {
        return this.getRackComponentByUuid.filter((item) => {
          return item.parameter.title === 'Глубина'
        })
      }
      return []
    },
    getRackDeck() {
      if (this.getRackComponentByUuid) {
        return this.getRackComponentByUuid.filter((item) => {
          return item.parameter.title === 'Настил'
        })
      }
      return []
    },
    getRackShelves() {
      if (this.getRackComponentByUuid) {
        return this.getRackComponentByUuid.filter((item) => {
          return item.parameter.title === 'Количество полок'
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

    getRackParameterPrice() {
      return this.$store.getters['price/getParameterPrice']
    },
    getTypeByUuid() {
      return this.$store.getters['type/getTypeById'](this.typeUuid) || {}
    },
    getRackComponentByUuid() {
      return this.$store.getters['manager/rack/price/getComponentPriceByUuid'](this.typeUuid) || {}
    },
  },
  mounted() {
    this.$store.dispatch('manager/rack/price/fetchComponentPrice')
    this.$store.dispatch('type/fetchTypes').then(() => {
      this.form.title = this.getTypeByUuid.title
      this.form.description = this.getTypeByUuid.description
      this.form.image = this.getTypeByUuid.image
    })
  },

  methods: {
    selectHeight(item) {
      this.form.rack_height = item
      console.warn('height', item)
      console.warn('selectedHeightPrice', this.selectedRackHeightPrice)
    },
    selectWidth(item) {
      this.form.rack_width = item
      console.warn('width', item.price)
      console.warn('selectedWidthPrice', this.selectedRackWidthPrice)
    },
    selectDepth(item) {
      this.form.rack_depth = item
      console.warn('depth', item)
      console.warn('selectedRackDepthPrice', this.selectedRackDepthPrice)
    },
    selectShelves(item) {
      this.form.rack_shelves_count = item
      console.warn('shelves', item.price)
      console.warn('selectedRackShelves', this.form.rack_shelves_count.rack_parameter_value)
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
        price: this.rackPrice,
        summ: Number(this.rackPrice) * Number(this.form.rack_count),
        uuid: this.getUuid(),
      })
    },
    clearBasket() {
      this.$store.commit('type/setDelBasketProducts')
    },
  },
}
</script>
