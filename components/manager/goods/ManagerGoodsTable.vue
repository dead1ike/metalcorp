<template>
  <div class="d-flex flex-column overflow-hidden">
    <div class="overflow-hidden h-100">
      <b-table
        striped
        hover
        bordered
        head-variant="light"
        sticky-header="100%"
        no-border-collapse
        :fields="getGoodsFields"
        :items="getGoodsItems"
        style="min-height: 1000px"
      >
        <template #cell(parameters)="data">
          <manager-goods-parameter :row-data="data.item" />
        </template>
        <template #cell(actions)="data">
          <!--          <b-icon-->
          <!--            icon="pencil"-->
          <!--            variant="success"-->
          <!--            scale="1.4"-->
          <!--            class="mx-2"-->
          <!--            title="Редактировать"-->
          <!--            @click="editGood(data.item)"-->
          <!--          ></b-icon>-->
          <b-btn variant="light" class="btn-icon" @click="deleteGood(data.item)">
            <b-icon icon="trash" variant="danger" title="Удалить"></b-icon>
          </b-btn>
        </template>
        <template #cell(title)="data">
          <div>
            <div><b-img thumbnail :src="data.item.image" style="max-width: 180px; max-height: 180px" /></div>
            <div class="h3 py-2">{{ data.item.title }}</div>
          </div>
        </template>
      </b-table>
    </div>
    <div class="overflow-hidden text-center d-flex flex-row bg-light">
      <div class="flex-fill d-flex justify-content-center">
        <b-pagination
          pills
          v-model="pagination.currentPage"
          :total-rows="getGoodsPagination.total"
          :per-page="pagination.perPage"
          class="p-2 m-1"
        ></b-pagination>
      </div>
      <div class="mt-3 mr-3 d-flex flex-row">
        <strong class="mx-1">Кол-во</strong>
        <span class="mx-1" style="cursor: pointer" @click="changeLimit(5)">5</span>
        <span class="mx-1" style="cursor: pointer" @click="changeLimit(15)">15</span>
        <span class="mx-1" style="cursor: pointer" @click="changeLimit(50)">50</span>
        <span class="mx-1" style="cursor: pointer" @click="changeLimit(100)">100</span>
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
        perPage: 0,
      },
    }
  },
  computed: {
    getGoodsPagination() {
      return this.$store.getters['manager/goods/goods/getGoodsPagination'] || {}
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
    'pagination.currentPage'(newValue) {
      if (newValue) this.changePage()
    },
  },
  mounted() {
    this.fetchGoods()
  },
  methods: {
    changeLimit(value) {
      this.$store.commit('manager/goods/goods/setLimitGoods', value)
    },
    changePage() {
      this.$store.commit('manager/goods/goods/setCurrentPageGoods', this.pagination.currentPage)
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
      this.$store.dispatch('manager/rack/parameter/fetchParameter')
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
