<template>
  <b-modal id="manager-rack-add" no-close-on-backdrop no-close-on-esc>
    <template #modal-header>
      <h4>Добавление стеллажа:</h4>
    </template>
    <b-dd :text="selectedCategory.title ? selectedCategory.title : 'Выберите'">
      <template v-for="item in getCategoryOptions">
        <b-dd-item v-if="item.uuid !== null" :key="item.uuid" @click="selectCategory(item.uuid)"></b-dd-item>
      </template>
    </b-dd>
    <b-input-group class="d-flex flex-column">
      <h5>Наименование стеллажа</h5>
      <b-input v-model="form.title" class="w-100"></b-input>
    </b-input-group>
    <b-input-group class="d-flex flex-column">
      <h5>Нагрузка на стеллаж</h5>
      <b-input v-model="form.load" class="w-100"></b-input>
    </b-input-group>
    <b-input-group class="d-flex flex-column">
      <h5>Нагрузка на полку</h5>
      <b-input v-model="form.shelf_load" class="w-100"></b-input>
    </b-input-group>
    <b-input-group class="d-flex flex-column">
      <h5>Нагрузка на секцию</h5>
      <b-input v-model="form.section_load" class="w-100"></b-input>
    </b-input-group>
    <b-input-group class="d-flex flex-column">
      <h5>Описание</h5>
      <b-textarea v-model="form.description" class="w-100"></b-textarea>
    </b-input-group>
    <template #modal-footer>
      <b-btn variant="corp">Добавить</b-btn>
      <b-btn variant="danger" @click="closeModal">Отменить</b-btn>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ManagerRackAdd',
  data() {
    return {
      form: {
        category_uuid: null,
        title: '',
        load: '',
        shelf_load: '',
        section_load: '',
        description: '',
      },
    }
  },
  computed: {
    getCategoryOptions() {
      return this.$store.getters['category/getCategoryItems'].filter((item) => {
        return item.parent_uuid !== null
      })
    },
    selectedCategory() {
      if (this.getCategoryOptions.find((item) => item.uuid === this.form.category_uuid)) {
        return this.getCategoryOptions.find((item) => item.uuid === this.form.category_uuid)
      }
      return {}
    },
  },
  mounted() {
    this.$store.dispatch('category/fetchCategory')
    this.$bvModal.show('manager-rack-add')
  },
  methods: {
    selectCategory(uuid) {
      this.form.category_uuid = uuid
    },
    getUuid() {
      return this.$store.getters.getNewUuid(new Date())
    },
    closeModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerRackAdd',
        modalStatus: false,
      })
    },
  },
}
</script>
