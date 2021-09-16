<template>
  <div class="d-flex">
    <div class="sidebar d-none d-lg-block">
      <span>Каталог</span>
      <div v-for="item in getCategories">
        <p class="catalog" v-if="item.uuid !== null" :key="item.uuid" @click="toCategory(item)">{{ item.title }}</p>
      </div>
      <div style="margin-top: 150px">
        <p class="h5 px-3" style="color:white">+7 (906) 812-81-75</p>
        <p class="h6 px-3" style="color:white">Ежедневно с 9:00 до 21:00</p>
        <b-btn class="mx-3 mt-4" variant="light" style="font-weight: 700" @click="call()">Заказать звонок</b-btn>
      </div>
    </div>

    <div class="overflow-auto h-100 container__main">
      <div class="shadow d-flex flex-fill">
        <div
          style="
              background-image: url(https://i.ibb.co/Vgb03MM/background-1.jpg);
              background-size: cover;
              background-position: right 35% bottom 50%;
              width: 100%;

            "
          class="text-white d-flex flex-fill flex-column banner justify-content-center"
        >
          <div>
            <p class="banner_header text-wrap">
              Комплексное решение<br />
              для вашего склада
            </p>
          </div>
          <div class="banner_text text-wrap">
            <p>
              Складские стеллажи от производителя с установкой под ключ<br />
              и гарантией 24 месяца
            </p>
          </div>
          <div class="banner_button">
            <b-btn variant="black" size="lg" class="px-lg-5 py-4" to="/category">Заказать</b-btn>
          </div>
        </div>
      </div>
      <h2 class="p-4" style="font-weight: 700;font-size: 40px">Каталог</h2>
      <div class="d-flex flex-wrap justify-content-around">
        <div
          class="p-3 m-2 d-flex flex-column justify-content-between"
          v-for="item in getCategories"
          v-if="item.uuid !== null"
          :key="item.uuid"
          style="max-width: 300px; max-height: 400px; border: black solid 1px"
        >
          <div>
            <h4 style="font-weight: 700">{{ item.title }}</h4>
          </div>
          <div class="align-self-center p-3" style="min-height: 200px">
            <img :src="item.image" alt="1" style="max-height: 200px" />
          </div>
          <div class="align-self-center">
            <b-btn variant="black" @click="toCategory(item)">Подробнее</b-btn>
          </div>
        </div>
      </div>
      <!--блок3-->
      <div class="d-none d-lg-flex w-100 p-3">
        <div
          class="text-white d-flex flex-fill block3_banner flex-row justify-content-around align-self-center w-100"
          style="background-image: url(https://i.ibb.co/2P5YRL9/background-2.jpg);background-repeat:no-repeat;background-size: cover"
        >
          <div class="d-flex flex-column w-100 justify-content-around">
            <div>
              <p class="block3_banner_header text-wrap">
                Гарантируем качество<br />
                и надежность
              </p>
            </div>
            <div class="block3_banner_text text-wrap">
              <p>
                Закажите бесплатный выезд замерщика
              </p>
            </div>
            <div class="block3_banner_button">
              <h5 class="mb-1">Ваше имя</h5>
              <b-form-input v-model="form.name" class="p-2" placeholder="Имя" style="max-width: 400px"></b-form-input>
            </div>
            <div class="block3_banner_button">
              <h5 class="mb-1">Ваш телефон</h5>
              <b-form-input
                v-model="form.phone"
                class="p-2"
                placeholder="Телефон"
                style="max-width: 400px"
              ></b-form-input>
            </div>
            <div class="block3_banner_button">
              <b-btn variant="light" class="px-lg-5 py-4">Оставить заявку</b-btn>
            </div>
          </div>
          <div class="d-flex flex-column w-100 justify-content-around align-items-center" style="margin-left: 450px">
            <div class="w-100">
              <img
                src="https://i.ibb.co/SxWYs9V/pencil-icon.png"
                alt="pencil"
                style="max-width: 89px;max-height: 89px"
              />
              <p class="h3 mt-4" style="font-weight: 700">Точный замер</p>
            </div>
            <div class="w-100">
              <img src="https://i.ibb.co/VYc6Ln6/calc-icon.png" alt="calc" style="max-width: 74px;max-height: 96px" />
              <p class="h3 mt-4" style="font-weight: 700">Расчет сметы</p>
            </div>
            <div class="w-100">
              <img
                src="https://i.ibb.co/Y87d2Ww/calendar-icon.png"
                alt="calendar"
                style="max-width: 96px;max-height: 96px"
              />
              <p class="h3 mt-4" style="font-weight: 700">
                Сроки поставки <br />
                и установки стеллажей
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex d-lg-none flex-column w-100">
        <div
          class="text-white d-flex flex-fill flex-column justify-content-center"
          style="background-image: url(https://i.ibb.co/8MGDwfN/block3-left.jpg);background-repeat:no-repeat;background-size: cover"
        >
          <div>
            <p class="block3_mobile_header text-wrap">
              Гарантируем качество<br />
              и надежность
            </p>
          </div>
          <div class="block3_mobile_text text-wrap">
            <p>
              Закажите бесплатный выезд замерщика
            </p>
          </div>
          <div class="block3_mobile_button my-2">
            <h5 class="mb-1">Ваше имя</h5>
            <b-form-input v-model="form.name" class="px-2" placeholder="Имя" style="max-width: 400px"></b-form-input>
          </div>
          <div class="block3_mobile_button my-2">
            <h5 class="mb-1">Ваш телефон</h5>
            <b-form-input
              v-model="form.phone"
              class="px-2"
              type="tel"
              placeholder="Телефон"
              style="max-width: 400px"
            ></b-form-input>
          </div>
          <div class="block3_mobile_button">
            <b-btn variant="light" size="sm" class="px-lg-5 py-3 my-2">Оставить заявку</b-btn>
          </div>
        </div>
        <div
          class="text-white d-flex flex-column justify-content-center"
          style="background-image: url(https://i.ibb.co/p2HCpp9/block3-right.jpg);background-repeat:no-repeat;background-size: cover"
        >
          <div class="d-flex flex-row justify-content-around w-100">
            <div class="w-100 d-flex flex-column align-items-center mt-2">
              <img
                src="https://i.ibb.co/SxWYs9V/pencil-icon.png"
                alt="pencil"
                style="max-width: 89px;max-height: 89px"
              />
              <p class="h3 text-center" style="font-weight: 700;margin-top: 28px">Точный замер</p>
            </div>
            <div class="w-100 d-flex flex-column align-items-center mt-2">
              <img src="https://i.ibb.co/VYc6Ln6/calc-icon.png" alt="calc" style="max-width: 74px;max-height: 96px" />
              <p class="h3 mt-4 text-center" style="font-weight: 700">Расчет сметы</p>
            </div>
          </div>
          <div class="w-100 justify-content-center align-items-center flex-column d-flex">
            <img
              src="https://i.ibb.co/Y87d2Ww/calendar-icon.png"
              alt="calendar"
              style="max-width: 96px;max-height: 96px"
            />
            <p class="h3 mt-4 text-center" style="font-weight: 700">
              Сроки поставки <br />
              и установки стеллажей
            </p>
          </div>
        </div>
      </div>
      <!--      блок 4-->
      <div class="p-3">
        <div class="d-flex flex-column flex-lg-row p-3" style="box-shadow: #00000050 0 0 10px">
          <div class="d-flex flex-column justify-content-around flex-fill pr-5">
            <div class="py-sm-3">
              <div>
                <p class="block3_banner_header text-wrap" style="font-size: 40px">
                  У нас вы найдете все<br />
                  необходимые стеллажи
                </p>
              </div>
              <div class="block3_banner_text text-wrap">
                <p>
                  Наша компания является ведущим дилером крупнейших производителей, систем складского хранения, по всей
                  территории РФ!
                </p>
                <p>
                  Компания «МЕТАЛЛКОРП» предлагает для Вас комплексное решение по организации складского пространства,
                  начиная от выезда специалиста к вам на склад, составления коммерческого предложения, заканчивая
                  поставкой складского оборудования и его установкой.
                </p>
                <p>
                  Более 5 лет мы реализуем проекты наших заказчиков! Нам доверяют более 100 компаний по всей территории
                  РФ, от малых предприятий, до крупнейших изготовителей и поставщиков - таких как: Сбер-Маркет, OZON,
                  Яндекс-Маркет, МАГНИТ, СДЭК, Деловые-Линии и др.
                </p>
              </div>
            </div>
            <div
              class="d-flex flex-column flex-lg-row h-100 justify-content-around align-items-lg-end align-items-center"
            >
              <img src="https://i.ibb.co/ZHntwqp/yandex-logo.jpg" class="py-2" />

              <img src="https://i.ibb.co/4mpvp3B/cdek.jpg" class="py-2" />

              <img src="https://i.ibb.co/Swy9Q6x/dl.jpg" class="py-2" />
            </div>
          </div>
          <div class="d-lg-none d-sm-flex"><hr /></div>
          <div class="vl d-none d-lg-block"></div>
          <div class="d-flex flex-column px-5">
            <div class="block3_banner_text text-wrap">
              <p>
                Поставка оборудования напрямую от производителя
              </p>
              <p>
                Сборка металлических стеллажей и складского оборудования «под ключ»
              </p>
              <p>
                24 месяца гарантии и сервисного обслуживания
              </p>
              <p>
                Бесплатный выезд замерщика, к Вам на склад
              </p>
              <p>
                Проектирование чертежей(планов расстановки складских стеллажей)
              </p>
              <p>
                Реализация оборудования и услуг, исключительно по договору поставки
              </p>
              <p>
                Удобные способы оплаты для Юридических и Частных лиц (с НДС и Без)
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--      блок 5-->
      <div class="p-3">
        <div
          class="d-flex flex-column flex-lg-row p-3 text-white"
          style="box-shadow: #00000050 0 0 10;background-color: #454545"
        >
          <div class="d-flex flex-column" style="padding: 50px">
            <h3>Мы находимся</h3>
            <p style="font-weight: 500; font-size: 20px;color: #5B95ED; padding: 40px 0 0 0">Адрес:</p>
            <p>г. Екатеринбург, ул. Радищева, д.4, оф.661</p>
            <p style="font-weight: 500; font-size: 20px;color: #5B95ED; padding: 40px 0 0 0">Телефон:</p>
            <p>+7 (906) 812-81-75</p>
            <p>Ежедневно с 9:00 до 21:00</p>
          </div>
          <div class="d-none d-lg-flex">
            <img src="https://i.ibb.co/SxbBmKM/location.png" alt="1" />
          </div>
          <div class="d-sm-flex d-lg-none">
            <img src="https://i.ibb.co/D7sFZjN/location-mobile.png" alt="1" />
          </div>
        </div>
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
      show: true,
      slidePage: 0,
      slideCount: 4,
      slideCurrent: 0,
      form: {
        phone: '',
        name: '',
      },
    }
  },
  computed: {
    getCategories() {
      return this.$store.getters['category/getCategoryItems'].filter(item => {
        return item.parent_uuid === null
      })
    },
    getSubCategories() {
      return this.$store.getters['category/getCategoryItems'].filter(item => {
        return item.parent_uuid !== null
      })
    },
    getTestItems() {
      return this.$store.getters['type/getTypes']
    },
    isPageMax() {
      return this.getTestItems.length / this.slideCount <= this.slidePage + 1
    },
    showSlides() {
      const slideCurrent = this.slidePage * this.slideCount
      const slides = this.getTestItems.slice(slideCurrent, this.slideCount + slideCurrent)
      if (slides.length < this.slideCount) {
        // this.slidePage = 1
        slides.concat(slides, this.getTestItems.slice(0, this.slideCount))
      }
      return slides
    },
  },
  mounted() {
    this.$store.dispatch('category/fetchCategory').then(() => {
      return this.getCategories
    })
    console.warn('categories', this.getCategories)
    console.warn('subcategories', this.getSubCategories)
  },
  methods: {
    call() {
      this.$store.commit('setActiveModal', {
        modalName: 'dimensionModal',
        modalStatus: true,
      })
    },
    toCategory(item) {
      this.$router.push(`/category/${item.uuid}`)
    },
    description(item) {
      this.$router.push(`/product/${item.uuid}/${item.slug}`)
    },
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
