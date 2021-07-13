<template>
  <div class="overflow-hidden w-100 h-100">
    <div class="w-100 d-flex justify-content-center mt-5">
      <h2>Сотрудничество</h2>
    </div>
    <div class="w-100 d-flex justify-content-center mt-1">
      <b-breadcrumb :items="getItems" style="background-color: white"> </b-breadcrumb>
    </div>
    <div class="d-flex h-100 flex-column align-items-center">
      <div>
        <h4 class="my-3 ml-2"><b>Приглашаем дилеров к сотрудничеству</b></h4>
        <p class="m-3">
          Компания «METALCORP» заинтересована в расширении сети продаж и приглашает к сотрудничеству компании,
          специализирующиеся на торговле складским и торговым оборудованием.
        </p>
        <h4 class="my-3 ml-2">
          <b>Являясь производителем стеллажей, мы предоставляем нашим партнерам максимально выгодные условия:</b>
        </h4>
        <div class="border rounded-lg bg-light p-3 mx-3 mb-5">
          <ul>
            <li>дополнительные скидки по результатам продаж</li>
            <li>персональный менеджер</li>
            <li>обучение персонала, шеф-монтаж</li>
            <li>разработка проектов</li>
            <li>помощь в ведении сложных заказов</li>
            <li>информационная поддержка</li>
          </ul>
        </div>
        <div class="rounded-lg bg-corp text-center text-white p-4 mx-3">
          Плюсы сотрудничества с нами – это отсутствие жестких планов по обороту, оформлению точек продаж, наличию
          собственных складов и т.п. Мы предлагаем гибкий подход в решении всех возникающих в ходе взаимодействия
          вопросов. Адекватная ценовая юполитика также благоприятствует развитию партнерских отношений.
        </div>
      </div>
      <div>
        <div class="text-center m-4 d-flex flex-wrap flex-column p-4 mx-3">
          <p class="h4"><b>Производителям стеллажного оборудования</b></p>
          <p>Также мы приглашаем к взаимовыгодному сотрудничеству компании-производители стеллажного оборудования.</p>
          <h4><b>Преимущества сотрудничества с компанией «METALCORP»</b></h4>
        </div>
        <div class="border rounded-lg bg-light p-3 mx-3 mb-5 ">
          <b-img class="m-2" src="https://i.ibb.co/MPgT7nc/li1.png" />
          <p class="mt-3">
            Мы ценим долгосрочные, взаимовыгодные отношения, залогом которых является прозрачность и ясность
            сотрудничества. Наша компания предоставляет ряд серьезных гарантий и преимуществ. Мы открыты для новых
            партнерских отношений.
          </p>
        </div>
        <div class="border rounded-lg bg-light p-3 mx-3 mb-5">
          <b-img class="m-2" src="https://i.ibb.co/mSntwRM/li2.png" />
          <p class="mt-3">
            Мы ценим долгосрочные, взаимовыгодные отношения, залогом которых является прозрачность и ясность
            сотрудничества. Наша компания предоставляет ряд серьезных гарантий и преимуществ. Мы открыты для новых
            партнерских отношений.
          </p>
        </div>
        <div class="border rounded-lg bg-light p-3 mx-3 mb-5 ">
          <b-img class="m-2" src="https://i.ibb.co/KmWhY6y/li3.png" />
          <p class="mt-3">
            Мы ценим долгосрочные, взаимовыгодные отношения, залогом которых является прозрачность и ясность
            сотрудничества. Наша компания предоставляет ряд серьезных гарантий и преимуществ. Мы открыты для новых
            партнерских отношений.
          </p>
        </div>
        <div class="border rounded-lg bg-light p-3 mx-3 mb-5">
          <b-img class="m-2" src="https://i.ibb.co/Xscdfkz/li4.png" />
          <p class="mt-3">
            Мы ценим долгосрочные, взаимовыгодные отношения, залогом которых является прозрачность и ясность
            сотрудничества. Наша компания предоставляет ряд серьезных гарантий и преимуществ. Мы открыты для новых
            партнерских отношений.
          </p>
        </div>
        <div class="rounded-lg bg-corp text-center text-white p-4 mx-3">
          <h4 class="text-white"><b>Чтобы узнать больше о наших услугах и предложениях для партнеров</b></h4>
          <div class="d-flex flex-row mt-4 flex-wrap justify-content-around">
            <div class="d-flex flex-row m-3">
              <div class="m-2">
                <b-avatar variant="warning"> <b-icon variant="corp" scale="1.5" icon="at"></b-icon></b-avatar>
              </div>
              <div class="ml-2 mt-3 mr-3">
                <h5>info@m-lc.ru</h5>
              </div>
            </div>
            <div class="d-flex flex-row m-3">
              <div class="m-2">
                <b-avatar variant="warning">
                  <b-icon variant="corp" scale="1.2" icon="telephone-fill"></b-icon
                ></b-avatar>
              </div>
              <div class="ml-2 mt-3 mr-3">
                <h5>+7 (906) 812-81-75</h5>
              </div>
            </div>
            <b-btn pill variant="warning" @click="openModal">Заказать звонок</b-btn>
          </div>
        </div>
      </div>
      <div>
        <div class="text-center m-4">
          <h3><b>Веб мастерам</b></h3>
          <div class="d-flex flex-row mt-3">
            <div class="mx-2 text-center">
              <p>
                Мы приглашаем к сотрудничеству веб-мастеров, владельцев групп и пабликов в соц.сетях, блогеров и любых
                других людей, способных направить целевой трафик и получить за это вознаграждение.
              </p>
            </div>
            <div class="mx-2 text-center">
              <p>
                Мы работаем по системе CPA - оплата за действие. Вознаграждение Вы получаете за каждый оплаченный заказ.
                Принцип работы такой же, как и в любых CPA-сетях, только вознаграждение больше, т.к. нет посредника.
              </p>
            </div>
          </div>
        </div>
        <h4 class="my-2"><b>Для веб-мастеров:</b></h4>
        <div class="border bg-light rounded-lg p-3 mx-3 mb-5">
          <ul>
            <li>Вознаграждение оплачивается за совершенное действие, а именно, оплата заказа.</li>
            <li>
              Мы даем специальный уникальный персональный ключ (UTM метку), по которому мы идентифицируем, что
              посетитель пришел от вас.
            </li>
            <li>Метка сохраняется в Cookie на 30 дней</li>
            <li>Выплаты раз в месяц или по договоренности</li>
            <li>Рассматриваются любые предложения от веб-мастеров с оплатой за совершенное действие (лид).</li>
          </ul>
        </div>
        <h4 class="my-2"><b>Вознаграждение и условия:</b></h4>
        <div class="border bg-light rounded-lg p-3 mx-3 mb-5">
          <ul>
            <li>Вознаграждение 5% Архивные стеллажи</li>
            <li>Вознаграждение 7% Грузовые стеллажи</li>
            <li>Вознаграждение 10% Палетные стеллажи</li>
            <li>Вознаграждение 15% Мезонин</li>
          </ul>
          <b class="text-corp">Для групп в соцсетях, Каналы youtube, блгеров:</b>
          <ul>
            <li>Скидки для участников группы, промо-коды</li>
          </ul>
        </div>
        <div class="rounded-lg bg-corp text-center text-white p-4 mx-3">
          <h4 class="text-white"><b>Чтобы узнать больше о наших услугах и предложениях для партнеров</b></h4>
          <div class="d-flex flex-row mt-4 flex-wrap justify-content-around">
            <div class="d-flex flex-row m-3">
              <div class="m-2">
                <b-avatar variant="warning"> <b-icon variant="corp" scale="1.5" icon="at"></b-icon></b-avatar>
              </div>
              <div class="ml-2 mt-3 mr-3">
                <h5>info@m-lc.ru</h5>
              </div>
            </div>
            <div class="d-flex flex-row m-3">
              <div class="m-2">
                <b-avatar variant="warning">
                  <b-icon variant="corp" scale="1.2" icon="telephone-fill"></b-icon
                ></b-avatar>
              </div>
              <div class="ml-2 mt-3 mr-3">
                <h5>+7 (906) 812-81-75</h5>
              </div>
            </div>
            <b-btn pill variant="warning" @click="openModal">Заказать звонок</b-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

https://i.ibb.co/mSntwRM/li2.png https://i.ibb.co/KmWhY6y/li3.png https://i.ibb.co/Xscdfkz/li4.png
https://i.ibb.co/MPgT7nc/li1.png
