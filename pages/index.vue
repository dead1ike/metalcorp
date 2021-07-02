<template>
  <div class="overflow-auto h-100">
    <!--Каруселька №1-->
    <div>
      <div class="shadow d-flex flex-fill">
        <div
          style="
            background-image: url(https://i.ibb.co/ZLRp1Cf/storage2.png);
            background-size: cover;
            background-position: center;
            width: 100%;
          "
          class="text-white d-flex flex-fill flex-column"
        >
          <div class="text-left p-4">
            <h3>Комплексное решение для вашего склада</h3>
          </div>
          <div class="text-left p-4">
            <h1 class="font-weight-bolder">
              Складские стеллажи от производителя с установкой под ключ и гарантией 24 месяца
            </h1>
          </div>
          <div class="pt-8 m-4 text-center text-md-left">
            <b-btn variant="corp" size="lg" class="px-5 py-4" to="/category">Перейти в каталог</b-btn>
          </div>
        </div>
      </div>
    </div>
    <!--Что такое МеталлКорп?-->
    <div class="p-2 mt-4 container-fluid" style="max-width: 1520px">
      <h3>Что такое МеталлКорп?</h3>
    </div>
    <!--Описание МеталлКорпа-->
    <div class="p-2 d-flex flex-row flex-wrap container-fluid" style="max-width: 1520px">
      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">
        <b-img src="https://static.tildacdn.com/tild3339-3939-4032-b633-306336663931/1.svg"></b-img>
        <div class="h5 mt-2 px-3">Бесплатный выезд замерщика, к Вам на склад</div>
      </div>
      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">
        <b-img src="https://static.tildacdn.com/tild3431-3364-4863-a633-316132323966/2.svg"></b-img>
        <div class="h5 mt-2 px-3">Проектирование чертежей(планов расстановки складских стеллажей)</div>
      </div>
      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">
        <b-img src="https://static.tildacdn.com/tild3466-6433-4466-a465-653764613865/3.svg"></b-img>
        <div class="h5 mt-2 px-3">Поставка оборудования напрямую от Производителя</div>
      </div>
      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">
        <b-img src="https://static.tildacdn.com/tild6363-3864-4666-a538-623166313432/4.svg"></b-img>
        <div class="h5 mt-2 px-3">Составление сметы и Коммерческих предложений</div>
      </div>
      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">
        <b-img src="https://static.tildacdn.com/tild3730-6535-4232-a461-626461646463/5.svg"></b-img>
        <div class="h5 mt-0 pb-1 px-3">Реализация оборудования и услуг, исключительно по Договору поставки</div>
      </div>
      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">
        <b-img src="https://static.tildacdn.com/tild6137-3362-4932-b465-623331323439/6.svg"></b-img>
        <div class="h5 mt-n1 pb-1 px-3">Бесплатная доставка в любую точку города от 35 000 руб</div>
      </div>
      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">
        <b-img src="https://static.tildacdn.com/tild6538-6435-4261-a432-316139366233/7.svg"></b-img>
        <div class="h5 mt-2 px-3">Сборка металлических стеллажей и складского оборудования «Под ключ»</div>
      </div>
      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">
        <b-img src="https://static.tildacdn.com/tild6238-6633-4338-a633-323539303030/8.svg"></b-img>
        <div class="h5 mt-2 px-3">24 месяца гарантии и сервисного обслуживания</div>
      </div>
      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">
        <b-img src="https://static.tildacdn.com/tild6463-6138-4033-a531-626237613066/Barcode.svg"></b-img>
        <div class="h4 mt-3 px-3"><h5>Удобные способы оплаты для Юридических и Частных лиц (с НДС и Без)</h5></div>
      </div>
      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">
        <b-btn variant="corp" block href="https://metalcorp.org/">Подробнее о нас</b-btn>
      </div>
    </div>
    <!--Каруселька №2-->
    <div class="mt-4">
      <b-carousel
        class="shadow"
        :interval="1000000"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        img-height="480"
        img-width="1024"
      >
        <b-carousel-slide
          style="
            background-image: url(https://i.ibb.co/hYRmNmT/storagemuzhik.png);
            background-size: cover;
            background-position: center;
            width: 100%;
            height: 580px;
          "
        >
          <div class="h-100">
            <div
              class="position-absolute"
              style="
                background-image: url(https://i.ibb.co/qdd5SM3/man-4.png);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center bottom;
                width: 520px;
                height: 450px;
                right: 0;
                bottom: 0;
                max-width: 100%;
              "
            ></div>
            <div class="text-left position-relative h-100 d-flex flex-column">
              <h3>Бесплатный выезд замерщика</h3>
              <h2 class="font-weight-bolder">Закажите бесплатный выезд замерщика и получите в течении дня</h2>
              <h3 class="mt-3">- Точный замер</h3>
              <h3>- Расчет сметы</h3>
              <h3>- Сроки поставки и установки стеллажей</h3>
              <div class="d-flex align-items-end ml-4 h-100">
                <b-btn variant="corp" size="lg" class="px-5 py-4" @click="openModal()">Оставить заявку</b-btn>
              </div>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <!--Каталог 1-->
    <div>Catalog 1</div>
    <!--Каталог 2-->
    <div>Catalog 2</div>
    <!--Конечная индексной-->
    <div>
      <div class="shadow d-flex flex-fill">
        <div
          style="
            background-image: url(https://thumb.tildacdn.com/tild3631-3733-4561-a139-343061303663/-/format/webp/A4_-_4.jpg);
            background-size: cover;
            background-position: center;
            width: 100%;
          "
          class="position-relative text-white p-3 d-flex flex-fill flex-column"
        >
          <div class="text-center p-4">
            <h2>Затрудняетесь с выбором?</h2>
          </div>
          <div class="text-center p-4">
            <h1 class="font-weight-bolder">Поможем определиться и подобрать лучшие для Вас товары из каталога!</h1>
          </div>
          <div class="pt-4 mb-2 text-center text-md-left">
            <b-btn variant="corp" class="px-5 py-4" size="lg" @click="openModal()">Получить консультацию</b-btn>
          </div>
        </div>
      </div>
    </div>
    <!--Отзывы-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    openModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'dimensionModal',
        modalStatus: true,
      })
    },
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
<style lang="scss">
.carousel-caption {
  height: 100%;
  width: 100%;
  padding: 2.5rem 3rem;
  //h1 {
  //  padding-left: 10px;
  //  padding-right: 10px;
  //  //background: #5472f99e;
  //}
}
</style>
