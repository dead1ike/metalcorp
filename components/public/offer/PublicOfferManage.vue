<template>
  <div class="overflow-auto">
    <div class="h-100">
      <h2 class="font-weight-bold pt-10 pb-6 px-3">Корзина</h2>
      <div v-if="getOfferManageItems.length > 0">
        <div v-for="offerItem in getOfferManageItems" :key="offerItem.uuid" class="px-4 py-5">
          <div class="shadow d-flex flex-column flex-lg-row align-items-center justify-content-around py-4">
            <div><b-img :src="offerItem.image" style="max-width: 100px" /></div>
            <div class="offer_title text-truncate" style="max-width: 490px">
              {{ offerItem.title }}
            </div>
            <div class="d-flex flex-column">
              <div v-for="itemParam in offerItem.parameters.slice(0, 4)" :key="itemParam.uuid" class="offer_text">
                <span class="pr-2">{{ itemParam.parameter_title ? itemParam.parameter_title : itemParam.title }}</span>
                <span>{{ itemParam.parameter_value }}</span>
              </div>
            </div>
            <div v-if="offerItem.shelf_count" class="offer_text">
              {{ offerItem.title === 'MZ-Profil' ? '--' : 'Количество полок ' + offerItem.shelf_count }}
            </div>
            <div class="d-flex flex-column">
              <div class="offer_text pb-1 text-center">Количество</div>
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
              <span class="offer_price1">Сумма:</span>
              <span class="offer_price2">{{ offerItem.total }} руб.</span>
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
          <b-btn class="d-inline-block px-8 py-4" variant="dark" @click="toOfferConfirm">Заказать</b-btn>
        </div>
      </div>
      <div v-else>
        <div class="empty_offer px-4 py-5">В корзине ничего нет</div>
        <div class="px-4 py-5">
          <b-btn class="d-inline-block px-8 py-4" variant="dark" @click="toCatalog()">В каталог</b-btn>
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
