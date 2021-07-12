<template>
  <div class="h-100 w-100 overflow-auto jus">
    <div class="d-flex flex-row justify-content-around">
      <!--      <pre class=" overflow-auto" style="max-height: 800px"> {{ getRackParamsGroup }}</pre>-->
      <div class="p-5">
        <div class="my-3">
          <h3 class="text-center">{{ 'Стеллаж' + ' ' + getTypeByUuid.title }}</h3>
        </div>
        <div>
          <b-img :src="getTypeByUuid.image"></b-img>
        </div>
        <div>В наличии : <b style="color: green">Много</b></div>
      </div>
      <div class="p-5 h-100">
        <div class="my-3">
          <h3 class="text-center">Описание:</h3>
          <h5>{{ getTypeByUuid.description }}</h5>
        </div>
        <div class="my-3">
          <h4>Допустимые нагрузки на данный стеллаж:</h4>
          <h5>{{ 'Максимальная нагрузка на стеллаж:' + ' ' + getTypeByUuid.load }}</h5>
          <h5>{{ 'Максимальная нагрузка на секцию:' + ' ' + getTypeByUuid.section_load }}</h5>
          <h5>{{ 'Максимальная нагрузка на полку:' + ' ' + getTypeByUuid.shelf_load }}</h5>
        </div>
        <div>
          <!--          <pre>  {{ getRackComponent(getTypeByUuid.rack_components) }}</pre>-->
        </div>
      </div>

      <div class="p-5 mt-4">
        <h4 class="text-center text-truncate">Задайте параметры стеллажа</h4>

        <div v-for="(itemParameters, indexGroup) in getRackParamsGroup" :key="itemParameters.parameter_uuid">
          <div class="d-flex flex-row">
            <div class="d-flex flex-fill m-3 mr-3 p-2">
              <label class="h5"> {{ getLabel(itemParameters) }}</label>
            </div>
            <div class="p-2">
              <b-dd
                block
                style="min-width: 224px"
                variant="corp"
                :text="
                  getGroupParamTitle(indexGroup).parameter_value
                    ? getGroupParamTitle(indexGroup).parameter_value
                    : 'Выберите'
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
        <div class="d-flex align-items-end flex-column">
          <label> Количество полок:</label>
          <b-spinbutton v-model="form.shelf_count" min="2" max="10" style="max-width: 200px"></b-spinbutton>
        </div>
        <div class="d-flex align-items-end flex-column">
          <label> Количество стеллажей:</label>
          <b-spinbutton v-model="form.rack_count" min="1" style="max-width: 200px"></b-spinbutton>
        </div>
        <div class="w-100 mt-5 d-flex flex-column">
          <div class="d-flex flex-row justify-content-around">
            <div>
              <h5 class="mr-"><b>Цена за стеллаж:</b></h5>
            </div>
            <div class="text-left">
              <h5>{{ getRackPrice }} руб.</h5>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-around">
            <div>
              <h5 class="mr-"><b>Итоговая сумма :</b></h5>
            </div>
            <div class="text-left">
              <h5>{{ getFinalResult }} руб.</h5>
            </div>
          </div>
          <div>
            <b-btn variant="corp" @click="addProduct">Добавить в заказ</b-btn>
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
      selectedGroupParams: [],
      form: {
        shelf_count: 2,
        rack_count: 1,
      },
    }
  },
  computed: {
    getFinalResult() {
      const result = this.priceManager(this.getTypeByUuid.rack_components) * this.form.rack_count
      return result
    },
    getRackPrice() {
      const result = this.priceManager(this.getTypeByUuid.rack_components)
      return result
    },
    getRackParamsGroup() {
      const group = _.uniqBy(this.getRackComponentParams, item => {
        return item.parameter_value + item.parameter_uuid
      })
      return _.groupBy(group, 'parameter_uuid')
    },
    getRackComponentParams() {
      return this.getRackParams(this.getTypeByUuid.rack_components)
    },
    getRackComponents() {
      return this.getRackParams(this.getTypeByUuid.rack_components)
    },
    getBlackList() {
      return _.uniq(_.map(this.getRackComponentParams, 'parameter_uuid'))
    },
    getTypeByUuid() {
      return this.$store.getters['type/getTypeById'](this.typeUuid) || {}
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
        const index = this.selectedGroupParams.findIndex(item => {
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
  created() {
    this.$store.dispatch('type/fetchTypes').then(() => {
      this.form.title = this.getTypeByUuid.title
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
        total: this.getFinalResult,
        uuid: this.getUuid(),
      })
    },

    selectParameter(indexGroup, itemParameter) {
      this.getSelectedGroupParams = { key: indexGroup, value: itemParameter }
    },
    getGroupParamTitle(indexGroup) {
      return (
        this.getSelectedGroupParams.find(item => {
          return item.parameter_uuid === indexGroup
        }) || {}
      )
    },
    getLabel(parameters) {
      return _.head(parameters).parameter_title
    },
    getRackComponent(components) {
      return _.reduce(
        components,
        (component, item) => {
          item.rack_component_childs.forEach(itemComponent => {
            component.push({
              uuid: itemComponent.uuid,
              title: itemComponent.rack_component_value,
            })
          })
          return component
        },
        [],
      )
    },
    getRackParams(components) {
      return _.reduce(
        components,
        (params, item) => {
          item.rack_component_parameters.forEach(itemParam => {
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
                  sumComponent = sumComponent * this.form.rack_count + 1
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

            // return (
            //   sum +
            //   (item.is_constructor === true
            //     ? this.priceManager(item.rack_component_childs, true)
            //     : this.priceWorker(item))
            // )

            return sum
          },
          0,
        ),
      )
    },
    priceWorker(component) {
      // const groupUuid = '5252a4ed-979c-4206-8fcf-7dae42627fe1'
      if (
        component.rack_component_parameters.length !==
        this.getWhiteParameters(component.rack_component_parameters).length
      ) {
        return 0
      }

      // const paramFilter = _.filter(component.rack_component_parameters, item => item.parameter.group_uuid === groupUuid)
      // if (paramFilter.length > 1) {
      //   if (paramFilter.length !== this.getWhiteParameters(paramFilter).length) {
      //     return 0
      //   }
      // }

      const parameterPrice = _.find(this.getWhiteParameters(component.rack_component_parameters), item => {
        return item.parameter.slug === 'price'
      })
      if (parameterPrice) {
        return parseInt(parameterPrice.parameter_value) * parameterPrice.count
      } else {
        return 0
      }

      // const isGroupSumm = true
      // return _.sumBy(this.getWhiteParameters(component.rack_component_parameters), item => {
      //   // if (item.parameter.group_uuid === groupUuid) {
      //   //   if (isGroupSumm) {
      //   //     isGroupSumm = false
      //   //     return item.price * item.count
      //   //   }
      //   // } else {
      //   if (item.parameter.slug === 'price') {
      //     return parseInt(item.parameter_value) * item.count
      //   } else {
      //     return 0
      //   }
      //   // }
      // })
    },
    getWhiteParameters(parameters) {
      return _.filter(parameters, item => {
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
  },
}
</script>
