<template>
  <div>
    <div>priceManager: {{ priceManager(item.components) }}</div>
    <pre>getRackParamsGroup: {{ getRackParamsGroup() }}</pre>
    <div v-for="(itemParameters, indexGroup) in getRackParamsGroup()" :key="itemParameters.title">
      <label> {{ indexGroup }}</label>
      <b-dd :text="getGroupParamTitle(indexGroup).value ? getGroupParamTitle(indexGroup).value : 'Выберите'">
        <template v-for="itemParameter in itemParameters">
          <b-dd-item :key="itemParameter.value" @click="selectParameter(indexGroup, itemParameter)">
            {{ itemParameter.value }} фывфыв
          </b-dd-item>
        </template>
      </b-dd>
    </div>
    <div></div>
  </div>
  <!--    &lt;!&ndash;Что такое МеталлКорп?&ndash;&gt;-->
  <!--    <div class="p-2 mt-4 container-fluid" style="max-width: 1520px">-->
  <!--      <h3>Что такое МеталлКорп?</h3>-->
  <!--    </div>-->
  <!--    &lt;!&ndash;Описание МеталлКорпа&ndash;&gt;-->
  <!--    <div class="p-2 d-flex flex-row flex-wrap container-fluid" style="max-width: 1520px">-->
  <!--      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">-->
  <!--        <b-img src="https://static.tildacdn.com/tild3339-3939-4032-b633-306336663931/1.svg"></b-img>-->
  <!--        <div class="h5 mt-2 px-3">Бесплатный выезд замерщика, к Вам на склад</div>-->
  <!--      </div>-->
  <!--      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">-->
  <!--        <b-img src="https://static.tildacdn.com/tild3431-3364-4863-a633-316132323966/2.svg"></b-img>-->
  <!--        <div class="h5 mt-2 px-3">Проектирование чертежей(планов расстановки складских стеллажей)</div>-->
  <!--      </div>-->
  <!--      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">-->
  <!--        <b-img src="https://static.tildacdn.com/tild3466-6433-4466-a465-653764613865/3.svg"></b-img>-->
  <!--        <div class="h5 mt-2 px-3">Поставка оборудования напрямую от Производителя</div>-->
  <!--      </div>-->
  <!--      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">-->
  <!--        <b-img src="https://static.tildacdn.com/tild6363-3864-4666-a538-623166313432/4.svg"></b-img>-->
  <!--        <div class="h5 mt-2 px-3">Составление сметы и Коммерческих предложений</div>-->
  <!--      </div>-->
  <!--      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">-->
  <!--        <b-img src="https://static.tildacdn.com/tild3730-6535-4232-a461-626461646463/5.svg"></b-img>-->
  <!--        <div class="h5 mt-0 pb-1 px-3">Реализация оборудования и услуг, исключительно по Договору поставки</div>-->
  <!--      </div>-->
  <!--      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">-->
  <!--        <b-img src="https://static.tildacdn.com/tild6137-3362-4932-b465-623331323439/6.svg"></b-img>-->
  <!--        <div class="h5 mt-n1 pb-1 px-3">Бесплатная доставка в любую точку города от 35 000 руб</div>-->
  <!--      </div>-->
  <!--      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">-->
  <!--        <b-img src="https://static.tildacdn.com/tild6538-6435-4261-a432-316139366233/7.svg"></b-img>-->
  <!--        <div class="h5 mt-2 px-3">Сборка металлических стеллажей и складского оборудования «Под ключ»</div>-->
  <!--      </div>-->
  <!--      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">-->
  <!--        <b-img src="https://static.tildacdn.com/tild6238-6633-4338-a633-323539303030/8.svg"></b-img>-->
  <!--        <div class="h5 mt-2 px-3">24 месяца гарантии и сервисного обслуживания</div>-->
  <!--      </div>-->
  <!--      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">-->
  <!--        <b-img src="https://static.tildacdn.com/tild6463-6138-4033-a531-626237613066/Barcode.svg"></b-img>-->
  <!--        <div class="h4 mt-3 px-3"><h5>Удобные способы оплаты для Юридических и Частных лиц (с НДС и Без)</h5></div>-->
  <!--      </div>-->
  <!--      <div class="d-flex flex-fill border border-corp p-3 m-2 shadow">-->
  <!--        <b-btn variant="corp" block href="https://metalcorp.org/">Подробнее о нас</b-btn>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    &lt;!&ndash;Каруселька №2&ndash;&gt;-->
  <!--    <div class="mt-4">-->
  <!--      <b-carousel-->
  <!--        class="shadow"-->
  <!--        :interval="1000000"-->
  <!--        img-height="480"-->
  <!--        img-width="1024"-->
  <!--        @sliding-start="onSlideStart"-->
  <!--        @sliding-end="onSlideEnd"-->
  <!--      >-->
  <!--        <b-carousel-slide-->
  <!--          style="-->
  <!--              background-image: url(https://i.ibb.co/hYRmNmT/storagemuzhik.png);-->
  <!--              background-size: cover;-->
  <!--              background-position: center;-->
  <!--              width: 100%;-->
  <!--              height: 580px;-->
  <!--            "-->
  <!--        >-->
  <!--          <div class="h-100">-->
  <!--            <div-->
  <!--              class="position-absolute"-->
  <!--              style="-->
  <!--                  background-image: url(https://i.ibb.co/qdd5SM3/man-4.png);-->
  <!--                  background-repeat: no-repeat;-->
  <!--                  background-size: contain;-->
  <!--                  background-position: center bottom;-->
  <!--                  width: 520px;-->
  <!--                  height: 450px;-->
  <!--                  right: 0;-->
  <!--                  bottom: 0;-->
  <!--                  max-width: 100%;-->
  <!--                "-->
  <!--            ></div>-->
  <!--            <div class="text-left position-relative h-100 d-flex flex-column">-->
  <!--              <h3>Бесплатный выезд замерщика</h3>-->
  <!--              <h2 class="font-weight-bolder">Закажите бесплатный выезд замерщика и получите в течении дня</h2>-->
  <!--              <h3 class="mt-3">- Точный замер</h3>-->
  <!--              <h3>- Расчет сметы</h3>-->
  <!--              <h3>- Сроки поставки и установки стеллажей</h3>-->
  <!--              <div class="d-flex align-items-end ml-4 h-100">-->
  <!--                <b-btn variant="corp" size="lg" class="px-5 py-4" @click="openModal()">Оставить заявку</b-btn>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </b-carousel-slide>-->
  <!--      </b-carousel>-->
  <!--    </div>-->
  <!--    &lt;!&ndash;Каталог 1&ndash;&gt;-->
  <!--    <div class="d-flex flex-row justify-content-center">-->
  <!--      <div class="align-self-center">-->
  <!--        <b-btn variant="link" size="sm" :disabled="slidePage <= 0" @click="slidePage&#45;&#45;">-->
  <!--          <b-icon icon="chevron-double-left" />-->
  <!--        </b-btn>-->
  <!--      </div>-->
  <!--      <div class="d-flex my-2 flex-row flex-wrap justify-content-center">-->
  <!--        <div v-for="item in showSlides" :key="item.uuid" class="mx-1 my-2 border">-->
  <!--          <div class="d-flex flex-column align-items-center">-->
  <!--            <span class="my-3"> Стеллаж {{ item.title }}</span>-->
  <!--            <b-img :src="item.image" style="max-height: 300px" class="" />-->
  <!--          </div>-->
  <!--          <div class="d-flex align-items-end m-3">-->
  <!--            <b-btn variant="corp" @click="description(item)">Заказать</b-btn>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="align-self-center">-->
  <!--        <b-btn variant="link" size="sm" :disabled="isPageMax" @click="slidePage++">-->
  <!--          <b-icon icon="chevron-double-right" />-->
  <!--        </b-btn>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    &lt;!&ndash;Конечная индексной&ndash;&gt;-->
  <!--    <div>-->
  <!--      <div class="shadow d-flex flex-fill">-->
  <!--        <div-->
  <!--          style="-->
  <!--              background-image: url(https://thumb.tildacdn.com/tild3631-3733-4561-a139-343061303663/-/format/webp/A4_-_4.jpg);-->
  <!--              background-size: cover;-->
  <!--              background-position: center;-->
  <!--              width: 100%;-->
  <!--            "-->
  <!--          class="position-relative text-white p-3 d-flex flex-fill flex-column"-->
  <!--        >-->
  <!--          <div class="text-center p-4">-->
  <!--            <h2>Затрудняетесь с выбором?</h2>-->
  <!--          </div>-->
  <!--          <div class="text-center p-4">-->
  <!--            <h1 class="font-weight-bolder">Поможем определиться и подобрать лучшие для Вас товары из каталога!</h1>-->
  <!--          </div>-->
  <!--          <div class="pt-4 mb-2 text-center text-md-left">-->
  <!--            <b-btn variant="corp" class="px-5 py-4" size="lg" @click="openModal()">Получить консультацию</b-btn>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--Отзывы-->
</template>

<script>
export default {
  data() {
    return {
      items: [],
      selectedParams: {
        shirina: '1000',
        visota: '1000',
        glubina: '300',
        polki: '4',
      },
      selectedGroupParams: [],
      item: {
        label: 'rack',
        components: [
          {
            title: 'stoika',
            is_constructor: false,
            count: 4,
            params: [
              {
                title: 'visota',
                value: '1000',
                price: '500',
              },
              {
                title: 'visota',
                value: '1800',
                price: '800',
              },
              {
                title: 'glubina',
                value: '600',
                price: '400',
              },
              {
                title: 'glubina',
                value: '600',
                price: '400',
              },
              {
                title: 'glubina',
                value: '3000',
                price: '600',
              },
              {
                title: 'shirina',
                value: '3000',
                price: '600',
              },
            ],
          },
          {
            title: 'polka',
            is_constructor: true,
            params: [],
            component_childs: [
              {
                title: 'balkaG',
                count: 2,
                params: [
                  {
                    title: 'glubina',
                    value: '300',
                    price: '200',
                  },
                  {
                    title: 'glubina',
                    value: '600',
                    price: '400',
                  },
                ],
              },
              {
                title: 'balkaW',
                count: 2,
                params: [
                  {
                    title: 'shirina',
                    value: '1000',
                    price: '400',
                  },
                  {
                    title: 'shirina',
                    value: '3000',
                    price: '600',
                  },
                ],
              },
            ],
          },
        ],
      },
    }
  },
  computed: {
    getSelectedGroupParams: {
      // геттер:
      get() {
        return this.selectedGroupParams
      },
      // сеттер:
      set(payload) {
        const index = this.selectedGroupParams.findIndex(item => {
          return item.title === payload.value.title
        })
        if (index >= 0) {
          this.selectedGroupParams.splice(index, 1, payload.value)
        } else {
          this.selectedGroupParams.push(payload.value)
        }
      },
    },
  },
  methods: {
    selectParameter(indexGroup, itemParameter) {
      this.getSelectedGroupParams = { key: indexGroup, value: itemParameter }
    },
    getGroupParamTitle(indexGroup) {
      return (
        this.getSelectedGroupParams.find(item => {
          return item.title === indexGroup
        }) || {}
      )
    },
    getLabel(parameters) {
      return _.head(parameters).title
    },
    getRackParamsGroup() {
      const group = _.uniqBy(this.getRackParams(this.item.components), item => {
        return item.value + item.title
      })
      return _.groupBy(group, 'title')
    },
    getRackParams(components) {
      return _.reduce(
        components,
        (params, item) => {
          item.params.forEach(itemParam => {
            params.push({
              title: itemParam.title,
              value: itemParam.value,
            })
          })
          if (item.is_constructor === true) {
            params = _.concat(params, this.getRackParams(item.component_childs))
          }
          return params
        },
        [],
      )
    },
    priceManager(components) {
      return parseInt(
        _.reduce(
          components,
          (sum, item) => {
            return (
              sum + (item.is_constructor === true ? this.priceManager(item.component_childs) : this.priceWorker(item))
            )
          },
          0,
        ),
      )
    },
    priceWorker(component) {
      const param = _.head(component.params)
      return parseInt(param.price) * parseInt(component.count)
    },
  },
}
</script>
