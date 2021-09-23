<template>
  <div class="d-flex">
    <public-widget-sidebar />

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
            <a class="white_button py-4 px-5" href="/category" style="max-width: 156px">Заказать</a>
          </div>
        </div>
      </div>
      <h2 class="p-4 catalog_heading">Каталог</h2>
      <div class="d-flex flex-wrap justify-content-center">
        <public-widget-catalog />
      </div>
      <!--блок3-->
      <div class="d-none d-lg-flex w-100 p-3">
        <div
          class="text-white d-flex block3_banner flex-row align-self-center w-100"
          style="background-image: url(https://i.ibb.co/2P5YRL9/background-2.jpg);background-repeat:no-repeat;background-size: cover"
        >
          <div class="d-flex flex-column w-100">
            <div class="w-100">
              <p class="block3_banner_header">
                Гарантируем качество <br />
                и надежность
              </p>
            </div>
            <div class="block3_banner_text text-wrap">
              <p>
                Закажите бесплатный выезд замерщика
              </p>
            </div>
            <div class="block3_input_header">
              <span>Ваше имя</span>
              <b-form-input
                v-model="form.name"
                class="p-2"
                placeholder="Иван"
                style="max-width: 287px;max-height: 45px"
              ></b-form-input>
            </div>
            <div class="block3_input_header">
              <span>Ваш телефон</span>
              <b-form-input
                v-model="form.phone"
                class="p-2"
                placeholder="Телефон"
                style="max-width: 287px;max-height: 45px"
              ></b-form-input>
            </div>
            <div class="block3_banner_button">
              <a class="ml-2 text-truncate white_button py-4 px-5">Оставить заявку </a>
            </div>
          </div>
          <div class="d-flex flex-column align-items-center" style="margin-right: 250px">
            <div class="w-100 pencil">
              <img
                src="https://i.ibb.co/SxWYs9V/pencil-icon.png"
                alt="pencil"
                style="max-width: 89px;max-height: 89px"
              />
              <p class="mt-4">Точный замер</p>
            </div>
            <div class="w-100 calc">
              <img
                src="https://i.ibb.co/VYc6Ln6/calc-icon.png"
                alt="calc"
                style="max-width: 74px;max-height: 96px;margin-left: 5px"
              />
              <p class="mt-4">Расчет сметы</p>
            </div>
            <div class="w-100 calend">
              <img
                src="https://i.ibb.co/Y87d2Ww/calendar-icon.png"
                alt="calendar"
                style="max-width: 96px;max-height: 96px"
              />
              <p class="mt-3 text-truncate">
                Сроки поставки и <br />
                установки стеллажей
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
            <b-form-input
              v-model="form.name"
              class="px-2"
              placeholder="Имя"
              style="max-width: 287px;max-height: 45px"
            ></b-form-input>
          </div>
          <div class="block3_mobile_button my-2">
            <h5 class="mb-1">Ваш телефон</h5>
            <b-form-input
              v-model="form.phone"
              class="px-2"
              type="tel"
              placeholder="Телефон"
              style="max-width: 287px;max-height: 45px"
            ></b-form-input>
          </div>
          <div class="block3_mobile_button">
            <b-btn
              variant="light"
              class="text-truncate ml-2"
              size="sm"
              style="font-size: 22px; line-height: 26px;padding: 20px 30px 20px 30px"
              >Оставить заявку
            </b-btn>
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
                <p class="block3_banner_header text-wrap" style="font-weight: 700;line-height:77px">
                  У нас вы найдете все<br />
                  необходимые стеллажи
                </p>
              </div>
              <div
                class="block3_banner_text text-wrap"
                style="font-size: 20px;font-weight: 300;letter-spacing: 0,2px;line-height: 31px "
              >
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
            <div class="d-flex flex-column">
              <div class="d-flex justify-content-center">
                <p style="font-size: 24px;line-height: 28px;font-weight: 700">Наши партнеры</p>
              </div>
              <div class="d-flex h-100 justify-content-center align-items-lg-end align-items-center">
                <section id="slider_bl" class="ml-3">
                  <div class="wrapper">
                    <input checked type="radio" name="slider" id="slide1" />
                    <input type="radio" name="slider" id="slide2" />
                    <input type="radio" name="slider" id="slide3" />
                    <input type="radio" name="slider" id="slide4" />
                    <div class="slider-wrapper">
                      <div class="inner">
                        <article>
                          <img src="https://i.ibb.co/cTKpdj1/slide1.png" />
                        </article>
                        <article>
                          <img src="https://i.ibb.co/xmgnfZg/slide2.png" />
                        </article>
                        <article>
                          <img src="https://i.ibb.co/Sdv2Kyv/slide3.png" />
                        </article>
                        <article>
                          <img src="https://i.ibb.co/Tgxfrvd/slide4.png" />
                        </article>
                      </div>
                    </div>
                    <div class="slider-prev-next-control">
                      <label for="slide1"></label>
                      <label for="slide2"></label>
                      <label for="slide3"></label>
                      <label for="slide4"></label>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div class="d-lg-none d-sm-flex">
            <hr />
          </div>
          <div class="vl d-none d-lg-block"></div>
          <div class="d-flex flex-column px-5">
            <div class="block3_banner_text text-wrap" style="font-size: 24px;font-weight: 400;line-height: 29px">
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
          class="d-flex flex-column flex-lg-row text-white"
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.8783381042517!2d60.597364416289885!3d56.8308764808554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16ef31d597ead%3A0x7263bd0b41c65518!2z0YPQuy4g0KDQsNC00LjRidC10LLQsCwgNCwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMDE0!5e0!3m2!1sru!2sru!4v1632318528007!5m2!1sru!2sru"
            style="border:0;height: 460px; width: 100%"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
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
      return this.$store.getters['category/getCategoryItems']
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
    this.$store.dispatch('category/fetchCategory')
    console.warn('helloindex')
    console.warn('categories', this.getCategories)
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
