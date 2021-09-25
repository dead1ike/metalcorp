<template>
  <div class="d-flex flex-column h-100 overflow-hidden">
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
      >
        <template #cell(parameters)="data">
          <manager-goods-parameter :row-data="data.item" />
        </template>
        <template #cell(title)="data">
          <div>
            <div class="text-center">
              <b-img thumbnail :src="data.item.image" style="max-width: 320px; max-height: 320px" />
            </div>
            <div class="h3 py-2 text-center">{{ data.item.title }}</div>
            <table class="table table-striped table-hover ">
              <tbody>
                <tr>
                  <td class="align-middle">Категория:</td>
                  <td>
                    <b>{{ data.item.category.title }}</b>
                  </td>
                </tr>
                <tr>
                  <td class="align-middle">Бренд:</td>
                  <td>
                    <b-dd size="lg" variant="link" :text="data.item.brand.title">
                      <template v-for="itemBrand in getBrandItems">
                        <b-dd-item :key="itemBrand.uuid" @click="changeBrand(data.item, itemBrand)">
                          <div class="d-flex align-items-center">
                            <div style="width:80px">
                              <b-img :src="itemBrand.image" style="max-height:80px;max-width:80px" thumbnail></b-img>
                            </div>
                            <div class="h-100 pl-3">{{ itemBrand.title }}</div>
                          </div>
                        </b-dd-item>
                      </template>
                    </b-dd>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
      </b-table>
    </div>
    <div class="overflow-hidden text-center d-flex flex-row bg-light">
      <div class="flex-fill d-flex justify-content-center">
        <b-pagination
          v-model="pagination.currentPage"
          pills
          :total-rows="getGoodsPagination.total"
          :per-page="pagination.perPage"
          class="p-1 m-1"
        ></b-pagination>
      </div>
      <div class="d-flex flex-row align-items-center">
        <strong class="mx-1">Кол-во</strong>
        <b-btn size="sm" class="m-1" variant="link" :class="{ active: getFilterLimit === 5 }" @click="changeLimit(5)"
          >5</b-btn
        >
        <b-btn size="sm" class="m-1" variant="link" :class="{ active: getFilterLimit === 15 }" @click="changeLimit(15)">
          15</b-btn
        >
        <b-btn size="sm" class="m-1" variant="link" :class="{ active: getFilterLimit === 50 }" @click="changeLimit(50)">
          50</b-btn
        >
        <b-btn
          size="sm"
          class="m-1"
          variant="link"
          :class="{ active: getFilterLimit === 100 }"
          @click="changeLimit(100)"
        >
          100</b-btn
        >
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
    getFilterLimit() {
      return this.$store.getters['manager/goods/goods/getFilterLimit']
    },
    getBrandItems() {
      return this.$store.getters['manager/brand/getBrandItems']
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
    changeBrand(itemGoods, itemBrand) {
      this.$store
        .dispatch('manager/goods/goods/changeBrand', {
          itemBrand,
          itemGoods,
        })
        .then(() => {
          this.fetchGoods()
          this.makeToast('Бренд обновлен')
        })
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
