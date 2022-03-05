<template>
  <div
    class="d-flex flex-row w-100 flex-wrap flex-sm-nowrap justify-content-around text-white p-4 mt-10 pb-10"
    style="background-color: #252525; z-index: 90"
  >
    <div class="d-flex flex-row flex-sm-column p-sm-8 pt-10">
      <div class="w-100 pr-4 p-sm-0">
        <b-img style="max-width: 150px" class="w-100" src="~/static/img/logo1.png"></b-img>
      </div>
      <div class="pl-4 p-sm-0">
        <div class="pt-sm-10 pt-0">
          <a class="text-white" href="tel:+79068128175">+7 (800) 301-62-98</a> <br />
          <span>ЕЖЕДНЕВНО с 9:00 до 21:00</span><br />
        </div>
        <div class="pt-sm-7 pt-4">
          <b-btn class="d-inline-block px-6 py-4 px-sm-8 py-sm-4 text-truncate" variant="light" to="/zvonok"
            >Заказать звонок</b-btn
          >
        </div>
      </div>
    </div>
    <div class="d-flex flex-column-reverse flex-sm-row">
      <!--Obshestvo 3 1-->
      <div class="d-flex flex-column p-sm-8 p-2 text-center text-sm-left">
        <div class="d-flex flex-column w-auto">
          <div>
            <h5 class="designer_dolbaeb font-weight-normal pb-6">
              ОБЩЕСТВО С ОГРАНИЧЕННОЙ <br />
              ОТВЕТСТВЕННОСТЬЮ «МЕТАЛЛКОРП»
            </h5>
          </div>
          <div class="pb-5">
            <h5 class="designer_dolbaeb font-weight-light m-0">ИНН 6678111118</h5>
            <h5 class="designer_dolbaeb font-weight-light m-0">КПП 667801001</h5>
            <h5 class="designer_dolbaeb font-weight-light m-0">ОГРН 1216600004587</h5>
          </div>
          <div class="pb-3">
            <h5 class="text-white designer_dolbaeb m-0 font-weight-light" href="tel:+79068128175">
              +7 (800) 301-62-98
            </h5>
            <h5 class="text-white designer_dolbaeb m-0 font-weight-light" href="mailto:info@m-lc.ru">info@m-lc.ru</h5>
          </div>
          <div class="">
            <h5 class="designer_dolbaeb m-0 font-weight-light">Адрес</h5>
            <h5 class="designer_dolbaeb m-0 font-weight-light">г. Екатеринбург,ул. Радищева, 4, офис 611</h5>
          </div>
        </div>
      </div>
      <div class="d-flex py-8 py-sm-0">
        <!--Nashi obyekti 1 2-->
        <div class="d-flex flex-row p-sm-8 p-2">
          <div class="d-block px-10">
            <h5
              class="designer_dolbaeb m-0 footer_list font-weight-normal pb-8"
              style="text-decoration: none"
              @click="objects()"
            >
              Наши объекты
            </h5>
            <h5
              class="designer_dolbaeb m-0 footer_list font-weight-normal pb-8"
              style="text-decoration: none"
              @click="feedback()"
            >
              Отзывы
            </h5>
            <h5
              class="designer_dolbaeb m-0 footer_list font-weight-normal pb-8"
              style="text-decoration: none"
              @click="job()"
            >
              Сотрудничество
            </h5>
            <h5
              class="designer_dolbaeb m-0 footer_list font-weight-normal pb-8"
              style="text-decoration: none"
              @click="vacancy()"
            >
              Вакансии
            </h5>
            <h5
              class="designer_dolbaeb m-0 footer_list font-weight-normal"
              style="text-decoration: none"
              @click="contacts()"
            >
              Контакты
            </h5>
          </div>
        </div>
        <!--Katalog 2 3-->
        <div class="d-flex flex-row p-sm-8 p-2">
          <public-widget-sidebar-catalog class="designer_dolbaeb" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicDashboardFooter',
  methods: {
    objects() {
      this.$router.push('/obyekty')
    },
    vacancy() {
      this.$router.push('/vakansii')
    },
    feedback() {
      this.$router.push('/otzyvy')
    },
    job() {
      this.$router.push('/sotrudnichestvo')
    },
    contacts() {
      this.$router.push('/kontakty')
    },
  },
}
</script>
