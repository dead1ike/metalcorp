<template>
  <div>
    <!--    <template #modal-header>-->
    <!--      <h3>{{ getGoodItem.title }}</h3>-->
    <!--    </template>-->
    <b-input-group class="d-flex flex-column">
      <div class="d-flex w-100">
        <div class="d-flex flex-fill p-2">
          <b-dd
            ref="ddParams"
            variant="corp"
            :text="selectedParameter.title ? selectedParameter.title : 'Выберите'"
            boundary="window"
            dropright
            lazy
          >
            <b-dd-item>
              <b-btn variant="corp" size="sm" block @click="managerParameterAdd()">Добавить параметр</b-btn>
            </b-dd-item>
            <template v-for="item in getParameters">
              <b-dd-form v-if="item.uuid !== null" :key="item.uuid">
                <div class="d-flex">
                  <div>
                    <b-btn variant="outline-black" class="b-check live-edit pr-1" @click="updateFavorites(item)">
                      <b-icon v-if="checkSelectFavorites(item)" icon="check-square" variant="black"></b-icon>
                      <b-icon v-else icon="square" variant="black"></b-icon>
                    </b-btn>
                  </div>
                  <div class="pt-2 pl-1" style="cursor: pointer" @click="selectParameter(item.uuid)">
                    {{ item.title }}
                  </div>
                </div>
              </b-dd-form>
            </template>
          </b-dd>
        </div>
        <div class="d-flex p-2">
          <b-form-input
            ref="formparamvalue"
            v-model.trim="form.parameter_value"
            placeholder="Значение"
            trim
            @keydown.enter="addParameter()"
          ></b-form-input>
        </div>
        <div class="align-self-center mx-2">
          <b-btn
            variant="outline-success"
            style="border-radius: 50%; border: 2px solid; font-weight: bold;font-size: 25px;height: 50px; width: 50px"
            size="sm"
            @click="addParameter()"
          >
            +
          </b-btn>
        </div>
      </div>
    </b-input-group>
    <hr />
    <table class="w-100">
      <tbody>
        <tr v-for="itemParameter in rowData.good_parameters" :key="itemParameter.uuid">
          <td>
            <span>{{ itemParameter.title }}</span>
          </td>
          <td>
            <span>{{ itemParameter.parameter_value }}</span>
          </td>
          <td>
            <b-btn class="btn-icon" variant="light" @click="deleteGoodParameter(itemParameter.uuid)">
              <b-icon-trash variant="danger"></b-icon-trash>
            </b-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ManagerGoodsParameter',
  props: {
    rowData: {
      type: Object,
    },
  },
  data() {
    return {
      form: {
        parameter_uuid: null,
        parameter_value: '',
      },
    }
  },
  computed: {
    getGoodItem() {
      return this.$store.getters['manager/goods/parameters/getGoodItem']
    },
    getParameters() {
      const itemParameters = _.orderBy(
        this.$store.getters['manager/rack/parameter/getParameter'],
        item => {
          return this.checkSelectFavorites(item)
        },
        ['asc'],
      )
      return itemParameters
    },
    selectedParameter() {
      if (this.getParameters.find(item => item.uuid === this.form.parameter_uuid)) {
        return this.getParameters.find(item => item.uuid === this.form.parameter_uuid)
      }
      return {}
    },
    getFavorites() {
      return this.$store.getters['favorites/getFavorites']
    },
  },
  mounted() {},
  methods: {
    updateFavorites(item) {
      if (this.checkSelectFavorites(item)) {
        this.updateFavoritesSlice(item)
      } else {
        this.updateFavoritesArray(item)
      }
    },
    updateFavoritesArray(item) {
      this.$store.commit('favorites/setFavoritesArray', {
        item,
      })
    },

    updateFavoritesSlice(item) {
      this.$store.commit('favorites/setFavoritesSlice', {
        item,
      })
    },
    checkSelectFavorites(item) {
      return _.find(this.getFavorites, item)
    },
    deleteGoodParameter(goodParameterUuid) {
      this.$store.dispatch('manager/goods/parameters/deleteGoodParameter', goodParameterUuid).then(() => {
        this.$store.dispatch('manager/goods/goods/fetchGoods')
      })
    },
    managerParameterAdd() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerParameterAdd',
        modalStatus: true,
      })
    },
    selectParameter(uuid) {
      this.form.parameter_uuid = uuid
      this.$refs.ddParams.hide(true)
      this.$refs.formparamvalue.$el.focus()
    },
    clearForm() {
      this.form.parameter_value = ''
    },
    addParameter() {
      this.$store
        .dispatch('manager/goods/parameters/postParameter', {
          good_uuid: this.rowData.uuid,
          parameter_uuid: this.form.parameter_uuid,
          value: this.form.parameter_value,
        })
        .then(() => {
          this.$store.dispatch('manager/goods/goods/fetchGoods')
          this.clearForm()
        })
        .catch(e => {})
    },
  },
}
</script>
