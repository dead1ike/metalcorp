<template>
  <div class="overflow-hidden w-100 h-100">
    <div class="w-100 d-flex justify-content-center mt-5">
      <h2>Вакансии</h2>
    </div>
    <div class="w-100 d-flex justify-content-center mt-1">
      <b-breadcrumb :items="getItems" style="background-color: white"> </b-breadcrumb>
    </div>
    <div class="d-flex flex-column align-items-center">
      <div class="d-flex bg-light p-3 rounded-lg flex-row w-100 justify-content-between">
        <h2><b>Бухгалтер</b></h2>
        <h4 class="text-corp ml-3"><b> от 75.000 Р</b></h4>
        <div class="d-flex flex-column">
          <p>Требуемый опыт работы: 3-6 лет</p>
          <p>Полная занятость, полный день</p>
        </div>
      </div>
      <hr />
      <div class="w-100 d-flex flex-column">
        <h4 class="mb-2 ml-2"><b>Обязанности:</b></h4>
        <div class="rounded-lg bg-light p-3 m-4">
          <ul>
            <li>поиск и привлечение клиентов (металлообработка), ведение переговоров, консультирование клиентов</li>
            <li>полное ведение проектов по металлообработке, их расчет и экономическое обоснование</li>
            <li>прием заказов на изготовление деталей по чертежам заказчика, плотное взаимодействие с производством</li>
            <li>
              составление коммерческих предложений, выставление счетов, контроль сроков производства и отгрузки товара
            </li>
          </ul>
        </div>

        <h4 class="mb-2 ml-2"><b>Требования:</b></h4>
        <div class="rounded-lg bg-light p-3 m-4">
          <ul>
            <li>высшее техническое образование</li>
            <li>опыт работы в области обработки металлов (продаж)</li>
            <li>знание программ SolidWorks, AutoCAD, Компас3D</li>
            <li>знание 1C желательно</li>
            <li>навыки чтения машиностроительных чертежей, финансового анализа</li>
          </ul>
        </div>
        <h4 class="mb-2 ml-2"><b>Условия:</b></h4>
        <div class="rounded-lg bg-light p-3 m-4">
          <ul>
            <li>полное соблюдение трудового законодательства</li>
            <li>дополнительные льготы согласно колдоговора</li>
            <li>график работы 5/2, 8.00 час. - 17.00 час</li>
            <li>бонусы от продаж</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column align-items-center">
      <div class="d-flex bg-light p-3 rounded-lg flex-row w-100 justify-content-between">
        <h2><b>Менеджер</b></h2>
        <h4 class="text-corp ml-3"><b> от 75.000 Р</b></h4>
        <div class="d-flex flex-column">
          <p>Требуемый опыт работы: 3-6 лет</p>
          <p>Полная занятость, полный день</p>
        </div>
      </div>
      <hr />
      <div class="w-100 d-flex flex-column">
        <h4 class="mb-2 ml-2"><b>Обязанности:</b></h4>
        <div class="rounded-lg bg-light p-3 m-4">
          <ul>
            <li>поиск и привлечение клиентов (металлообработка), ведение переговоров, консультирование клиентов</li>
            <li>полное ведение проектов по металлообработке, их расчет и экономическое обоснование</li>
            <li>прием заказов на изготовление деталей по чертежам заказчика, плотное взаимодействие с производством</li>
            <li>
              составление коммерческих предложений, выставление счетов, контроль сроков производства и отгрузки товара
            </li>
          </ul>
        </div>

        <h4 class="mb-2 ml-2"><b>Требования:</b></h4>
        <div class="rounded-lg bg-light p-3 m-4">
          <ul>
            <li>высшее техническое образование</li>
            <li>опыт работы в области обработки металлов (продаж)</li>
            <li>знание программ SolidWorks, AutoCAD, Компас3D</li>
            <li>знание 1C желательно</li>
            <li>навыки чтения машиностроительных чертежей, финансового анализа</li>
          </ul>
        </div>
        <h4 class="mb-2 ml-2"><b>Условия:</b></h4>
        <div class="rounded-lg bg-light p-3 m-4">
          <ul>
            <li>полное соблюдение трудового законодательства</li>
            <li>дополнительные льготы согласно колдоговора</li>
            <li>график работы 5/2, 8.00 час. - 17.00 час</li>
            <li>бонусы от продаж</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getItems() {
      return this.$store.getters['seo/getVakansiiItems']
    },
  },
}
</script>
