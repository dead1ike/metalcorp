<template>
  <b-modal id="manager-category-add" size="sm" no-close-on-backdrop no-close-on-esc>
    <template #modal-header>
      <h5>Добавление категории</h5>
    </template>
    <b-dd
      variant="corp"
      class="my-2"
      :text="selectedCategory.title ? selectedCategory.title : 'Выберите основную категорию'"
    >
      <div class="overflow-auto" style="max-height: 400px">
        <template v-for="item in getCategoryOptions">
          <b-dd-item @click="selectCategory(item.uuid)">{{ item.title }}</b-dd-item>
        </template>
      </div>
    </b-dd>
    <b-input-group class="d-flex flex-column">
      <h4>Введите наименование категории:</h4>
      <b-form-input v-model="form.title" class="w-100"></b-form-input>
    </b-input-group>

    <b-input-group class="d-flex flex-column">
      <h4>Описание:</h4>
      <b-textarea v-model="form.description" class="w-100"></b-textarea>
    </b-input-group>
    <template #modal-footer>
      <b-btn variant="corp" @click="addCategory">Добавить</b-btn>
      <b-btn variant="danger" @click="closeCategoryAdd">Отмена</b-btn>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ManagerRackCategoryAdd',
  data() {
    return {
      form: {
        title: '',
        category_uuid: null,
        description: '',
      },
    }
  },
  computed: {
    getCategoryOptions() {
      return this.$store.getters['manager/goods/category/getCategoryItems']
    },
    selectedCategory() {
      if (this.getCategoryOptions.find(category => category.uuid === this.form.category_uuid)) {
        return this.getCategoryOptions.find(category => category.uuid === this.form.category_uuid)
      }
      return {}
    },
  },
  mounted() {
    this.$store.dispatch('manager/goods/category/fetchCategory')
    this.$bvModal.show('manager-category-add')
  },
  methods: {
    selectCategory(categoryUuid) {
      this.form.category_uuid = categoryUuid
    },
    getUuid() {
      return this.$store.getters.getNewUuid(new Date())
    },
    closeCategoryAdd() {
      this.form.title = ''
      this.form.description = ''
      this.$store.commit('setActiveModal', {
        modalName: 'managerCategoryAdd',
        modalStatus: false,
      })
    },
    addCategory() {
      this.$store
        .dispatch('category/postCategory', {
          uuid: this.getUuid(),
          title: this.form.title,
          parent_uuid: this.form.category_uuid,
          description: this.form.description,
        })
        .then(() => {
          this.$store.dispatch('category/fetchCategory')
          this.closeCategoryAdd()
        })
        .catch(() => {
          this.makeToast('Ты ебан?', 'danger')
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
