<template>
  <div class="overflow-auto h-100">
    <div class="text-center font-weight-bold p-4">
      <h2>Потрясающий ассортимент с индивидуальным подбором любой сложности</h2>
    </div>
    <div class="d-flex flex-row">
      <b-card
        title="Металлические стеллажи"
        img-src="https://static.tildacdn.com/tild6264-6238-4736-b463-383331636339/WhatsApp_Image_2020-.jpg"
        style="max-width: 20rem"
        class="shadow-lg mr-2 ml-2"
      >
        <b-btn variant="corp" class="py-3" block><h5 class="font-weight-bold m-0">Подробнее</h5></b-btn>
      </b-card>
      <b-card
        title="Металлические стеллажи"
        img-src="https://static.tildacdn.com/tild6264-6238-4736-b463-383331636339/WhatsApp_Image_2020-.jpg"
        style="max-width: 20rem"
        class="shadow-lg mr-2 ml-2"
      >
        <b-btn variant="corp" class="py-3" block><h5 class="font-weight-bold m-0">Подробнее</h5></b-btn>
      </b-card>
      <b-card
        title="Металлические стеллажи"
        img-src="https://static.tildacdn.com/tild6264-6238-4736-b463-383331636339/WhatsApp_Image_2020-.jpg"
        style="max-width: 20rem"
        class="shadow-lg mr-2 ml-2"
      >
        <b-btn variant="corp" class="py-3" block><h5 class="font-weight-bold m-0">Подробнее</h5></b-btn>
      </b-card>
      <b-card
        title="Металлические стеллажи"
        img-src="https://static.tildacdn.com/tild6264-6238-4736-b463-383331636339/WhatsApp_Image_2020-.jpg"
        style="max-width: 20rem"
        class="shadow-lg mr-2 ml-2"
      >
        <b-btn variant="corp" class="py-3" block><h5 class="font-weight-bold m-0">Подробнее</h5></b-btn>
      </b-card>
      <b-card
        title="Металлические стеллажи"
        img-src="https://static.tildacdn.com/tild6264-6238-4736-b463-383331636339/WhatsApp_Image_2020-.jpg"
        style="max-width: 20rem"
        class="shadow-lg mr-2 ml-2"
      >
        <b-btn variant="corp" class="py-3" block><h5 class="font-weight-bold m-0">Подробнее</h5></b-btn>
      </b-card>
      <b-card
        title="Металлические стеллажи"
        img-src="https://static.tildacdn.com/tild6264-6238-4736-b463-383331636339/WhatsApp_Image_2020-.jpg"
        style="max-width: 20rem"
        class="shadow-lg mr-2 ml-2"
      >
        <b-btn variant="corp" class="py-3" block><h5 class="font-weight-bold m-0">Подробнее</h5></b-btn>
      </b-card>
    </div>
    <b-carousel
      class="shadow-lg mt-3"
      :interval="224000"
      controls
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      img-height="480"
      img-width="1024"
    >
      <b-carousel-slide
        style="
          background-image: url(https://thumb.tildacdn.com/tild3432-6233-4361-a366-633365353231/-/format/webp/A4_-_12.jpg);
          background-size: cover;
          background-position: center;
          width: 100%;
          height: 480px;
        "
      >
        <div class="pt-5 mt-5">
          <h1 class="font-weight-bolder text-right text-white">Большой ассортимент товаров</h1>
          <h1 class="font-weight-bolder text-right text-white">
            Возможность индивидуально подобрать собственный стеллаж
          </h1>
        </div>
      </b-carousel-slide>
      <b-carousel-slide
        style="
          background-image: url(https://thumb.tildacdn.com/tild6135-6165-4531-b562-663464396565/-/format/webp/A4_-_3.jpg);
          background-size: cover;
          width: 100%;
          height: 480px;
        "
      >
        <div class="pt-5 ml-5">
          <h1 class="font-weight-bolder text-center text-white">Оформление заказа за несколько секунд</h1>
          <h1 class="font-weight-bolder text-center text-white">Любой сложности</h1>
        </div>
      </b-carousel-slide>
      <b-carousel-slide
        style="
          background-image: url(https://thumb.tildacdn.com/tild3862-3736-4562-a264-356363353633/-/format/webp/A4_-_10.jpg);
          background-size: cover;
          width: 100%;
          height: 480px;
        "
      >
        <div class="pt-5 ml-5">
          <h1 class="font-weight-bolder text-left text-white">Отличное качество товаров</h1>
          <h1 class="font-weight-bolder text-left text-white">Потрясающие отзывы</h1>
        </div>
      </b-carousel-slide>
      <b-carousel-slide
        style="
          background-image: url(https://thumb.tildacdn.com/tild6430-3734-4263-a263-633362393932/-/format/webp/A4_-_9.jpg);
          background-size: cover;
          width: 100%;
          height: 480px;
        "
      >
        <div class="pt-5 ml-5">
          <h1 class="font-weight-bolder text-left text-white">Индивидуальное оформление заказов</h1>
          <h1 class="font-weight-bolder text-left text-white">Постоянная телефонная связь</h1>
          <h1 class="font-weight-bolder text-left text-white">Поставщики высокого класса</h1>
          <h1 class="font-weight-bolder text-left text-white">И всё это вместе - МеталлКорп!</h1>
        </div>
      </b-carousel-slide>
    </b-carousel>
    <div class="p-3">
      <h2>Каталог</h2>
    </div>
    <div>
      <b-card-group columns>
        <b-card title="Вова, что сюда вставить?" img-src="https://placekitten.com/g/400/450" img-alt="Image" img-top>
          <b-card-text
            >Мы не торгуем котиками, однако временами они попадают на индексные страницы будущих прекрасных проектов
          </b-card-text>
        </b-card>

        <b-card header="Случайный отзыв">
          <blockquote class="blockquote mb-0">
            <p>Я заказал у этих парней более 200 стеллажей за этот год. Парни - красавцы! 10/10</p>
            <footer class="blockquote-footer">
              Андрей Симановский, основатель <cite title="Source Title">"Сима-ленд"</cite>
            </footer>
          </blockquote>
        </b-card>

        <b-card
          title="Кончилась фантазия, поэтому вот вам котики! :)"
          img-src="https://placekitten.com/500/350"
          img-alt="Image"
          img-top
        >
          <b-card-text>Влад, придумай пожалуйста что сюда вставить</b-card-text>
          <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
        </b-card>

        <b-card bg-variant="primary" text-variant="white">
          <blockquote class="card-blockquote">
            <h4>Бесплатный выезд замерщика, к Вам на склад</h4>
            <hr />
            <footer>
              <div>
                <h5>
                  Закажите бесплатный выезд замерщика и получите точный размер со сроками поставки и установки
                  стеллажей:
                </h5>
                <b-form-input placeholder="Введите номер телефона"></b-form-input>
              </div>
              <div>
                <b-btn size="sm" class="mt-2" variant="light" block>Вызвать замерщика</b-btn>
                <small
                  >Нажимая на кнопку, выдаете согласие на обработку персональных данных и соглашаетесь с
                  <a class="text-white" href="https://metalcorp.org/privacypolicy"
                    >Политикой конфиденциальности</a
                  ></small
                >
              </div>
            </footer>
          </blockquote>
        </b-card>

        <b-card>
          <b-card-title>Проектирование чертежей</b-card-title>
          <b-card-text>Планы расстановки складских стеллажей</b-card-text>
          <b-btn variant="outline-corp" block>Подробнее</b-btn>
        </b-card>

        <b-card
          img-src="https://thumb.tildacdn.com/tild6562-6261-4632-b130-656264356533/-/cover/762x628/center/center/-/format/webp/Frame_3.jpg"
          img-alt="Image"
          overlay
        ></b-card>

        <b-card
          img-src="http://mc-stellazhi.ru/upload/iblock/538/53884af185bfbe5292c8af25361af1ab.png"
          img-alt="Image"
          img-top
        >
          <b-card-text class="h4"> Среднегрузовые / Складские стеллажи </b-card-text>
          <b-btn variant="outline-corp" block>Подробнее</b-btn>
        </b-card>
      </b-card-group>
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
