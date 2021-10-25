<template>
  <div class="h-100">
    <div class="w-100 d-flex justify-content-center pt-4">
      <b-breadcrumb :items="getItems" style="background-color: white"> </b-breadcrumb>
    </div>
    <div class="d-flex flex-column">
      <h2 class="font-weight-bold pt-10 pb-6 pl-7">Вакансии</h2>
      <div class="d-flex flex-column flex-lg-row py-10">
        <div class="w-100 px-4">
          <div class="shadow px-4 py-10">
            <div class="d-flex flex-column flex-lg-row justify-content-lg-between">
              <div>
                <div class="vacancy_header1"><h4>Бухгалтер</h4></div>
                <div class="vacancy_header2 py-3"><h5 class="font-weight-normal">от 75 000 руб.</h5></div>
              </div>
              <div>
                <div class="vacancy_text1 py-3">
                  <h5 class="font-weight-normal">Требуемый опыт работы: 3-6 лет</h5>
                  <h5 class="font-weight-normal">Полная занятость, полный день</h5>
                </div>
              </div>
            </div>
            <div>
              <div class="vacancy_header2 py-3"><h4>Обязанности:</h4></div>
              <div class="vacancy_text2">
                <h5 class="font-weight-light">
                  -поиск и привлечение клиентов (металлообработка), ведение переговоров, консультирование клиентов
                </h5>
                <h5 class="font-weight-light">
                  -полное ведение проектов по металлообработке, их расчет и экономическое обоснование
                </h5>
                <h5 class="font-weight-light">
                  -прием заказов на изготовление деталей по чертежам заказчика, плотное взаимодействие с производством
                </h5>
                <h5 class="font-weight-light">
                  -составление коммерческих предложений, выставление счетов, контроль сроков производства и отгрузки
                  товара
                </h5>
              </div>
            </div>
            <div>
              <div class="vacancy_header2 py-3"><h4>Требования:</h4></div>
              <div class="vacancy_text2">
                <h5 class="font-weight-light">-высшее техническое образование</h5>
                <h5 class="font-weight-light">-опыт работы в области обработки металлов (продаж)</h5>
                <h5 class="font-weight-light">-знание программ SolidWorks, AutoCAD, Компас3D</h5>
                <h5 class="font-weight-light">-знание 1C (желательно)</h5>
                <h5 class="font-weight-light">-навыки чтения машиностроительных чертежей, финансового анализа</h5>
              </div>
            </div>
            <div class="pb-3">
              <div class="vacancy_header2 py-3"><h4>Условия:</h4></div>
              <div class="vacancy_text2">
                <h5 class="font-weight-light">-полное соблюдение трудового законодательства</h5>
                <h5 class="font-weight-light">-дополнительные льготы согласно колдоговора</h5>
                <h5 class="font-weight-light">-график работы 5/2, 8.00 час. - 17.00 час</h5>
                <h5 class="font-weight-light">-бонусы от продаж</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="w-100 px-4">
          <div class="shadow px-4 py-10">
            <div class="d-flex flex-column flex-lg-row justify-content-lg-between">
              <div>
                <div class="vacancy_header1"><h4>Менеджер</h4></div>
                <div class="vacancy_header2 py-3"><h5 class="font-weight-normal">от 75 000 руб.</h5></div>
              </div>
              <div>
                <div class="vacancy_text1 py-3">
                  <h5 class="font-weight-normal">Требуемый опыт работы: 3-6 лет</h5>
                  <h5 class="font-weight-normal">Полная занятость, полный день</h5>
                </div>
              </div>
            </div>
            <div>
              <div class="vacancy_header2 py-3"><h4>Обязанности:</h4></div>
              <div class="vacancy_text2">
                <h5 class="font-weight-light">
                  -поиск и привлечение клиентов (металлообработка), ведение переговоров, консультирование клиентов
                </h5>
                <h5 class="font-weight-light">
                  -полное ведение проектов по металлообработке, их расчет и экономическое обоснование
                </h5>
                <h5 class="font-weight-light">
                  -прием заказов на изготовление деталей по чертежам заказчика, плотное взаимодействие с производством
                </h5>
                <h5 class="font-weight-light">
                  -составление коммерческих предложений, выставление счетов, контроль сроков производства и отгрузки
                  товара
                </h5>
              </div>
            </div>
            <div>
              <div class="vacancy_header2 py-3"><h4>Требования:</h4></div>
              <div class="vacancy_text2">
                <h5 class="font-weight-light">-высшее техническое образование</h5>
                <h5 class="font-weight-light">-опыт работы в области обработки металлов (продаж)</h5>
                <h5 class="font-weight-light">-знание программ SolidWorks, AutoCAD, Компас3D</h5>
                <h5 class="font-weight-light">-знание 1C (желательно)</h5>
                <h5 class="font-weight-light">-навыки чтения машиностроительных чертежей, финансового анализа</h5>
              </div>
            </div>
            <div class="pb-3">
              <div class="vacancy_header2 py-3"><h4>Условия:</h4></div>
              <div class="vacancy_text2">
                <h5 class="font-weight-light">-полное соблюдение трудового законодательства</h5>
                <h5 class="font-weight-light">-дополнительные льготы согласно колдоговора</h5>
                <h5 class="font-weight-light">-график работы 5/2, 8.00 час. - 17.00 час</h5>
                <h5 class="font-weight-light">-бонусы от продаж</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-10">
        <div class="shadow d-flex flex-column flex-lg-row">
          <div class="w-100 d-flex flex-column px-7 pt-7">
            <div class="vacancy_form_header1" style="max-width: 580px">
              <h4>Заполните данные для рассмотрения вашей кандидатуры</h4>
            </div>
            <div class="d-flex flex-column flex-lg-row py-9">
              <div class="d-flex flex-column pr-10">
                <h5 class="feedback_form_text">Ваше имя</h5>
                <b-form-input size="sm" v-model="form.name"></b-form-input>
              </div>
              <div class="d-flex flex-column pr-10">
                <h5 class="feedback_form_text text-truncate">Номер телефона</h5>
                <b-form-input size="sm" v-model="form.phone"></b-form-input>
              </div>
              <div class="d-flex flex-column">
                <h5 class="feedback_form_text">Прикрепите резюме (pdf)</h5>
                <b-file plain v-model="form.pdf_file"></b-file>
              </div>
            </div>
            <div class="pt-6">
              <b-btn class="d-inline-block px-8 py-4" variant="dark" @click="send">Отправить</b-btn>
            </div>
          </div>
          <div class="w-100 bg-dark d-flex flex-column text-white p-7">
            <div class="vacancy_form_header1"><h3>Возникли вопросы по вакансии?</h3></div>
            <div class="vacancy_form_header2"><h4>Закажите обратный звонок!</h4></div>
            <div class="d-flex flex-row pt-5 pb-5">
              <div class="d-flex flex-column pr-10 py-4">
                <div class="vacancy_right_heading"><h5>Почта:</h5></div>
                <div class="vacancy_right_text pt-3">
                  <h5 class="font-weight-light">info@m-lc.ru</h5>
                </div>
              </div>
              <div class="d-flex flex-column pl-10 py-4">
                <div class="vacancy_right_heading"><h5>Телефон:</h5></div>
                <div class="vacancy_right_text pt-3">
                  <h5 class="font-weight-light">+7 (906) 812-81-75</h5>
                </div>
              </div>
            </div>
            <div class="pt-3">
              <b-btn class="d-inline-block px-8 py-4" variant="light" to="/zvonok">Заказать звонок</b-btn>
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
  data() {
    return {
      form: {
        name: '',
        phone: '',
        pdf_file: null,
      },
    }
  },
  computed: {
    getItems() {
      return this.$store.getters['seo/getVakansiiItems']
    },
    buttonState() {
      let isValid = false
      if (this.form.name !== '') isValid = true
      else if (this.form.phone !== '') isValid = true
      else if (this.form.pdf_file !== null) isValid = true
      else isValid = false
    },
  },
  methods: {
    send() {
      this.$store
        .dispatch('vacancy/postVacancy', {
          name: this.form.name,
          phone: this.form.phone,
          pdf_file: this.form.pdf_file,
        })
        .then(() => {
          this.form.name = ''
          this.form.phone = ''
          this.form.pdf_file = null
        })
    },
  },
}
</script>
