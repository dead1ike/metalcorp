<template>
  <div class="h-100">
    <div class="w-100 d-flex justify-content-center pt-4">
      <b-breadcrumb :items="getItems" style="background-color: white"> </b-breadcrumb>
    </div>
    <div>
      <div class="feedback_header px-4 pb-5">Сотрудничество</div>
      <div class="d-flex flex-column flex-lg-row px-4 pb-5">
        <div class="w-100 d-flex flex-column">
          <div class="job_header pb-4">Приглашаем дилеров к сотрудничеству</div>
          <div class="job_text pb-5" style="max-width: 648px">
            Компания «METALCORP» заинтересована в расширении сети продаж и приглашает к сотрудничеству компании,
            специализирующиеся на торговле складским и торговым оборудованием.
          </div>
          <div class="job_header2 py-4" style="max-width: 648px">
            Являясь производителем стеллажей, мы предоставляем нашим партнерам максимально выгодные условия:
          </div>
          <div class="job_text d-flex flex-column pt-3">
            <span>-дополнительные скидки по результатам продаж</span>
            <span>-персональный менеджер</span>
            <span>-обучение персонала, шеф-монтаж</span>
            <span>-разработка проектов</span>
            <span>-помощь в ведении сложных заказов</span>
            <span>-информационная поддержка</span>
          </div>
        </div>
        <div class="w-100">
          <b-img src="https://i.ibb.co/gWjrdVH/block1.png" style="max-height: 503px" />
        </div>
      </div>
      <div class="d-flex flex-column flex-lg-row px-4 pb-5">
        <div>
          <b-img src="https://i.ibb.co/s9pNKXb/block2.png" />
        </div>
        <div class="w-100 bg-dark text-white px-6 py-7">
          <div class="job_header pb-4">Веб-мастерам</div>
          <div class="job_text">
            <p>
              Мы приглашаем к сотрудничеству веб-мастеров, владельцев групп и пабликов в соц.сетях, блогеров и любых
              других людей, способных направить целевой трафик и получить за это вознаграждение.
            </p>
            <p>
              Мы работаем по системе CPA - оплата за действие. Вознаграждение Вы получаете за каждый оплаченный заказ.
              Принцип работы такой же, как и в любых CPA-сетях, только вознаграждение больше, т.к. нет посредника.
            </p>
            <div class="d-flex flex-column">
              <span>-Вознаграждение оплачивается за совершенное действие, а именно, оплата заказа. </span>
              <span
                >-Мы даем специальный уникальный персональный ключ (UTM метку), по которому мы идентифицируем, что
                посетитель пришел от вас.
              </span>
              <span>-Метка сохраняется в Cookie на 30 дней </span>
              <span>-Выплаты раз в месяц или по договоренности </span>
              <span>-Рассматриваются любые предложения от веб-мастеров с оплатой за совершенное действие (лид).</span>
            </div>
          </div>
          <div class="job_header3 pt-5">
            <p class="py-2">Вознаграждение 5% Архивные стеллажи</p>
            <p class="py-2">Вознаграждение 7% Грузовые стеллажи</p>
            <p class="py-2">Вознаграждение 10% Палетные стеллажи</p>
            <p class="py-2">Вознаграждение 15% Мезонин</p>
          </div>
          <div class="d-flex flex-column">
            <span class="job_header3">Для групп в соцсетях, Каналы youtube, блгеров: </span>
            <span class="job_text2">Скидки для участников группы, промо-коды</span>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column flex-lg-row px-4 pb-5">
        <div class="w-100">
          <b-img src="https://i.ibb.co/6NzYxkL/block3.png" style="max-height: 503px" />
        </div>
        <div class="w-100 d-flex flex-column">
          <div class="job_header py-4">Производителям стеллажного оборудования</div>
          <div class="job_text pb-5" style="max-width: 648px">
            Также мы приглашаем к взаимовыгодному сотрудничеству компании-производители стеллажного оборудования.
          </div>
          <div class="job_header2 py-4" style="max-width: 648px">
            Мы ценим долгосрочные, взаимовыгодные отношения, залогом которых является прозрачность и ясность
            сотрудничества. Наша компания предоставляет ряд серьезных гарантий и преимуществ. Мы открыты для новых
            партнерских отношений.
          </div>
        </div>
      </div>
      <div class="px-4 py-5">
        <div class="shadow d-flex flex-column flex-lg-row">
          <div class="w-100 d-flex flex-column px-4 py-3">
            <div class="vacancy_form_header1">Плюсы сотрудничества с нами</div>
            <div class="vacancy_text1 py-4">
              <p>-Отсутствие жестких планов по обороту</p>
              <p>-Оформление точек продаж</p>
              <p>-Наличие собственных складов и т.д.</p>
            </div>
            <div class="vacancy_text2 pt-3">
              Мы предлагаем гибкий подход в решении всех возникающих в ходе взаимодействия вопросов. Адекватная ценовая
              юполитика также благоприятствует развитию партнерских отношений.
            </div>
          </div>
          <div class="w-100 bg-dark d-flex flex-column text-white px-4 py-3">
            <div class="vacancy_form_header1">Хотите узнать больше о наших услугах и предложениях для партнеров?</div>
            <div class="vacancy_form_header2">Закажите обратный звонок!</div>
            <div class="d-flex flex-row pt-5 pb-5">
              <div class="d-flex flex-column pr-6">
                <div class="vacancy_right_heading">Почта:</div>
                <div class="vacancy_right_text pt-3">info@m-lc.ru</div>
              </div>
              <div class="d-flex flex-column">
                <div class="vacancy_right_heading">Телефон:</div>
                <div class="vacancy_right_text pt-3">+7 (906) 812-81-75</div>
              </div>
            </div>
            <div class="pt-3">
              <a class="white_button d-inline-block px-5 py-3">Заказать звонок</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <public-dashboard-footer />
  </div>
</template>

<style></style>

<script>
export default {
  name: 'PublicJobManage',
  computed: {
    getItems() {
      return this.$store.getters['seo/getSotrudnichestvoItems']
    },
  },
  methods: {
    openModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'dimensionModal',
        modalStatus: true,
      })
    },
  },
}
</script>
