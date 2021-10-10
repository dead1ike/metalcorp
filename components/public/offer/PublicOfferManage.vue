<template>
  <div class="overflow-auto">
    <!--    <div class="d-flex flex-column align-items-center">-->
    <!--      <div class="m-2">-->
    <!--        <b-btn variant="corp" @click="toOfferConfirm()">Оформить заказ</b-btn>-->
    <!--      </div>-->
    <!--      <div class="w-100">-->
    <!--        <b-table-->
    <!--          no-border-collapse-->
    <!--          head-variant="light"-->
    <!--          sticky-header="100%"-->
    <!--          borderless-->
    <!--          striped-->
    <!--          hover-->
    <!--          :fields="getOfferManageFields"-->
    <!--          :items="getOfferManageItems"-->
    <!--        >-->
    <!--          <template #cell(title)="data"-->
    <!--            ><span>Стеллаж</span> <b> {{ data.item.title }}</b></template-->
    <!--          >-->
    <!--          <template #cell(parameters)="data">-->
    <!--            <div class="d-flex justify-content-center">-->
    <!--              <table>-->
    <!--                <tr v-for="item in data.item.parameters" :key="item.uuid">-->
    <!--                  <td>{{ item.parameter_title }}</td>-->
    <!--                  <td>{{ item.parameter_value }}</td>-->
    <!--                </tr>-->
    <!--              </table>-->
    <!--            </div>-->
    <!--          </template>-->
    <!--          <template #cell(shelf_count)="data">-->
    <!--                {{ data.item.title === 'MZ-Profil' ? '&#45;&#45;' : data.item.shelf_count }}-->
    <!--              </template>-->
    <!--          <template #cell(rack_count)="data">-->
    <!--    <b-spinbutton :value="data.item.rack_count" inline min="1">-->
    <!--      <template #decrement>-->
    <!--        <b-btn size="sm" variant="link" @click="countDecrement(data.item.uuid)">-</b-btn>-->
    <!--      </template>-->
    <!--      <template #increment>-->
    <!--        <b-btn size="sm" variant="link" @click="countIncrement(data.item.uuid)">+</b-btn>-->
    <!--      </template>-->
    <!--    </b-spinbutton>-->
    <!--          </template>-->
    <!--          <template #cell(summ)="data">-->
    <!--            {{ data.item.total }}-->
    <!--          </template>-->
    <!--          <template #cell(actions)="data">-->
    <!--            <b-dd v-b-popover.hover.topleft="'Удалить'" variant="link" no-caret size="sm">-->
    <!--              <template #button-content>-->
    <!--                <b-icon icon="x-circle" scale="1.6" variant="danger"></b-icon>-->
    <!--              </template>-->
    <!--              <h6 class="text-center">Вы уверены?</h6>-->
    <!--              <hr />-->
    <!--              <b-dd-item>-->
    <!--                <b-btn variant="danger" size="sm" block @click="deleteItem(data.item.uuid)">Да</b-btn>-->
    <!--              </b-dd-item>-->
    <!--              <b-dd-item>-->
    <!--                <b-btn variant="corp" size="sm" block>Нет</b-btn>-->
    <!--              </b-dd-item>-->
    <!--            </b-dd>-->
    <!--          </template>-->
    <!--        </b-table>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="h-100">
      <div class="feedback_header px-4 py-5">Корзина</div>
      <div v-if="getOfferManageItems.length > 0">
        <div v-for="offerItem in getOfferManageItems" :key="offerItem.uuid" class="px-4 py-5">
          <div class="shadow d-flex flex-row align-items-center justify-content-around py-4">
            <div><b-img :src="offerItem.image" style="max-width: 100px" /></div>
            <div class="offer_title">
              {{ offerItem.title }}
            </div>
            <div class="d-flex flex-column">
              <div v-for="itemParam in offerItem.parameters.slice(0, 4)" :key="itemParam.uuid" class="offer_text">
                <span class="pr-2">{{ itemParam.parameter_title }}</span>
                <span>{{ itemParam.parameter_value }}</span>
              </div>
            </div>
            <div v-if="offerItem.shelf_count" class="offer_text">
              {{ offerItem.title === 'MZ-Profil' ? '--' : 'Количество полок ' + offerItem.shelf_count }}
            </div>
            <div class="d-flex flex-column">
              <div class="offer_text pb-1">Количество стеллажей</div>
              <b-spinbutton :value="offerItem.rack_count" inline min="1">
                <template #decrement>
                  <b-btn size="sm" variant="link" @click="countDecrement(offerItem.uuid)">-</b-btn>
                </template>
                <template #increment>
                  <b-btn size="sm" variant="link" @click="countIncrement(offerItem.uuid)">+</b-btn>
                </template>
              </b-spinbutton>
            </div>
            <div class="d-flex flex-column align-items-center">
              <span class="offer_price1">Стоимость:</span>
              <span class="offer_price2">{{ offerItem.price }} руб.</span>
            </div>
            <div>
              <b-dd v-b-popover.hover.topleft="'Удалить'" variant="link" no-caret size="sm">
                <template #button-content>
                  <b-icon icon="x-circle" scale="1.6" variant="danger"></b-icon>
                </template>
                <h6 class="text-center">Вы уверены?</h6>
                <hr />
                <b-dd-item>
                  <b-btn variant="danger" size="sm" block @click="deleteItem(offerItem.uuid)">Да</b-btn>
                </b-dd-item>
                <b-dd-item>
                  <b-btn variant="corp" size="sm" block>Нет</b-btn>
                </b-dd-item>
              </b-dd>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end px-4 py-5">
          <a class="black_button d-inline-block px-5 py-3" @click="toOfferConfirm">Заказать</a>
        </div>
      </div>
      <div v-else>
        <div class="empty_offer px-4 py-5">В корзине ничего нет</div>
        <div class="px-4 py-5">
          <a class="black_button d-inline-block px-5 py-3" @click="toCatalog()">В каталог</a>
        </div>
      </div>
    </div>
    <public-dashboard-footer />
  </div>
</template>

<script>
export default {
  name: 'PublicOfferManage',
  computed: {
    getOfferManageFields() {
      return this.$store.getters.getOfferManageFields
    },
    getOfferManageItems() {
      return this.$store.getters['type/getBasketProduct']
    },
  },

  mounted() {},
  methods: {
    toCatalog() {
      this.$router.push('/category')
    },
    countIncrement(uuid) {
      this.$store.commit('type/setCountIncrement', uuid)
      return this.getOfferManageItems
    },
    countDecrement(uuid) {
      this.$store.commit('type/setCountDecrement', uuid)
      return this.getOfferManageItems
    },
    toOfferConfirm() {
      this.$router.push('/offer/confirm')
    },
    deleteItem(uuid) {
      this.$store.commit('type/setDelBasketProduct', {
        uuid,
      })
    },
  },
}
</script>
