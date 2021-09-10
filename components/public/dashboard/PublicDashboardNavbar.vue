<template>
  <div class="main-header-content">
    <b-navbar toggleable="md">
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
        <b-navbar-nav class="w-100 d-flex justify-content-around">
          <b-nav-item class="mt-3 ml-3">
            <b-btn variant="outline-corp" size="sm" class="m-2 font-weight-bold live-edit" to="/rekvizity"
              >Реквизиты</b-btn
            >
            <b-btn variant="outline-corp" size="sm" class="m-2 font-weight-bold live-edit" to="/otzyvy">Отзывы</b-btn>
            <b-btn variant="outline-corp" size="sm" class="m-2 font-weight-bold live-edit" to="/obyekty"
              >Наши объекты</b-btn
            >
            <b-btn variant="outline-corp" size="sm" class="m-2 font-weight-bold live-edit" to="/vakansii"
              >Вакансии</b-btn
            >
            <b-btn variant="outline-corp" size="sm" class="m-2 font-weight-bold live-edit" to="/kontakty"
              >Контакты</b-btn
            >
            <b-btn variant="outline-corp" size="sm" class="m-2 font-weight-bold live-edit" to="/sotrudnichestvo">
              Сотрудничество
            </b-btn>
          </b-nav-item>
          <b-nav-item to="/offer" class="m-0 px-3 py-4 m-0 font-weight-bolder mx-3 align-items-end">
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
