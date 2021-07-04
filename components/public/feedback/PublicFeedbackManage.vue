<template>
  <div class="overflow-hidden w-100 h-100">
    <div class="w-100 d-flex justify-content-center mt-5">
      <h2>Отзывы</h2>
    </div>
    <div class="w-100 d-flex justify-content-center mt-1">
      <b-breadcrumb :items="getItems" style="background-color: white"> </b-breadcrumb>
    </div>
    <div class="d-flex flex-column w-100">
      <div>
        <div class="d-flex flex-column m-3">
          <h4>Ваше имя:</h4>
          <b-input v-model="form.username" placeholder="Введите свое имя"></b-input>
        </div>
        <div class="d-flex flex-column m-3">
          <h4>Ваш отзыв:</h4>
          <b-textarea v-model="form.text" placeholder="Введите ваш отзыв или предложеие"></b-textarea>
        </div>
        <div class="d-inline-flex flex-row align-self-center ml-3">
          <b-file v-model="form.image" plain></b-file>
        </div>
        <div class="m-3">
          <b-btn variant="corp" @click="sendFeedback()">Отправить</b-btn>
        </div>
      </div>
      <div>
        <h4 class="m-2">Отзывы:</h4>
        <div v-if="getFeedbackItems.length !== 0" class="d-flex flex-column m-2">
          <div v-for="item in getFeedbackItems">
            <div v-if="item.uuid !== null" :key="item.uuid">
              <div class="gradient">
                <h2 class="m-0">{{ item.username }}</h2>
              </div>
              <div class="p-2 m-4 text-break">
                <h4 class="m-0">{{ item.text }}</h4>
              </div>
              <div v-if="item.image" class="p-2 m-4 text-break">
                <b-img :src="item.image" style="max-width: 500px; max-height: 500px" />
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <b>Здесь пока нет ни одного отзыва</b>
        </div>
      </div>
    </div>
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
