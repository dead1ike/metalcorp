<template>
  <div class="overflow-auto h-100">
    <div class="d-flex flex-row justify-content-between">
      <b-card class="shadow mt-3">
        <!--Металлические стеллажи-->
        <div class="d-flex flex-column">
          <div class="p-2">
            <b-btn block id="metal-racks" class="d-flex justify-content-between" size="sm" variant="outline-corp">
              <b-icon-alarm class="mt-1 mr-2"></b-icon-alarm>
              Металлические стеллажи</b-btn
            >
            <b-popover target="metal-racks" triggers="hover">
              <div class="text-wrap d-flex flex-column">
                <b-btn class="px-2 mb-1" id="archive-racks" variant="outline-corp" size="sm">Архивные стеллажи</b-btn>
                <b-btn class="px-2 mb-1" id="storage-racks" variant="outline-corp" size="sm"
                  >Складские стеллажи / Среднегрузовые</b-btn
                >
                <b-btn class="px-2 mb-1" id="pallet-racks" variant="outline-corp" size="sm"
                  >Паллетные стеллажи / Фронтальные</b-btn
                >
                <b-btn class="px-2 mb-1" id="console-racks" variant="outline-corp" size="sm">Консольные стеллажи</b-btn>
                <b-btn class="px-2 mb-1" id="deep-racks" variant="outline-corp" size="sm">Глубинные стеллажи</b-btn>
                <b-btn class="px-2 mb-1" id="cabel-racks" variant="outline-corp" size="sm"
                  >Стеллажи для кабельной продукции / Катушечные</b-btn
                >
                <b-btn class="px-2 mb-1" id="floor-racks" variant="outline-corp" size="sm"
                  >Стеллажи для напольных покрытий</b-btn
                >
                <b-popover target="archive-racks" triggers="hover">
                  <div class="text-wrap d-flex flex-column">
                    <b-btn class="px-2 mb-1" variant="outline-corp">Стеллажи СТФЛ</b-btn>
                    <b-btn class="px-2 mb-1" variant="outline-corp">Стеллажи СТФ</b-btn>
                    <b-btn class="px-2 mb-1" variant="outline-corp">Стеллажи СТФУ</b-btn>
                    <b-btn class="px-2 mb-1" variant="outline-corp">Стеллажи МС-100</b-btn>
                    <b-btn class="px-2 mb-1" variant="outline-corp">Стеллажи МС</b-btn>
                    <b-btn class="px-2 mb-1" variant="outline-corp">Стеллажи МС-200</b-btn>
                    <b-btn class="px-2 mb-1" variant="outline-corp">Стеллажи MS-Standart</b-btn>
                    <b-btn class="px-2 mb-1" variant="outline-corp">Стеллажи MS-Strong</b-btn>
                    <b-btn class="px-2 mb-1" variant="outline-corp">Стеллажи MS-Hard</b-btn>
                  </div>
                </b-popover>
              </div>
            </b-popover>
          </div>
          <!--Металлическая мебель-->
          <div class="p-2">
            <b-btn block class="d-flex justify-content-between" size="sm" variant="outline-corp">
              <b-icon-alarm class="mt-1 mr-2"></b-icon-alarm>
              <div>Металлическая мебель</div></b-btn
            >
          </div>
          <!--Мезонинные конструкции-->
          <div class="p-2">
            <b-btn block class="d-flex justify-content-between" size="sm" variant="outline-corp">
              <b-icon-alarm class="mt-1 mr-2"></b-icon-alarm>
              <div>Мезонины</div></b-btn
            >
          </div>
          <!--Самонесущие склады-->
          <div class="p-2">
            <b-btn block class="d-flex justify-content-between" size="sm" variant="outline-corp">
              <b-icon-alarm class="mt-1 mr-2"></b-icon-alarm>
              <div>Самонесущие склады</div></b-btn
            >
          </div>
          <!--Складская техника-->
          <div class="p-2">
            <b-btn block class="d-flex justify-content-between" size="sm" variant="outline-corp">
              <b-icon-alarm class="mt-1 mr-2"></b-icon-alarm>
              <div>Складская техника</div></b-btn
            >
          </div>
          <!--Торговые стеллажи-->
          <div class="p-2">
            <b-btn block class="d-flex justify-content-between" size="sm" variant="outline-corp">
              <b-icon-alarm class="mt-1 mr-2"></b-icon-alarm>
              <div>Торговое стеллажи</div></b-btn
            >
          </div>
          <!--Медицинская мебель-->
          <div class="p-2">
            <b-btn block class="d-flex justify-content-between" size="sm" variant="outline-corp">
              <b-icon-alarm class="mt-1 mr-2"></b-icon-alarm>
              <div>Медицинская мебель</div></b-btn
            >
          </div>
          <!--Нейтральное оборудование-->
          <div class="p-2">
            <b-btn block class="d-flex justify-content-between" size="sm" variant="outline-corp">
              <b-icon-alarm class="mt-1 mr-2"></b-icon-alarm>
              <div>Нейтральное оборудование</div></b-btn
            >
          </div>
          <!--Гардеробные системы-->
          <div class="p-2">
            <b-btn block class="d-flex justify-content-between" size="sm" variant="outline-corp">
              <b-icon-alarm class="mt-1 mr-2"></b-icon-alarm>
              <div>Гардеробные системы хранения</div></b-btn
            >
          </div>
        </div>
      </b-card>
      <div>
        <b-card
          class="shadow mr-3 mt-3"
          style="
            background-image: url(https://static.tildacdn.com/tild6236-3364-4665-b965-633736313739/A4_-_6.jpg);
            background-size: cover;

            width: 800px;
            height: 353px;
          "
        >
          <h3 class="font-weight-bold text-white p-3">МеталлКорп</h3>
          <h3 class="font-weight-bold text-white ml-3">Добро пожаловать на наш сайт!</h3>
        </b-card>
      </div>
      <div class="mt-3">
        <b-card class="shadow mb-3">
          <h5>Ваша корзина <b-icon icon="cart4"></b-icon></h5>
          <b-btn block variant="outline-corp"> В корзине : 0</b-btn>
        </b-card>
        <b-card class="shadow mt-3">
          <h5 class="text-center">Наши акции</h5>
          <b-btn block variant="outline-corp"> Подробнее</b-btn>
        </b-card>
        <b-card
          class="shadow mt-3"
          img-src="https://static.tildacdn.com/tild6264-6238-4736-b463-383331636339/WhatsApp_Image_2020-.jpg"
          img-alt="discount"
          style="max-width: 20rem"
        >
          <h5>Стеллаж для склада Стандарт ДМ 750кг</h5>
          <div class="d-flex justify-content-between">
            <h4 style="text-decoration: line-through">2800 руб.</h4>
            <h4>1999 руб.</h4>
          </div>
        </b-card>
      </div>
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
