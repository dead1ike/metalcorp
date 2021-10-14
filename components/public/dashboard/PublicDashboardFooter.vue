<template>
  <div
    class="d-flex flex-row w-100 justify-content-around flex-wrap text-white p-4"
    style="background-color: #252525; z-index: 90"
  >
    <div class="d-flex flex-column p-10">
      <div class="w-100">
        <b-img
          style="width: 200px"
          src="https://thumb.tildacdn.com/tild6536-3538-4137-b034-373731613935/-/resize/130x/-/format/webp/__2_2.png"
        ></b-img>
      </div>
      <div class="pt-10">
        <a class="text-white" href="tel:+79068128175">+7 (906) 812-81-75</a> <br />
        <span>ЕЖЕДНЕВНО с 9:00 до 21:00</span><br />
      </div>
      <div class="pt-7">
        <b-btn class="d-inline-block px-8 py-4" variant="light" to="/zvonok">Заказать звонок</b-btn>
      </div>
    </div>
    <div class="p-10 d-flex flex-column text-left">
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
        <h5 class="text-white designer_dolbaeb m-0 font-weight-light" href="tel:+79068128175">+7 (906) 812-81-75</h5>
        <h5 class="text-white designer_dolbaeb m-0 font-weight-light" href="mailto:info@m-lc.ru">info@m-lc.ru</h5>
      </div>
      <div class="">
        <h5 class="designer_dolbaeb m-0 font-weight-light">Адрес</h5>
        <h5 class="designer_dolbaeb m-0 font-weight-light">г. Екатеринбург,ул. Радищева, 4, офис 611</h5>
      </div>
    </div>
    <div class="d-flex justify-content-between flex-row p-10">
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
      <div class="px-10">
        <public-widget-sidebar-catalog class="designer_dolbaeb" />
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
