<template>
  <div>
    <div class="p-5">
      <h3>Загрузка файлов для прайса</h3>
    </div>
    <div class="p-5">
      <b-file v-model="form.price_file" browse-text="Выбрать прайс" placeholder="Файл не выбран"> </b-file>
    </div>
    <div class="p-5 text-right">
      <b-btn variant="corp" @click="uploadPrice()">Отправить на сервер</b-btn>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  data() {
    return {
      form: {
        price_file: null,
      },
    }
  },
  methods: {
    uploadPrice() {
      this.$store
        .dispatch('uploadFile', this.form.price_file)
        .then((success) => {
          this.form.price_file = null
          this.makeToast('Прайс успешно загружен', 'success')
        })
        .catch((e) => {
          this.makeToast('Ошибка загрузки прайса, попробуйте .xlsx формат', 'danger')
          console.warn(e)
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
