<template>
  <div class="h-100">
    <div class="w-100 d-flex justify-content-center pt-4">
      <b-breadcrumb :items="getItems" style="background-color: white"> </b-breadcrumb>
    </div>
    <div class="px-5 pt-5 feedback_header">Контакты</div>
    <div class="px-5 py-5 d-flex w-100 flex-column flex-lg-row">
      <div class="py-2 px-4 w-100 d-flex flex-column bg-dark text-white" style="max-height: 290px">
        <div class="py-2">
          <p class="block5_heading">Адрес:</p>
          <p class="contact_text">г. Екатеринбург, ул. Радищева, д.4, оф. 611</p>
        </div>
        <div class="py-2">
          <p class="block5_heading">Телефон:</p>
          <p class="mb-1 contact_text">+7 (906) 812-81-75</p>
          <p class="contact_text">Ежедневно с 9:00 до 21:00</p>
        </div>
        <div class="py-2">
          <p class="block5_heading">Почта:</p>
          <p class="contact_text">info@m-lc.ru</p>
        </div>
      </div>
      <div class="w-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.8783381042517!2d60.597364416289885!3d56.8308764808554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16ef31d597ead%3A0x7263bd0b41c65518!2z0YPQuy4g0KDQsNC00LjRidC10LLQsCwgNCwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMDE0!5e0!3m2!1sru!2sru!4v1632318528007!5m2!1sru!2sru"
          style="border: 0; height: 290px; width: 100%"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <div class="px-5 py-5 feedback_header">Реквизиты</div>
    <div class="d-flex flex-column flex-lg-row">
      <div class="w-100 px-5">
        <div class="shadow">
          <table class="table">
            <tbody>
              <tr>
                <td class="table_heading">Полное наименование организации</td>
                <td class="table_text">Индивидуальный предприниматель Зиновьев Владимир Станиславович</td>
              </tr>
              <tr>
                <td class="table_heading">Юридический адрес</td>
                <td class="table_text">
                  620141,РОССИЯ, ОБЛ. СВЕРДЛОВСКАЯ, Г. ЕКАТЕРИНБУРГ ,УЛ. ОЛЬХОВСКАЯ 25/2, КВ. 60
                </td>
              </tr>
              <tr>
                <td class="table_heading">Фактический адрес</td>
                <td class="table_text">
                  620141,РОССИЯ, ОБЛ. СВЕРДЛОВСКАЯ, Г. ЕКАТЕРИНБУРГ ,УЛ. ОЛЬХОВСКАЯ 25/2, КВ. 60
                </td>
              </tr>
              <tr>
                <td class="table_heading">ИНН</td>
                <td class="table_text">667802564658</td>
              </tr>
              <tr>
                <td class="table_heading">ОГРНИП</td>
                <td class="table_text">320665800130348</td>
              </tr>
              <tr>
                <td class="table_heading">Номер Р/с</td>
                <td class="table_text">40802810802500108994</td>
              </tr>
              <tr>
                <td class="table_heading">Наименование банка</td>
                <td class="table_text">
                  В Филиале Точка Публичного акционерного общества Банка «Финансовая Корпорация Открытие»
                </td>
              </tr>
              <tr>
                <td class="table_heading">Номер К/сч</td>
                <td class="table_text">30101810845250000999</td>
              </tr>
              <tr>
                <td class="table_heading">БИК</td>
                <td class="table_text">044525999</td>
              </tr>
              <tr>
                <td class="table_heading">Телефон</td>
                <td class="table_text">+7 (999) 560-14-48</td>
              </tr>
              <tr>
                <td class="table_heading">Почта</td>
                <td class="table_text">info@m-lc.ru</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="w-100 px-5">
        <div class="shadow">
          <table class="table">
            <tbody>
              <tr>
                <td class="table_heading">Полное наименование организации</td>
                <td class="table_text">ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «МЕТАЛЛКОРП»</td>
              </tr>
              <tr>
                <td class="table_heading">Юридический адрес</td>
                <td class="table_text">
                  620141,РОССИЯ, ОБЛ. СВЕРДЛОВСКАЯ, Г. ЕКАТЕРИНБУРГ ,УЛ. ОЛЬХОВСКАЯ 25/2, КВ. 56
                </td>
              </tr>
              <tr>
                <td class="table_heading">Фактический адрес</td>
                <td class="table_text">
                  620141,РОССИЯ, ОБЛ. СВЕРДЛОВСКАЯ, Г. ЕКАТЕРИНБУРГ ,УЛ. ОЛЬХОВСКАЯ 25/2, КВ. 56
                </td>
              </tr>
              <tr>
                <td class="table_heading">ИНН</td>
                <td class="table_text">6678111118</td>
              </tr>
              <tr>
                <td class="table_heading">КПП</td>
                <td class="table_text">667801001</td>
              </tr>
              <tr>
                <td class="table_heading">ОГРН</td>
                <td class="table_text">1216600004587</td>
              </tr>
              <tr>
                <td class="table_heading">ОКПО</td>
                <td class="table_text">47046899</td>
              </tr>
              <tr>
                <td class="table_heading">Номер Р/с</td>
                <td class="table_text">40702810602500090234</td>
              </tr>
              <tr>
                <td class="table_heading">Наименование банка</td>
                <td class="table_text">
                  В Филиале Точка Публичного акционерного общества Банка «Финансовая Корпорация Открытие»
                </td>
              </tr>
              <tr>
                <td class="table_heading">Номер К/сч</td>
                <td class="table_text">30101810845250000999</td>
              </tr>
              <tr>
                <td class="table_heading">БИК</td>
                <td class="table_text">044525999</td>
              </tr>
              <tr>
                <td class="table_heading">Телефон</td>
                <td class="table_text">+7 (906) 812-81-75</td>
              </tr>
              <tr>
                <td class="table_heading">Почта</td>
                <td class="table_text">info@m-lc.ru</td>
              </tr>
              <tr>
                <td class="table_heading">Генеральный директор</td>
                <td class="table_text">Шишигин Владислав Евгеньевич</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <public-dashboard-footer />
  </div>
</template>

<script>
export default {
  name: 'PublicContactManage',
  computed: {
    getItems() {
      return this.$store.getters['seo/getKontaktyItems']
    },
  },
}
</script>
