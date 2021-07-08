<template>
  <div class="h-100 w-100 overflow-auto jus">
    <div class="d-flex flex-row justify-content-between">
      <pre class=" overflow-auto" style="max-height: 800px"> {{ getRackParamsGroup }}</pre>
      <div>
        <div v-for="(itemParameters, indexGroup) in getRackParamsGroup" :key="itemParameters.parameter_uuid">
          <label> {{ getLabel(itemParameters) }}</label>
          <b-dd
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
        priceManager:{{ priceManager(getTypeByUuid.rack_components) }}
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
    }
  },
  computed: {
    getRackParamsGroup() {
      const group = _.uniqBy(this.getRackComponentParams, item => {
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
        // console.warn('selectedGroupParams', selectedGroupParams)
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
      // console.warn('getTypeByUuid', this.getTypeByUuid.rack_components)
    })
  },
  methods: {
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

    getRackParams(components) {
      return _.reduce(
        components,
        (params, item) => {
          item.rack_component_parameters.forEach(itemParam => {
            params.push({
              parameter_uuid: itemParam.parameter_uuid,
              parameter_value: itemParam.parameter_value,
              parameter_title: itemParam.parameter.title,
              uuid: itemParam.uuid,
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
              sum +
              (item.is_constructor === true ? this.priceManager(item.rack_component_childs) : this.priceWorker(item))
            )
          },
          0,
        ),
      )
    },
    priceWorker(component) {
      const groupUuid = '5252a4ed-979c-4206-8fcf-7dae42627fe1'
      if (
        component.rack_component_parameters.length !==
        this.getWhiteParameters(component.rack_component_parameters).length
      ) {
        return 0
      }

      const paramFilter = _.filter(component.rack_component_parameters, item => item.parameter.group_uuid === groupUuid)
      if (paramFilter.length > 1) {
        if (paramFilter.length !== this.getWhiteParameters(paramFilter).length) {
          return 0
        }
      }
      let isGroupSumm = true
      return _.sumBy(this.getWhiteParameters(component.rack_component_parameters), item => {
        if (item.parameter.group_uuid === groupUuid) {
          if (isGroupSumm) {
            isGroupSumm = false
            return item.price * item.count
          }
        } else {
          return item.price * item.count
        }
      })
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
