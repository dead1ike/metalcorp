<template>
  <b-modal id="manager-goods-add" no-close-on-backdrop no-close-on-esc size="lg">
    <template #modal-header>
      <h3>Добавление товара</h3>
    </template>
    <!--    шапка-->
    <div class="d-flex flex-row">
      <div class="d-flex flex-column px-2 py-2">
        <span class="h3">Категория товаров</span>
        <b-dd variant="corp" :text="selectedCategory.title ? selectedCategory.title : 'Выберите основную категорию'">
          <div class="overflow-auto" style="max-height: 500px">
            <b-dd-item>
              <b-btn variant="corp" @click="managerCategoryAddModal()"> Добавить категорию </b-btn>
            </b-dd-item>
            <template v-for="item in getCategoryOptions">
              <b-dd-item :key="item.uuid" @click="selectCategory(item.uuid)">{{ item.title }}</b-dd-item>
            </template>
          </div>
        </b-dd>
      </div>
      <b-input-group class="py-2 px-2 d-flex flex-column">
        <span class="h3">Наименование товара</span>
        <b-form-input v-model="form.title" class="w-100"> </b-form-input>
      </b-input-group>
    </div>
    <!--    артинка описание-->
    <div class="d-inline-flex flex-column align-self-center w-100 pt-4">
      <b-file v-model="form.image"></b-file>
      <b-form-input v-model="form.image_url" class="w-100 mt-2" placeholder="URL Картинки"> </b-form-input>
    </div>
    <div class="d-flex flex-column py-2">
      <span class="h4 py-2">Описание товара</span>
      <b-form-textarea v-model="form.description" placeholder="Описание товара"></b-form-textarea>
    </div>
    <template #modal-footer>
      <b-btn variant="corp" :disabled="!buttonState" @click="addGood">Добавить</b-btn>
      <b-btn variant="danger" @click="closeModal">Отмена</b-btn>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ManagerGoodsAdd',
  data() {
    return {
      form: {
        title: '',
        category_uuid: null,
        description: '',
        parameters: [],
        parameter_title: '',
        parameter_value: '',
        image: null,
        uploadedImage: null,
        image_url: '',
      },
    }
  },
  computed: {
    getCategoryOptions() {
      return this.$store.getters['manager/goods/category/getCategoryItems']
    },
    selectedCategory() {
      if (this.getCategoryOptions.find((category) => category.uuid === this.form.category_uuid)) {
        return this.getCategoryOptions.find((category) => category.uuid === this.form.category_uuid)
      }
      return {}
    },
    buttonState() {
      return this.form.category_uuid !== null
    },
  },

  mounted() {
    this.$store.dispatch('category/fetchCategory')
    this.$bvModal.show('manager-goods-add')
  },
  methods: {
    addGood() {
      this.$store
        .dispatch('manager/goods/goods/postGood', {
          category_uuid: this.form.category_uuid,
          uuid: this.getUuid(),
          title: this.form.title,
          image: this.form.image,
          description: this.form.description,
          image_url: this.form.image_url,
        })
        .then(() => {
          this.makeToast('Товар успешно добавлен', 'success')
          this.closeModal()
        })
        .catch(() => {
          this.makeToast('Ошибка', 'danger')
        })
    },
    managerCategoryAddModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerCategoryAdd',
        modalStatus: true,
      })
    },
    closeModal() {
      this.$store.dispatch('manager/goods/goods/fetchGoods')
      this.$store.commit('setActiveModal', {
        modalName: 'managerGoodsAdd',
        modalStatus: false,
      })
    },
    selectCategory(categoryUuid) {
      this.form.category_uuid = categoryUuid
    },
    getUuid() {
      return this.$store.getters.getNewUuid(new Date())
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
