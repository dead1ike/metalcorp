<template>
  <b-modal
    id="public-category-item-description"
    size="md"
    body-class="px-5"
    centered
    :title="getType.title"
    lazy
    no-close-on-backdrop
    no-close-on-esc
  >
    <div class="h-100 w-100 d-flex justify-content-between">
      <div class="d-flex flex-column">
        <img :src="getType.img" style="height: 300px; width: 300px" />
      </div>
      <div class="d-flex flex-column">
        <h5>Выберите характеристики:</h5>
        <b-dd>
          <b-dd-item></b-dd-item>
        </b-dd>
      </div>
    </div>
    <template #modal-footer>
      <b-btn variant="outline-corp" @click="closeModal">Закрыть</b-btn>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'PublicCategoryItemDescription',
  data() {
    return {
      form: {
        param_1: '',
        param_2: '',
        param_3: '',
        param_4: '',
        param_5: '',
        param_6: '',
        param_7: '',
        param_8: '',
        param_9: '',
      },
    }
  },
  computed: {
    getType() {
      return this.$store.getters['type/getType']
    },
  },
  mounted() {
    console.warn('getstell', this.getType)
    this.$bvModal.show('public-category-item-description')
  },
  methods: {
    closeModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'publicCategoryItemDescription',
        modalStatus: false,
      })
    },
  },
}
</script>
