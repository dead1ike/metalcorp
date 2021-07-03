<template>
  <div>
    <b-table borderless striped hover :fields="getManagerCategoryFields" :items="getManagerCategoryItems">
      <template #cell(title)="data">
        {{ data.item.title + ' (' + showParent(data.item.parent_uuid).title + ')' }}
      </template>
      <template #cell(image)="data">
        {{ data.item.image ? data.item.image : 'Картинка не добавлена. Добавить?' }}
        <div class="d-inline-flex flex-row">
          <b-file v-model="form.image" plain @change="categoryUuid(data.item)"></b-file>
        </div>
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
          this.form.image = null
          this.makeToast('Картинка успешно загружена')
          this.$store.dispatch('category/fetchCategory')
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
