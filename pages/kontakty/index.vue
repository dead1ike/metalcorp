<template>
  <div class="overflow-hidden w-100 h-100">
    <div class="w-100 d-flex justify-content-center mt-5">
      <h2>Контакты</h2>
    </div>
    <div class="w-100 d-flex justify-content-center mt-1">
      <b-breadcrumb :items="getItems" style="background-color: white"> </b-breadcrumb>
    </div>
    <div class="d-flex justify-content-center flex-row w-100">
      <div class="d-flex flex-column mx-6 p-1 shadow-lg bg-light">
        <h4 class="text-center"><b>Телефон</b></h4>
        <div class="d-flex flex-row">
          <div class="m-2">
            <b-avatar variant="secondary" icon="telephone-fill"></b-avatar>
          </div>
          <div class="m-2">
            <div class="font-weight-bold">+7 (906) 812-81-75</div>
            <div>ЕЖЕДНЕВНО с 9:00 до 21:00</div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column mx-6 p-1 shadow-lg bg-light">
        <h4 class="text-center"><b>Адрес</b></h4>
        <div class="d-flex flex-row">
          <div class="m-2">
            <b-avatar variant="secondary" icon="geo-alt-fill"></b-avatar>
          </div>
          <div>
            <h5 class="ml-2 mt-3 mr-3">г. Екатеринбург, ул. Радищева, д.4, оф. 611</h5>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column mx-6 p-1 shadow-lg bg-light">
        <h4 class="text-center"><b>Почта</b></h4>
        <div class="d-flex flex-row">
          <div class="m-2">
            <b-avatar variant="secondary" icon="at"></b-avatar>
          </div>
          <div class="ml-2 mt-3 mr-3">
            <h5>info@m-lc.ru</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center w-100 h-100 p-6">
      <b-img class="shadow-lg w-100" src="https://i.ibb.co/t24tR0S/map.png" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getItems() {
      return this.$store.getters['seo/getKontaktyItems']
    },
  },
}
</script>
