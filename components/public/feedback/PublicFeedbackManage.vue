<template>
  <div class="h-100">
    <div class="w-100 d-flex justify-content-center pt-4">
      <b-breadcrumb :items="getItems" style="background-color: white"> </b-breadcrumb>
    </div>
    <div>
      <h2 class="font-weight-bold pt-10 pb-6 pl-7">Отзывы</h2>
      <div v-for="itemFeedback in getFeedbackItems" :key="itemFeedback.uuid" class="px-7 py-5">
        <div class="p-8 shadow d-flex flex-column">
          <div class="d-flex flex-row">
            <div class="feedback_rate px-6 mr-2 py-1 text-center" style="max-width: 47px; max-height: 34px">
              {{ itemFeedback.value }}
            </div>
            <div class="feedback_name px-3">
              <h4>{{ itemFeedback.username }}</h4>
            </div>
          </div>
          <div class="feedback_text pt-4">
            <h5 class="font-weight-light">{{ itemFeedback.text }}</h5>
          </div>
          <div class="pt-5">
            <b-img :src="itemFeedback.image" style="max-height: 212px" />
          </div>
        </div>
      </div>
      <div class="py-10">
        <div class="px-10"><h4>Оставьте свой отзыв</h4></div>
        <div class="px-7 pt-2">
          <div class="p-8 shadow-sm d-flex flex-column" style="max-width: 757px">
            <div style="max-width: 344px">
              <p class="designer_dolbaeb font-weight-normal">Ваше имя</p>
              <b-form-input v-model="form.username"></b-form-input>
            </div>
            <div class="pt-4" style="max-width: 344px">
              <p class="designer_dolbaeb font-weight-normal">Ваш номер телефона</p>
              <b-form-input v-model="form.telephone"></b-form-input>
            </div>
            <div class="pt-4" style="max-width: 690px">
              <p class="designer_dolbaeb font-weight-normal">Ваш отзыв</p>
              <b-form-textarea v-model="form.text"></b-form-textarea>
            </div>
            <div class="pt-4">
              <p class="designer_dolbaeb font-weight-normal">
                Оцените от 1 до 5, на сколько вы<br />
                довольны сотрудничеством с нами?
              </p>
              <b-input-group style="max-width: 370px">
                <b-form-rating v-model="form.value" inline color="#5B95ED"></b-form-rating>
              </b-input-group>
            </div>
            <div class="pt-7 pb-6">
              <p class="designer_dolbaeb font-weight-normal">Прикрепите фото</p>
              <b-file v-model="form.image" plain></b-file>
            </div>
            <div class="pt-10">
              <b-btn class="px-8 py-4 d-inline-block" variant="dark" @click="sendFeedback">Отправить</b-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <public-dashboard-footer />
  </div>
</template>

<script>
export default {
  name: 'PublicFeedbackManage',
  data() {
    return {
      form: {
        username: '',
        telephone: '',
        text: '',
        image: null,
        value: null,
      },
    }
  },
  computed: {
    getItems() {
      return this.$store.getters['seo/getOtzyvyItems']
    },
    getFeedbackItems() {
      return this.$store.getters['feedback/getFeedback']
    },
  },
  mounted() {
    this.fetchFeedback()
  },
  methods: {
    fetchFeedback() {
      this.$store.dispatch('feedback/fetchFeedback')
    },
    getUuid() {
      return this.$store.getters.getNewUuid(new Date())
    },
    sendFeedback() {
      this.$store
        .dispatch('feedback/postFeedback', {
          ...this.form,
          image: this.form.image,
          uuid: this.getUuid(),
        })
        .then(() => {
          this.clearForm()
          this.fetchFeedback()
        })
    },
    clearForm() {
      this.form.image = null
      this.form.username = ''
      this.form.text = ''
    },
  },
}
</script>
