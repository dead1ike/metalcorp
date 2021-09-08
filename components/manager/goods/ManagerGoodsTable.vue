<template>
  <div class="d-flex flex-column overflow-hidden">
    <div class="overflow-hidden h-100">
      <b-table
        id="goods-table"
        striped
        hover
        bordered
        head-variant="light"
        sticky-header="100%"
        no-border-collapse
        :per-page="pagination.perPage"
        :current-page="pagination.currentPage"
        :fields="getGoodsFields"
        :items="getGoodsItems"
      >
        <template #cell(actions)="data">
          <b-icon
            icon="pencil"
            variant="success"
            scale="1.4"
            class="mx-2"
            title="Редактировать"
            @click="editGood(data.item)"
          ></b-icon>
          <b-icon
            icon="X"
            variant="danger"
            scale="2.5"
            class="mx-2"
            title="Удалить"
            @click="deleteGood(data.item)"
          ></b-icon>
        </template>
        <template #cell(image)="data">
          <b-img :src="data.item.image" style="max-width: 120px; max-height: 120px" />
        </template>
      </b-table>
    </div>
    <div class="overflow-hidden text-center d-flex flex-row bg-light">
      <div class="flex-fill d-flex justify-content-center">
        <b-pagination
          aria-controls="goods-table"
          pills
          v-model="pagination.currentPage"
          :total-rows="rows"
          :per-page="pagination.perPage"
          class="p-2 m-1"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManagerGoodsTable',
  data() {
    return {
      form: {
        image: null,
        good_uuid: null,
      },
      pagination: {
        currentPage: 1,
        perPage: 20,
      },
    }
  },
  computed: {
    rows() {
      return this.getGoodsItems.length
    },
    getGoodsFields() {
      return this.$store.getters.getGoodFields
    },
    getGoodsItems() {
      return this.$store.getters['manager/goods/goods/getGoodsItems']
    },
  },
  watch: {
    'form.image'(newValue) {
      if (newValue) this.uploadImage()
    },
  },
  mounted() {
    this.fetchGoods()
    console.warn(this.getGoodsItems)
  },
  methods: {
    goodUuid(item) {
      this.form.good_uuid = item.uuid
    },
    uploadImage() {
      this.$store
        .dispatch('manager/goods/goods/uploadFile', {
          uuid: this.form.good_uuid,
          image: this.form.image,
        })
        .then(() => {
          this.makeToast('Картинка успешно загружена')
          this.fetchGoods()
          this.form.image = null
        })
    },
    editGood(good) {
      this.$store.commit('setActiveModal', {
        modalName: 'managerGoodsParameter',
        modalStatus: true,
      })
      this.$store.commit('manager/goods/parameters/editGood', good)
    },
    deleteGood(good) {
      this.$store.dispatch('deleteGood', good)
    },
    fetchGoods() {
      this.$store.dispatch('manager/goods/goods/fetchGoods')
    },
    makeToast(body = 'Ничего не произошло', variant = 'success', title = 'Уведомление') {
      this.$bvToast.toast(body, {
        title,
        autoHideDelay: 5000,
        appendToast: false,
        variant,
        toaster: 'b-toaster-bottom-right',
      })
    },
  },
}
</script>
