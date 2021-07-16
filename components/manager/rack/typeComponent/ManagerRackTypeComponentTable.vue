<template>
  <div>
    <!--    <b-form-input-->
    <!--      v-model="filter.title"-->
    <!--      type="search"-->
    <!--      size="lg"-->
    <!--      placeholder="Введите наименование"-->
    <!--      class="ml-5"-->
    <!--    ></b-form-input>-->
    <b-table hover striped borderless :fields="getManagerComponentFields" :items="getManagerComponentItems">
      <template #cell(rack_title)="data">
        {{ data.item.rack.title }}
      </template>
      <template #cell(is_constructor)="data">
        {{ data.item.is_constructor === false ? 'Нет' : 'Да' }}
      </template>
      <template #cell(rack_component_value)="data">
        {{ data.item.rack_component_value }}
      </template>
      <template #cell(rack_component_parameters)="data">
        <b-btn class="corp" size="sm" @click="managerPriceAdd(data.item)">Добавить параметр</b-btn>
      </template>
      <template #cell(child)="data">
        <div v-if="data.item.rack_component_childs.length !== 0">
          <table>
            <tr v-for="item in data.item.rack_component_childs" :key="item.uuid">
              <td>{{ item.rack_component_value }}</td>
              <td>
                <div v-for="parameter in item.rack_component_parameters" :key="parameter.uuid" class="text-justify">
                  {{ parameter.count + 'x' + ' ' + parameter.parameter.title + ' ' + parameter.parameter_value }}
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div v-else>
          <p>Самостоятельный компонент</p>
        </div>
      </template>
      <!--      <template #cell(actions)="data">-->
      <!--        <b-dd v-b-popover.hover.topleft="'Удалить'" variant="link" no-caret size="sm">-->
      <!--          <template #button-content>-->
      <!--            <b-icon icon="x-circle" scale="1.6" variant="danger"></b-icon>-->
      <!--          </template>-->
      <!--          <h6 class="text-center">Вы уверены?</h6>-->
      <!--          <hr />-->
      <!--          <b-dd-item>-->
      <!--            <b-btn variant="danger" size="sm" block @click="deleteItem(data.item.uuid)">Да</b-btn>-->
      <!--          </b-dd-item>-->
      <!--          <b-dd-item>-->
      <!--            <b-btn variant="corp" size="sm" block>Нет</b-btn>-->
      <!--          </b-dd-item>-->
      <!--        </b-dd>-->
      <!--      </template>-->
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'ManagerRackTypeComponentTable',
  data() {
    return {
      // filter: {
      //   title: '',
      // },
    }
  },
  computed: {
    getManagerComponentFields() {
      return this.$store.getters['manager/rack/field/getManagerRackComponentFields']
    },
    getManagerComponentItems() {
      return this.$store.getters['manager/rack/component/getRackComponent']
    },
    getComponents() {
      return this.$store.getters['manager/rack/component/getComponent']
    },
    getComponentsPrice() {
      return this.getManagerComponentItems
    },
  },
  watch: {
    // 'filter.title'(newValue) {
    // this.setFilter('title', newValue)
    // this.fetchComponent()
    // },
  },
  mounted() {
    // this.fetchComponentD = _.debounce(this.fetchComponent, 1000)
    this.fetchComponent()
    // this.filter.title = this.$store.getters['manager/rack/component/getComponentParams']
  },

  methods: {
    // setFilter(filterName, filterData) {
    //   this.$store.commit('manager/rack/component/setFilterComponent', {
    //     filterName,
    //     filterData,
    //   })
    // },
    managerPriceAdd(item) {
      this.$store.commit('setActiveModal', {
        modalName: 'managerRackPriceParameterAdd',
        modalStatus: true,
      })
      this.$store.commit('manager/rack/component/setCurrentComponent', {
        ...item,
      })
    },
    deleteItem(uuid) {
      this.$store.dispatch('manager/rack/component/deleteRackComponent', uuid).then(() => {
        this.fetchComponent()
      })
    },
    fetchComponent() {
      this.$store.dispatch('manager/rack/component/fetchRackComponent').then(() => {
        console.warn(this.getManagerComponentItems)
      })
    },
  },
}
</script>
