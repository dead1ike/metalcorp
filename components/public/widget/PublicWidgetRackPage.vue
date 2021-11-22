<template>
  <div class="d-flex flex-column">
    <div class="px-4 pt-5">
      <h2 class="font-weight-bold pt-10 pb-6 px-3">{{ 'Стеллаж' + ' ' + getTypeByUuid.title }}</h2>
    </div>
    <div class="d-flex flex-column flex-lg-row">
      <div class="d-flex flex-column align-items-start good_card_image p-9">
        <b-img :src="getTypeByUuid.image" style="max-width: 350px"></b-img>
      </div>
      <div class="d-flex flex-column w-100 h-100 p-5">
        <div class="flex-wrap">
          <h4 class="good_card_description_header">Описание:</h4>
          <h5 class="font-weight-light">{{ getTypeByUuid.description }}</h5>
        </div>
        <div class="pt-3 w-100">
          <h5 class="rackpage_load_header">Допустимые нагрузки на данный стеллаж:</h5>
          <h5 class="font-weight-light">{{ 'Максимальная нагрузка на стеллаж:' + ' ' + getTypeByUuid.load }}</h5>
          <h5 class="font-weight-light">
            {{ 'Максимальная нагрузка на секцию:' + ' ' + getTypeByUuid.section_load }}
          </h5>
          <h5 class="font-weight-light">{{ 'Максимальная нагрузка на полку:' + ' ' + getTypeByUuid.shelf_load }}</h5>
        </div>
      </div>
      <div class="d-flex flex-column w-100 py-4 pl-5">
        <div>
          <h4 class="rack_price">Задайте параметры стеллажа:</h4>
        </div>
        <div class="pt-4">
          <div v-for="(itemParameters, indexGroup) in getRackParamsGroup" :key="itemParameters.parameter_uuid">
            <div class="d-flex flex-row align-items-center justify-content-between">
              <div class="text-right pr-2 py-3">
                <h5>{{ getLabel(itemParameters) }}:</h5>
              </div>
              <div class="p-2 w-50">
                <b-dd
                  block
                  variant="dark"
                  no-caret
                  :text="
                    getGroupParamTitle(indexGroup).parameter_value
                      ? getGroupParamTitle(indexGroup).parameter_value
                      : 'Выбрать'
                  "
                >
                  <div v-for="itemParameter in itemParameters" :key="itemParameter.uuid">
                    <b-dd-item @click="selectParameter(indexGroup, itemParameter)">
                      {{ itemParameter.parameter_value }}
                    </b-dd-item>
                  </div>
                </b-dd>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-5">
          <div
            v-if="$route.params.slug !== 'mzprofil'"
            class="d-flex justify-content-between align-items-center flex-row m-2"
          >
            <h5 class="rack_parameter_title">Количество полок</h5>
            <b-spinbutton v-model="form.shelf_count" min="2" max="10" style="max-width: 200px"></b-spinbutton>
          </div>
          <div class="d-flex align-items-center justify-content-between flex-row m-2">
            <h5 v-if="$route.params.slug === 'sgr'" class="rack_parameter_title">Количество стеллажей</h5>
            <h5 v-else-if="$route.params.slug === 'sfm'" class="rack_parameter_title">Количество стеллажей</h5>
            <h5 v-else-if="$route.params.slug === 'sk'" class="rack_parameter_title">Количество стеллажей</h5>
            <h5 v-else-if="$route.params.slug === 'mspro'" class="rack_parameter_title">Количество стеллажей</h5>
            <h5 v-else class="rack_parameter_title">Количество стеллажей</h5>
            <b-spinbutton id="popover" v-model="form.rack_count" min="1" style="max-width: 200px"></b-spinbutton>
            <b-popover triggers="hover" placement="top" target="popover"
              >На 1 стеллаж идёт 2 рамы, <br />
              на 2 стеллажа 3 рамы и т.д.</b-popover
            >
          </div>
        </div>
        <div class="pt-5 d-flex flex-row">
          <h4 class="rack_price pr-3">Стоимость:</h4>
          <h4 class="font-weight-light">{{ getFinalResult ? getFinalResult : '0' }} руб.</h4>
        </div>
        <div class="pt-5">
          <b-btn class="d-inline-block py-4 px-8" variant="dark" @click="addProduct">Добавить в корзину</b-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicWidgetRackPage',

  data() {
    return {
      selectedGroupParams: [],
      form: {
        shelf_count: 2,
        rack_count: 1,
      },
    }
  },
  computed: {
    buttonState() {
      let isValid = true
      if (isNaN(this.getRackPrice)) isValid = false
      return isValid
    },
    getFinalResult() {
      const result = this.priceManager(this.getTypeByUuid.rack_components) * this.form.rack_count
      return parseInt(result * 1.3)
    },
    getRackPrice() {
      const result = this.priceManager(this.getTypeByUuid.rack_components)
      return parseInt(result * 1.3)
    },
    getRackParamsGroup() {
      const group = _.uniqBy(this.getRackComponentParams, (item) => {
        return item.parameter_value + item.parameter_uuid
      })
      return _.groupBy(group, 'parameter_uuid')
    },
    getRackComponentParams() {
      return this.getRackParams(this.getTypeByUuid.rack_components)
    },
    getBlackList() {
      return _.uniq(_.map(this.getRackComponentParams, 'parameter_uuid'))
    },
    getTypeByUuid() {
      return this.$store.getters['type/getRack'] || {}
    },
    getSelectedGroupParams: {
      // геттер:
      get() {
        return this.selectedGroupParams
      },
      // сеттер:
      set(payload) {
        // const selectedGroupParams = Object.assign({}, this.selectedGroupParams)
        // selectedGroupParams[payload.key] = payload.value
        // Object.assign(this.selectedGroupParams, selectedGroupParams)
        const index = this.selectedGroupParams.findIndex((item) => {
          return item.parameter_uuid === payload.value.parameter_uuid
        })
        if (index >= 0) {
          this.selectedGroupParams.splice(index, 1, payload.value)
        } else {
          this.selectedGroupParams.push(payload.value)
        }
      },
    },
  },
  mounted() {
    this.$store.dispatch('type/fetchType', this.$route.params.uuid).then(() => {
      return this.getTypeByUuid
    })
  },
  methods: {
    getUuid() {
      return this.$store.getters.getNewUuid(new Date())
    },
    addProduct() {
      this.$store.commit('type/setAddBasketProduct', {
        ...this.form,
        parameters: this.selectedGroupParams,
        title: this.getTypeByUuid.title,
        price: this.getRackPrice,
        image: this.getTypeByUuid.image,
        total: this.getFinalResult,
        uuid: this.getUuid(),
      })
      this.makeToast('Стеллаж добавлен в корзину', 'success')
    },

    selectParameter(indexGroup, itemParameter) {
      this.getSelectedGroupParams = { key: indexGroup, value: itemParameter }
    },
    getGroupParamTitle(indexGroup) {
      return (
        this.getSelectedGroupParams.find((item) => {
          return item.parameter_uuid === indexGroup
        }) || {}
      )
    },
    getLabel(parameters) {
      return _.head(parameters).parameter_title
    },
    getRackParams(components) {
      return _.reduce(
        components,
        (params, item) => {
          item.rack_component_parameters.forEach((itemParam) => {
            if (itemParam.parameter.slug !== 'price')
              params.push({
                parameter_uuid: itemParam.parameter_uuid,
                parameter_value: itemParam.parameter_value,
                parameter_title: itemParam.parameter.title,
                uuid: itemParam.uuid,
              })
          })
          if (item.is_constructor === true) {
            params = _.concat(params, this.getRackParams(item.rack_component_childs))
          }
          return params
        },
        [],
      )
    },
    priceManager(components, isChild = false) {
      return parseInt(
        _.reduce(
          components,
          (sum, item) => {
            if (sum === false) return
            let sumComponent = 0
            if (item.is_constructor === true) {
              sumComponent = this.priceManager(item.rack_component_childs, true)
              if (item.component) {
                if (item.component.slug === 'polka') {
                  sumComponent = sumComponent * this.form.shelf_count
                } else if (item.component.slug === 'rama') {
                  sumComponent = sumComponent * this.form.rack_count
                }
              }
              if (sumComponent === 0) {
                sum = false
              } else {
                sum = sum + sumComponent
              }
            } else {
              sumComponent = this.priceWorker(item)
              sum = sum + sumComponent
            }
            return sum
          },
          0,
        ),
      )
    },
    priceWorker(component) {
      if (
        component.rack_component_parameters.length !==
        this.getWhiteParameters(component.rack_component_parameters).length
      ) {
        return 0
      }

      const parameterPrice = _.find(this.getWhiteParameters(component.rack_component_parameters), (item) => {
        return item.parameter.slug === 'price'
      })
      if (parameterPrice) {
        return parseInt(parameterPrice.parameter_value) * parameterPrice.count
      } else {
        return 0
      }
    },
    getWhiteParameters(parameters) {
      return _.filter(parameters, (item) => {
        const isBlackList = _.includes(this.getBlackList, item.parameter_uuid)
        if (isBlackList) {
          return _.find(this.getSelectedGroupParams, {
            parameter_value: item.parameter_value,
            parameter_uuid: item.parameter_uuid,
          })
        }
        return true
      })
    },
    makeToast(body = 'Ничего не произошло', variant = 'success', title = 'Уведомление') {
      this.$bvToast.toast(body, {
        title,
        autoHideDelay: 2000,
        appendToast: false,
        solid: true,
        variant,
        toaster: 'b-toaster-bottom-right',
      })
    },
  },
}
</script>

<style scoped></style>
