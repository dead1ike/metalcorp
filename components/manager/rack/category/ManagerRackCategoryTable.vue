<template>
  <div>
    <b-table borderless striped hover :fields="getManagerCategoryFields" :items="getManagerCategoryItems">
      <template #cell(title)="data">
        {{ data.item.title }}
      </template>
      <template #cell(image)="data">
        <div class="d-flex flex-column">
          <div v-if="data.item.image !== null" style="max-width: 100px; max-height: 100px">
            <b-img :src="data.item.image" style="max-width: 100px; max-height: 100px" />
          </div>
          <div v-else>
            <span>Картинка отсутствует. Добавить?</span>
          </div>
          <div class="d-inline-flex flex-row align-self-center">
            <b-file v-model="form.image" plain @input="categoryUuid(data.item)"></b-file>
          </div>
        </div>
      </template>
      <template #cell(price_from)="data">
        <div class="d-flex flex-column">
          <div>
            <b-form-input v-model="data.value" :placeholder="data.item.from">{{ data.item.from }}</b-form-input>
          </div>
          <div>
            <b-btn variant="corp" size="lg" class="text-truncate" @click="updatePriceFrom(data.item.uuid, data.value)"
              >Изменить цену</b-btn
            >
          </div>
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
  name: 'ManagerRackCategoryTable',
  data() {
    return {
      form: {
        image: null,
        category_uuid: null,
        from: null,
      },
    }
  },
  computed: {
    getManagerCategoryFields() {
      return this.$store.getters['manager/rack/field/getManagerCategoryFields']
    },
    getManagerCategoryItems() {
      return this.$store.getters['manager/goods/category/getCategoryItems'].filter((item) => {
        return item.parent_uuid !== null
      })
    },
    getCategoryItems() {
      return this.$store.getters['category/getCategoryItems']
    },
  },
  watch: {
    'form.image'(newValue, oldValue) {
      if (newValue) this.uploadImage()
    },
  },
  mounted() {
    this.$store.dispatch('manager/goods/category/fetchCategory')
  },
  methods: {
    updatePriceFrom(uuid, value) {
      this.$store
        .dispatch('manager/goods/category/patchCategory', {
          uuid,
          data: {
            from: value,
          },
        })
        .then(() => {
          this.fetchCategory()
          this.makeToast('Цена изменена!')
          this.form.from = ''
        })
    },
    deleteItem(item) {
      this.$store.dispatch('category/deleteCategory', item.uuid).then(() => {
        this.$store.dispatch('category/fetchCategory')
      })
    },
    categoryUuid(item) {
      this.form.category_uuid = item.uuid
    },
    uploadImage() {
      this.$store
        .dispatch('category/uploadFile', {
          uuid: this.form.category_uuid,
          image: this.form.image,
        })
        .then(() => {
          this.makeToast('Картинка успешно загружена , братан!')
          this.$store.dispatch('category/fetchCategory')
          this.form.image = null
        })
    },
    showParent(uuid) {
      if (this.getCategoryItems.find((item) => item.uuid === uuid)) {
        return this.getCategoryItems.find((item) => item.uuid === uuid)
      }
      return {}
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
