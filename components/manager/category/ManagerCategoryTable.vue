<template>
  <div>
    <b-table borderless striped hover :fields="getManagerCategoryFields" :items="getManagerCategoryItems">
      <template #cell(title)="data">
        {{ data.item.title + ' (' + showParent(data.item.parent_uuid).title + ')' }}
      </template>
      <template #cell(image)="data">
        <div class="d-flex flex-column">
          <div style="max-width: 100px; max-height: 100px" v-if="data.item.image !== null">
            <b-img :src="data.item.image" style="max-width: 100px; max-height: 100px" />
          </div>
          <div v-else>
            <span>Картинка отсутствует. Добавить?</span>
          </div>
          <div class="d-inline-flex flex-row align-self-center">
            <b-file v-model="form.image" plain @load="categoryUuid(data.item)"></b-file>
          </div>
        </div>
      </template>
      <template #cell(actions)="data">
        <b-btn v-b-popover.hover.topleft="'Удалить'" variant="link" @click="deleteItem(data.item)">
          <b-icon icon="x-circle" variant="danger"></b-icon
        ></b-btn>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'ManagerCategoryTable',
  data() {
    return {
      form: {
        image: null,
        category_uuid: null,
      },
    }
  },
  computed: {
    getManagerCategoryFields() {
      return this.$store.getters.getManagerCategoryFields
    },
    getManagerCategoryItems() {
      return this.$store.getters['category/getCategoryItems'].filter((item) => {
        return item.parent_uuid !== null
      })
    },
    getCategoryItems() {
      return this.$store.getters['category/getCategoryItems']
    },
  },
  mounted() {
    this.$store.dispatch('category/fetchCategory')
  },
  watch: {
    'form.image'(newValue, oldValue) {
      console.warn(this.form.image)
      this.uploadImage()
    },
  },
  methods: {
    deleteItem(item) {
      this.$store.dispatch('category/deleteCategory', item.uuid).then(() => {
        this.$store.dispatch('category/fetchCategory')
      })
    },
    categoryUuid(item) {
      this.form.category_uuid = item.uuid
    },
    uploadImage() {
      console.warn('dadadadada')
      this.$store
        .dispatch('category/uploadFile', {
          uuid: this.form.category_uuid,
          image: this.form.image,
        })
        .then(() => {
          this.makeToast('Картинка успешно загружена')
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

<style scoped></style>
