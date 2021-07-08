<template>
  <div>
    <div>priceManager: {{ priceManager(item.components) }}</div>
    <pre>getRackParamsGroup: {{ getRackParamsGroup() }}</pre>
    <div v-for="(itemParameters, indexGroup) in getRackParamsGroup()" :key="itemParameters.title">
      <label> {{ indexGroup }}</label>
      <b-dd :text="getGroupParamTitle(indexGroup).value ? getGroupParamTitle(indexGroup).value : 'Выберите'">
        <template v-for="itemParameter in itemParameters">
          <b-dd-item :key="itemParameter.value" @click="selectParameter(indexGroup, itemParameter)">
            {{ itemParameter.value }}
          </b-dd-item>
        </template>
      </b-dd>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      selectedParams: {
        shirina: '1000',
        visota: '1000',
        glubina: '300',
        polki: '4',
      },
      selectedGroupParams: [],
      item: {
        label: 'rack',
        components: [
          {
            title: 'stoika',
            is_constructor: false,
            count: 4,
            params: [
              {
                title: 'visota',
                value: '1000',
                price: '500',
              },
              {
                title: 'visota',
                value: '1800',
                price: '800',
              },
              {
                title: 'glubina',
                value: '600',
                price: '400',
              },
              {
                title: 'glubina',
                value: '600',
                price: '400',
              },
              {
                title: 'glubina',
                value: '3000',
                price: '600',
              },
              {
                title: 'shirina',
                value: '3000',
                price: '600',
              },
            ],
          },
          {
            title: 'polka',
            is_constructor: true,
            params: [],
            component_childs: [
              {
                title: 'balkaG',
                count: 2,
                params: [
                  {
                    title: 'glubina',
                    value: '300',
                    price: '200',
                  },
                  {
                    title: 'glubina',
                    value: '600',
                    price: '400',
                  },
                ],
              },
              {
                title: 'balkaW',
                count: 2,
                params: [
                  {
                    title: 'shirina',
                    value: '1000',
                    price: '400',
                  },
                  {
                    title: 'shirina',
                    value: '3000',
                    price: '600',
                  },
                ],
              },
            ],
          },
        ],
      },
    }
  },
  computed: {
    getSelectedGroupParams: {
      // геттер:
      get() {
        console.warn('this.selectedGroupParams', this.selectedGroupParams)
        return this.selectedGroupParams
      },
      // сеттер:
      set(payload) {
        // const selectedGroupParams = Object.assign({}, this.selectedGroupParams)
        // selectedGroupParams[payload.key] = payload.value
        // console.warn('selectedGroupParams', selectedGroupParams)
        // Object.assign(this.selectedGroupParams, selectedGroupParams)
        const index = this.selectedGroupParams.findIndex(item => {
          return item.title === payload.value.title
        })
        if (index >= 0) {
          this.selectedGroupParams.splice(index, 1, payload.value)
        } else {
          this.selectedGroupParams.push(payload.value)
        }
      },
    },
  },
  methods: {
    selectParameter(indexGroup, itemParameter) {
      this.getSelectedGroupParams = { key: indexGroup, value: itemParameter }
      console.warn(this.getSelectedGroupParams)
    },
    getGroupParamTitle(indexGroup) {
      return (
        this.getSelectedGroupParams.find(item => {
          return item.title === indexGroup
        }) || {}
      )
    },
    getLabel(parameters) {
      return _.head(parameters).title
    },
    getRackParamsGroup() {
      const group = _.uniqBy(this.getRackParams(this.item.components), item => {
        return item.value + item.title
      })
      return _.groupBy(group, 'title')
    },
    getRackParams(components) {
      return _.reduce(
        components,
        (params, item) => {
          item.params.forEach(itemParam => {
            params.push({
              title: itemParam.title,
              value: itemParam.value,
            })
          })
          if (item.is_constructor === true) {
            params = _.concat(params, this.getRackParams(item.component_childs))
          }
          return params
        },
        [],
      )
    },
    priceManager(components) {
      return parseInt(
        _.reduce(
          components,
          (sum, item) => {
            return (
              sum + (item.is_constructor === true ? this.priceManager(item.component_childs) : this.priceWorker(item))
            )
          },
          0,
        ),
      )
    },
    priceWorker(component) {
      const param = _.head(component.params)
      return parseInt(param.price) * parseInt(component.count)
    },
  },
}
</script>
