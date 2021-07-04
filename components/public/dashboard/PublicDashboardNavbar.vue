<template>
  <b-navbar toggleable="sm">
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
      <b-navbar-nav class="ml-auto">
        <div class="d-flex flex-column">
          <b-nav-item href="tel:+79995601448" class="m-0 px-3 mt-2 font-weight-bolder text-truncate">
            <h4>+7 (999) 560-14-48</h4>
          </b-nav-item>
          <small class="text-muted ml-5 mt-0">График работы: с 09:00 до 21:00</small>
        </div>
        <b-nav-item to="/category" class="m-0 px-3 py-4 m-0 font-weight-bolder text-truncate">Каталог</b-nav-item>
        <b-nav-item to="/offer" class="m-0 px-3 py-4 m-0 font-weight-bolder text-truncate">
          <public-offer-basket />
        </b-nav-item>
        <b-btn pill class="text-truncate p-2 m-3" variant="corp" @click="openModal()"> Заказать звонок </b-btn>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'PublicDashboardNavbar',
  methods: {
    openModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'dimensionModal',
        modalStatus: true,
      })
    },
  },
}
</script>
