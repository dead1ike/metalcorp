<template>
  <div class="overflow-hidden w-100 h-100">
    <div class="w-100 d-flex justify-content-center mt-5">
      <h2>Контакты</h2>
    </div>
    <div class="w-100 d-flex justify-content-center mt-1">
      <b-breadcrumb :items="getItems" style="background-color: white"> </b-breadcrumb>
    </div>
    <div class="d-flex justify-content-center flex-wrap flex-row w-100">
      <div class="d-flex flex-column mx-6 my-3 p-1 shadow-lg bg-light">
        <h4 class="text-center"><b>Телефон</b></h4>
        <div class="d-flex flex-row">
          <div class="m-2">
            <b-avatar variant="secondary" icon="telephone-fill"></b-avatar>
          </div>
          <div class="m-2">
            <div class="font-weight-bold">+7 (906) 812-81-75</div>
            <div>ЕЖЕДНЕВНО с 9:00 до 21:00</div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column mx-6 my-3 p-1 shadow-lg bg-light">
        <h4 class="text-center"><b>Адрес</b></h4>
        <div class="d-flex flex-row">
          <div class="m-2">
            <b-avatar variant="secondary" icon="geo-alt-fill"></b-avatar>
          </div>
          <div>
            <h5 class="ml-2 mt-3 mr-3">г. Екатеринбург, ул. Радищева, д.4, оф. 611</h5>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column mx-6 my-3 p-1 shadow-lg bg-light">
        <h4 class="text-center"><b>Почта</b></h4>
        <div class="d-flex flex-row">
          <div class="m-2">
            <b-avatar variant="secondary" icon="at"></b-avatar>
          </div>
          <div class="ml-2 mt-3 mr-3">
            <h5>info@m-lc.ru</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center w-100 h-100 p-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.8783381042517!2d60.597364416289885!3d56.8308764808554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16ef31d597ead%3A0x7263bd0b41c65518!2z0YPQuy4g0KDQsNC00LjRidC10LLQsCwgNCwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMDE0!5e0!3m2!1sru!2sru!4v1632318528007!5m2!1sru!2sru"
        style="border:0;height: 460px; width: 100%"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div class="d-flex justify-content-center flex-row w-100 h-100">
      <div>
        <h3 class="d-flex justify-content-center">Реквизиты ИП</h3>
        <table class="table table-striped">
          <tbody>
            <tr>
              <td>Полное наименование организации</td>
              <td class="text-right">Индивидуальный предприниматель Зиновьев Владимир Станиславович</td>
            </tr>
            <tr>
              <td>Юридический адрес</td>
              <td class="text-right">620141,РОССИЯ, ОБЛ. СВЕРДЛОВСКАЯ, Г. ЕКАТЕРИНБУРГ ,УЛ. ОЛЬХОВСКАЯ 25/2, КВ. 60</td>
            </tr>
            <tr>
              <td>Фактический адрес</td>
              <td class="text-right">620141,РОССИЯ, ОБЛ. СВЕРДЛОВСКАЯ, Г. ЕКАТЕРИНБУРГ ,УЛ. ОЛЬХОВСКАЯ 25/2, КВ. 60</td>
            </tr>
            <tr>
              <td>ИНН</td>
              <td class="text-right">667802564658</td>
            </tr>
            <tr>
              <td>ОГРНИП</td>
              <td class="text-right">320665800130348</td>
            </tr>
            <tr>
              <td>Номер Р/с</td>
              <td class="text-right">40802810802500108994</td>
            </tr>
            <tr>
              <td>Наименование банка</td>
              <td class="text-right">
                В Филиале Точка Публичного акционерного общества Банка «Финансовая Корпорация Открытие»
              </td>
            </tr>
            <tr>
              <td>Номер К/сч</td>
              <td class="text-right">30101810845250000999</td>
            </tr>
            <tr>
              <td>БИК</td>
              <td class="text-right">044525999</td>
            </tr>
            <tr>
              <td>Телефон</td>
              <td class="text-right">+7 (999) 560-14-48</td>
            </tr>
            <tr>
              <td>Почта</td>
              <td class="text-right">info@m-lc.ru</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <h3 class="d-flex justify-content-center pt-4">Реквизиты ООО</h3>

        <table class="table table-striped">
          <tbody>
            <tr>
              <td>Полное наименование организации</td>
              <td class="text-right">ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «МЕТАЛЛКОРП»</td>
            </tr>
            <tr>
              <td>Юридический адрес</td>
              <td class="text-right">620141,РОССИЯ, ОБЛ. СВЕРДЛОВСКАЯ, Г. ЕКАТЕРИНБУРГ ,УЛ. ОЛЬХОВСКАЯ 25/2, КВ. 56</td>
            </tr>
            <tr>
              <td>Фактический адрес</td>
              <td class="text-right">620141,РОССИЯ, ОБЛ. СВЕРДЛОВСКАЯ, Г. ЕКАТЕРИНБУРГ ,УЛ. ОЛЬХОВСКАЯ 25/2, КВ. 56</td>
            </tr>
            <tr>
              <td>ИНН</td>
              <td class="text-right">6678111118</td>
            </tr>
            <tr>
              <td>КПП</td>
              <td class="text-right">667801001</td>
            </tr>
            <tr>
              <td>ОГРН</td>
              <td class="text-right">1216600004587</td>
            </tr>
            <tr>
              <td>ОКПО</td>
              <td class="text-right">47046899</td>
            </tr>
            <tr>
              <td>Номер Р/с</td>
              <td class="text-right">40702810602500090234</td>
            </tr>
            <tr>
              <td>Наименование банка</td>
              <td class="text-right">
                В Филиале Точка Публичного акционерного общества Банка «Финансовая Корпорация Открытие»
              </td>
            </tr>
            <tr>
              <td>Номер К/сч</td>
              <td class="text-right">30101810845250000999</td>
            </tr>
            <tr>
              <td>БИК</td>
              <td class="text-right">044525999</td>
            </tr>
            <tr>
              <td>Телефон</td>
              <td class="text-right">+7 (906) 812-81-75</td>
            </tr>
            <tr>
              <td>Почта</td>
              <td class="text-right">info@m-lc.ru</td>
            </tr>
            <tr>
              <td>Генеральный директор</td>
              <td class="text-right">Шишигин Владислав Евгеньевич</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getItems() {
      return this.$store.getters['seo/getKontaktyItems']
    },
  },
}
</script>
