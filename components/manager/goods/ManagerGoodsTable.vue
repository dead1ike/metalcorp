<template>
  <div class="d-flex w-100 h-100  flex-column">
    <div class="d-flex flex-row py-2">
      <h2 class="d-flex align-self-center justify-content-center">Таблица товаров</h2>
      <b-btn class="mx-3" variant="corp" @click="openAddGoodModal()">Добавить товар</b-btn>
    </div>
    <div class="d-flex overflow-auto w-100">
      <b-table striped hover :fields="getGoodsFields" :items="getGoodsItems" class="mb-5 h-100">
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
    <footer class="d-flex w-100">pepega</footer>
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
    }
  },
  computed: {
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
    openAddGoodModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerGoodsAdd',
        modalStatus: true,
      })
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
