<template>
  <div class="main-header-content py-3 px-2">
    <b-navbar toggleable="lg" style="padding: 0">
      <b-navbar-brand to="/">
        <b-img style="max-width: 150px; max-height: 63px" src="~/static/logo.png" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-double-up" variant="dark"></b-icon>
          <b-icon v-else icon="chevron-double-down" variant="dark"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="w-100 d-flex flex-wrap align-items-center justify-content-between mx-5">
          <b-btn variant="outline-black" class="live-edit" size="sm" to="/rekvizity" style="font-size: 18px"
            >Реквизиты</b-btn
          >
          <b-btn variant="outline-black" class="live-edit" size="sm" to="/otzyvy" style="font-size: 18px">Отзывы</b-btn>
          <b-btn variant="outline-black" class="live-edit" size="sm" to="/obyekty" style="font-size: 18px"
            >Наши объекты</b-btn
          >
          <b-btn variant="outline-black" class="live-edit" size="sm" to="/vakansii" style="font-size: 18px"
            >Вакансии</b-btn
          >
          <b-btn variant="outline-black" class="live-edit" size="sm" to="/kontakty" style="font-size: 18px"
            >Контакты</b-btn
          >
          <b-btn variant="outline-black" class="live-edit" size="sm" to="/sotrudnichestvo" style="font-size: 18px">
            Сотрудничество
          </b-btn>

          <b-nav-item to="/offer" class="font-weight-bolder align-items-end mt-2" style="font-size: 22px">
            <public-offer-basket />
          </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'PublicDashboardNavbar',
  methods: {
    toCatalog() {
      this.$router.push('/category')
    },
    openModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'dimensionModal',
        modalStatus: true,
      })
    },
  },
}
</script>
