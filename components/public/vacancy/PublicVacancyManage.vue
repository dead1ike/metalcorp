<template>
  <div class="h-100">
    <div class="w-100 d-flex justify-content-center pt-4">
      <b-breadcrumb :items="getItems" style="background-color: white"> </b-breadcrumb>
    </div>
    <div class="d-flex flex-column">
      <div class="feedback_header py-5 px-4">Вакансии</div>
      <div class="d-flex flex-column flex-lg-row">
        <div class="w-100 px-4">
          <div class="shadow px-4 py-5">
            <div class="d-flex flex-column">
              <div class="vacancy_header1">Бухгалтер</div>
              <div class="vacancy_header2 py-3">от 75 000 руб.</div>
            </div>
            <div>
              <div class="vacancy_text1 py-3">
                <p>Требуемый опыт работы: 3-6 лет</p>
                <p>Полная занятость, полный день</p>
              </div>
            </div>
            <div>
              <div class="vacancy_header2 py-3">Обязанности:</div>
              <div class="vacancy_text2">
                <p>-поиск и привлечение клиентов (металлообработка), ведение переговоров, консультирование клиентов</p>
                <p>-полное ведение проектов по металлообработке, их расчет и экономическое обоснование</p>
                <p>
                  -прием заказов на изготовление деталей по чертежам заказчика, плотное взаимодействие с производством
                </p>
                <p>
                  -составление коммерческих предложений, выставление счетов, контроль сроков производства и отгрузки
                  товара
                </p>
              </div>
            </div>
            <div>
              <div class="vacancy_header2 py-3">Требования:</div>
              <div class="vacancy_text2">
                <p>-высшее техническое образование</p>
                <p>-опыт работы в области обработки металлов (продаж)</p>
                <p>-знание программ SolidWorks, AutoCAD, Компас3D</p>
                <p>-знание 1C (желательно)</p>
                <p>-навыки чтения машиностроительных чертежей, финансового анализа</p>
              </div>
            </div>
            <div class="pb-3">
              <div class="vacancy_header2 py-3">Условия:</div>
              <div class="vacancy_text2">
                <p>-полное соблюдение трудового законодательства</p>
                <p>-дополнительные льготы согласно колдоговора</p>
                <p>-график работы 5/2, 8.00 час. - 17.00 час</p>
                <p>-бонусы от продаж</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-100 px-4">
          <div class="shadow px-4 py-5">
            <div class="d-flex flex-column">
              <div class="vacancy_header1">Менеджер</div>
              <div class="vacancy_header2 py-3">от 75 000 руб.</div>
            </div>
            <div>
              <div class="vacancy_text1 py-3">
                <p>Требуемый опыт работы: 3-6 лет</p>
                <p>Полная занятость, полный день</p>
              </div>
            </div>
            <div>
              <div class="vacancy_header2 py-3">Обязанности:</div>
              <div class="vacancy_text2">
                <p>-поиск и привлечение клиентов (металлообработка), ведение переговоров, консультирование клиентов</p>
                <p>-полное ведение проектов по металлообработке, их расчет и экономическое обоснование</p>
                <p>
                  -прием заказов на изготовление деталей по чертежам заказчика, плотное взаимодействие с производством
                </p>
                <p>
                  -составление коммерческих предложений, выставление счетов, контроль сроков производства и отгрузки
                  товара
                </p>
              </div>
            </div>
            <div>
              <div class="vacancy_header2 py-3">Требования:</div>
              <div class="vacancy_text2">
                <p>-высшее техническое образование</p>
                <p>-опыт работы в области обработки металлов (продаж)</p>
                <p>-знание программ SolidWorks, AutoCAD, Компас3D</p>
                <p>-знание 1C (желательно)</p>
                <p>-навыки чтения машиностроительных чертежей, финансового анализа</p>
              </div>
            </div>
            <div class="pb-3">
              <div class="vacancy_header2 py-3">Условия:</div>
              <div class="vacancy_text2">
                <p>-полное соблюдение трудового законодательства</p>
                <p>-дополнительные льготы согласно колдоговора</p>
                <p>-график работы 5/2, 8.00 час. - 17.00 час</p>
                <p>-бонусы от продаж</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-5">
        <div class="shadow d-flex flex-column flex-lg-row">
          <div class="w-100 d-flex flex-column px-4 py-3">
            <div class="vacancy_form_header1">Заполните данные для рассмотрения вашей кандидатуры</div>
            <div class="d-flex flex-column flex-lg-row py-5">
              <div class="d-flex flex-column pr-5">
                <p class="feedback_form_text">Ваше имя</p>
                <b-form-input size="sm"></b-form-input>
              </div>
              <div class="d-flex flex-column pr-5">
                <p class="feedback_form_text text-truncate">Номер телефона</p>
                <b-form-input size="sm"></b-form-input>
              </div>
              <div class="d-flex flex-column">
                <p class="feedback_form_text">Прикрепите резюме</p>
                <b-file plain></b-file>
              </div>
            </div>
            <div>
              <a class="black_button d-inline-block px-4 py-3">Отправить</a>
            </div>
          </div>
          <div class="w-100 bg-dark d-flex flex-column text-white px-4 py-3">
            <div class="vacancy_form_header1">Возникли вопросы по вакансии?</div>
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

<script>
export default {
  name: 'PublicVacancyManage',
  computed: {
    getItems() {
      return this.$store.getters['seo/getVakansiiItems']
    },
  },
}
</script>
