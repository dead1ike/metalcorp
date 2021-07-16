<template>
  <div>
    <b-table hover striped borderless :fields="getManagerRackFields" :items="getManagerRackItems">
      <template #cell(image)="data">
        <div class="d-flex flex-column">
          <div v-if="data.item.image !== null" style="max-width: 100px; max-height: 100px">
            <b-img :src="data.item.image" style="max-width: 100px; max-height: 100px" />
          </div>
          <div v-else>
            <span>Картинка отсутствует. Добавить?</span>
          </div>
          <div class="d-inline-flex flex-row align-self-center">
            <b-file v-model="form.image" plain @input="typeUuid(data.item)"></b-file>
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
  name: 'ManagerRackTypeTable',
  data() {
    return {
      form: {
        image: null,
        type_uuid: null,
      },
    }
  },
  computed: {
    getManagerRackFields() {
      return this.$store.getters['manager/rack/field/getManagerTypeFields']
    },
    getManagerRackItems() {
      return this.$store.getters['type/getTypes']
    },
    getRackTypes() {
      return this.$store.getters['type/getTypes']
    },
  },
  watch: {
    'form.image'(newValue, oldValue) {
      if (newValue) this.uploadImage()
    },
  },
  mounted() {
    this.$store.dispatch('type/fetchTypes').then(() => {})
  },
  methods: {
    deleteItem(item) {
      this.$store.dispatch('type/deleteRackType', item.uuid).then(() => {
        this.$store.dispatch('type/fetchTypes')
      })
    },
    typeUuid(item) {
      this.form.type_uuid = item.uuid
    },
    uploadImage() {
      this.$store
        .dispatch('type/uploadFile', {
          uuid: this.form.type_uuid,
          image: this.form.image,
        })
        .then(() => {
          this.makeToast('Картинка успешно загружена')
          this.$store.dispatch('type/fetchTypes')
          this.form.image = null
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
