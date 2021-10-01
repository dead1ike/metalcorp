<template>
  <div class="h-100">
    <div class="w-100 d-flex justify-content-center pt-4">
      <b-breadcrumb :items="getItems" style="background-color: white"> </b-breadcrumb>
    </div>
    <div>
      <div class="pt-5 px-5 feedback_header">Отзывы</div>
      <div class="px-5 py-5" v-for="itemFeedback in getFeedbackItems" :key="itemFeedback.uuid">
        <div class="px-4 py-5 shadow d-flex flex-column">
          <div class="d-flex flex-row">
            <div class="feedback_rate px-3 mr-2 py-1 text-center" style="max-width: 47px; max-height: 34px">5</div>
            <div class="feedback_name">{{ itemFeedback.username }}</div>
          </div>
          <div class="feedback_text pt-4">{{ itemFeedback.text }}</div>
          <div class="pt-5">
            <b-img :src="itemFeedback.image" style="max-height: 212px" />
          </div>
        </div>
      </div>
      <div class="py-5">
        <div class="feedback_form_header">Оставьте свой отзыв</div>
        <div class="px-5 pt-2">
          <div class="px-4 shadow d-flex flex-column" style="max-width: 757px">
            <div class="pt-4" style="max-width: 344px">
              <p class="feedback_form_text">Ваше имя</p>
              <b-form-input v-model="form.username"></b-form-input>
            </div>
            <div class="pt-4" style="max-width: 344px">
              <p class="feedback_form_text">Ваш номер телефона</p>
              <b-form-input></b-form-input>
            </div>
            <div class="pt-4" style="max-width: 690px">
              <p class="feedback_form_text">Ваш отзыв</p>
              <b-form-textarea v-model="form.text"></b-form-textarea>
            </div>
            <div class="pt-4">
              <p class="feedback_form_text">
                Оцените от 1 до 5, на сколько вы<br />
                довольны сотрудничеством с нами?
              </p>
              <b-input-group style="max-width: 370px">
                <b-form-rating inline color="#5B95ED" v-model="form.value"></b-form-rating>
              </b-input-group>
            </div>
            <div class="py-5">
              <p class="feedback_form_text">Прикрепите фото</p>
              <b-file v-model="form.image" plain></b-file>
            </div>
            <div class="pt-4">
              <p class="black_button px-5 py-3 d-inline-block">Отправить</p>
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

<style>
.gradient {
  background: linear-gradient(270deg, rgba(84, 114, 249, 0) 0, rgba(84, 114, 249, 0.2) 98%);
  opacity: 1;
  border-left: 4px solid #5472f9;
}
</style>
