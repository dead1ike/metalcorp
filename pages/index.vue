<template>
  <div class="overflow-auto h-100">
    <div class="p-2">
      <b-carousel
        class="shadow"
        :interval="224000"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        img-height="480"
        img-width="1024"
        indicators
      >
        <b-carousel-slide
          style="
            background-image: url(https://i.ibb.co/ZLRp1Cf/storage2.png);
            background-size: cover;
            background-position: center;
            width: 100%;
            height: 580px;
          "
        >
          <div class="text-left">
            <h3>Комплексное решение для вашего склада</h3>
          </div>
          <div class="text-left">
            <h1 class="font-weight-bolder">
              Складские стеллажи от производителя с установкой под ключ и гарантией 24 месяца
            </h1>
          </div>
        </b-carousel-slide>
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
                background-image: url(https://i.ibb.co/JxD9JX4/man-4.png);
                background-size: cover;
                background-position: center;
                width: 520px;
                height: 450px;
                right: 0;
                bottom: 0;
              "
            ></div>
            <div class="text-left position-relative h-100 d-flex flex-column">
              <h3>Бесплатный выезд замерщика</h3>
              <h2 class="font-weight-bolder">Закажите бесплатный выезд замерщика и получите в течении дня</h2>
              <h3 class="mt-3">- Точный замер</h3>
              <h3>- Расчет сметы</h3>
              <h3>- Сроки поставки и установки стеллажей</h3>
              <div class="d-flex align-items-end h-100">
                <b-btn variant="corp" size="lg" class="px-5 py-4" @click="">Оставить заявку</b-btn>
              </div>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="p-2 shadow">
      <h3>Категории</h3>
      <b-carousel
        id="carousel-2"
        v-model="slide"
        :interval="4000"
        indicators
        background="#0000"
        img-width="1024"
        img-height="280"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide img-blank img-alt="Blank Image">
          <div class="border d-flex flex-row w-100">
            <div class="d-flex p-2 flex-column">
              <div class="w-100 text-black h4">Стеллаж вида "СТФЛ"</div>
              <div
                style="
                  background-image: url(https://i.ibb.co/PTDpxT0/ms.jp);
                  background-position: center;
                  background-size: cover;
                  height: 245px;
                  width: 100%;
                "
              ></div>
              <b-btn variant="corp" class="mt-2">Заказать</b-btn>
            </div>
            <div class="d-flex p-2 flex-column">
              <div class="w-100 text-black h4">Стеллаж вида "СТФЛ"</div>
              <div
                style="
                  background-image: url(https://i.ibb.co/PTDpxT0/ms.jp);
                  background-position: center;
                  background-size: cover;
                  height: 245px;
                  width: 100%;
                "
              ></div>
              <b-btn variant="corp" class="mt-2">Заказать</b-btn>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
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
