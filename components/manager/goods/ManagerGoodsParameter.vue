<template>
  <b-modal id="manager-goods-parameters" no-close-on-backdrop no-close-on-esc size="lg">
    <template #modal-header>
      <h3>{{ getGoodItem.title }}</h3>
    </template>
    <b-input-group class="py-2 d-flex flex-column">
      <div class="d-flex flex-row">
        <span class="h3 align-self-center">Параметры товара</span>
      </div>
      <div class="d-flex w-100">
        <div class="d-flex flex-fill p-2">
          <b-dd variant="corp" :text="selectedParameter.title ? selectedParameter.title : 'Выберите'">
            <b-dd-item>
              <b-btn variant="corp" size="sm" block @click="managerParameterAdd()">Добавить параметр</b-btn>
            </b-dd-item>
            <template v-for="item in getParameters">
              <b-dd-item v-if="item.uuid !== null" :key="item.uuid" @click="selectParameter(item.uuid)">
                {{ item.title }}
              </b-dd-item>
            </template>
          </b-dd>
        </div>
        <div class="d-flex p-2">
          <b-form-input v-model.trim="form.parameter_value" placeholder="Значение" trim></b-form-input>
        </div>
        <div class="align-self-center mx-2">
          <b-btn
            variant="outline-success"
            style="border-radius: 50%; border: 2px solid; font-weight: bold;font-size: 25px;height: 50px; width: 50px"
            size="sm"
            @click="addParameter()"
            >+</b-btn
          >
        </div>
      </div>
    </b-input-group>
    <hr />
    <div v-for="item in getGoodParameters" class="d-flex flex-row ">
      <div v-if="item.uuid !== null" :key="item.uuid" class="d-flex flex-row h4 justify-content-between w-100">
        <div class="p-2">
          <span>{{ item.parameter_uuid.title }}</span>
        </div>
        <div class="p-2">
          <span>{{ item.parameter_value }}</span>
        </div>
      </div>
    </div>
    <template #modal-footer>
      <b-btn variant="danger" @click="closeModal">Закрыть</b-btn>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ManagerGoodsParameter',
  data() {
    return {
      form: {
        parameters: [],
        parameter_uuid: null,
        parameter_value: '',
      },
    }
  },
  computed: {
    getGoodItem() {
      return this.$store.getters['manager/goods/parameters/getGoodItem']
    },
    getGoodParameters() {
      return this.$store.getters['manager/goods/parameters/getGoodParameters'].filter(item => {
        return item.good_uuid.uuid === this.getGoodItem.uuid
      })
    },
    getParameters() {
      return this.$store.getters['manager/rack/parameter/getParameter']
    },
    selectedParameter() {
      if (this.getParameters.find(item => item.uuid === this.form.parameter_uuid)) {
        return this.getParameters.find(item => item.uuid === this.form.parameter_uuid)
      }
      return {}
    },
  },
  mounted() {
    this.$store.dispatch('manager/rack/parameter/fetchParameter')
    this.$store.dispatch('manager/goods/goods/fetchGoods')
    this.fetchParametersByUuid()
    this.$bvModal.show('manager-goods-parameters')
    console.warn(this.getGoodParameters)
  },
  methods: {
    managerParameterAdd() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerParameterAdd',
        modalStatus: true,
      })
    },
    selectParameter(uuid) {
      this.form.parameter_uuid = uuid
    },
    getUuid() {
      return this.$store.getters.getNewUuid(new Date())
    },
    clearForm() {
      this.form.parameter_value = ''
    },
    addParameter() {
      this.$store
        .dispatch('manager/goods/parameters/postParameter', {
          good_uuid: this.getGoodItem.uuid,
          parameter_uuid: this.form.parameter_uuid,
          value: this.form.parameter_value,
        })
        .then(() => {
          this.fetchParametersByUuid()
          this.clearForm()
        })
        .catch(e => {
          console.warn(e)
        })
    },
    fetchParametersByUuid() {
      this.$store.dispatch('manager/goods/parameters/fetchGoodParameters', this.getGoodItem.uuid)
    },
    closeModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerGoodsParameter',
        modalStatus: false,
      })
    },
  },
}
</script>
