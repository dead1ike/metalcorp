<template>
  <b-modal id="manager-goods-add" no-close-on-backdrop no-close-on-esc size="lg">
    <template #modal-header>
      <h3>Добавление товара</h3>
    </template>
    <!--    шапка-->
    <div class="d-flex flex-row">
      <div class="d-flex flex-column px-2 py-2">
        <span class="h3">Категория товаров</span>
        <b-dd
          variant="corp"
          class="my-2"
          :text="selectedCategory.title ? selectedCategory.title : 'Выберите основную категорию'"
        >
          <b-dd-item>
            <b-btn variant="corp" @click="managerCategoryAddModal()">
              Добавить категорию
            </b-btn>
          </b-dd-item>
          <template v-for="item in getCategoryOptions">
            <b-dd-item @click="selectCategory(item.uuid)">{{ item.title }}</b-dd-item>
          </template>
        </b-dd>
      </div>
      <b-input-group class="py-2 px-2 d-flex flex-column">
        <span class="h3">Наименование товара</span>
        <b-form-input class="w-100" v-model="form.title"> </b-form-input>
      </b-input-group>
    </div>
    <!--    артинка описание-->
    <div class="d-flex flex-column py-2">
      <span class="h4 py-2">Описание товара</span>
      <b-form-textarea placeholder="Описание товара" v-model="form.description"></b-form-textarea>
    </div>
    <template #modal-footer>
      <b-btn variant="corp" @click="addGood">Добавить</b-btn>
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
      },
    }
  },
  computed: {
    getCategoryOptions() {
      return this.$store.getters['category/getCategoryItems']
    },
    selectedCategory() {
      if (this.getCategoryOptions.find(category => category.uuid === this.form.category_uuid)) {
        return this.getCategoryOptions.find(category => category.uuid === this.form.category_uuid)
      }
      return {}
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
          description: this.form.description,
        })
        .then(() => {
          this.closeModal()
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
  },
}
</script>
