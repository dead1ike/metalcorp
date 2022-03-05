<template>
  <div class="overflow-auto w-100 h-100">
    <div class="w-100 d-flex justify-content-center mt-5">
      <h2>Реквизиты</h2>
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
              <td class="text-right">+7 (800) 301-62-98</td>
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
  layout: 'catalog',
  head: {
    title: 'Контакты',
  },
  computed: {
    getItems() {
      return this.$store.getters['seo/getRekvizityItems']
    },
  },
}
</script>

<!--Полное наименование организации ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «МЕТАЛЛКОРП» Юридический адрес 620141,РОССИЯ,-->
<!--ОБЛ. СВЕРДЛОВСКАЯ, Г. ЕКАТЕРИНБУРГ ,УЛ. ОЛЬХОВСКАЯ 25/2, КВ. 56 Фактический адрес 620141,РОССИЯ, ОБЛ. СВЕРДЛОВСКАЯ, Г.-->
<!--ЕКАТЕРИНБУРГ ,УЛ. ОЛЬХОВСКАЯ 25/2, КВ. 56 ИНН 6678111118 КПП 667801001 ОГРН 1216600004587 ОКПО 47046899 Номер Р/с-->
<!--40702810602500090234 Наименование банка Филиал Точка Публичного акционерного общества Банка «Финансовая Корпорация-->
<!--Открытие» Номер К/сч 30101810845250000999 БИК 044525999 Телефон +7 (800) 301-62-98 Почта info@m-lc.ru Генеральный-->
<!--директор Шишигин Владислав Евгеньевич-->
