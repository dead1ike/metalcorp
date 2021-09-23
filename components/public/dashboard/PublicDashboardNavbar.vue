<template>
  <div class="main-header-content py-3 px-2">
    <b-navbar toggleable="lg" style="padding: 0">
      <b-navbar-brand to="/" class="px-2">
        <div style="width: 280px">
          <b-img style="max-width: 150px; max-height: 63px" src="~/static/logo.png" />
        </div>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-double-up" variant="dark"></b-icon>
          <b-icon v-else icon="chevron-double-down" variant="dark"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="w-100 d-flex flex-wrap align-items-center justify-content-between mx-5">
          <!--          <b-btn variant="outline-black" class="live-edit" size="sm" to="/rekvizity" style="font-size: 18px"-->
          <!--            >Реквизиты</b-btn-->
          <!--          >-->
          <!--          <b-btn variant="outline-black" class="live-edit" size="sm" to="/obyekty" style="font-size: 18px"-->
          <!--            >Наши объекты</b-btn-->
          <!--          >-->
          <!--          <b-btn variant="outline-black" class="live-edit" size="sm" to="/otzyvy" style="font-size: 18px">Отзывы</b-btn>-->
          <!--          <b-btn variant="outline-black" class="live-edit" size="sm" to="/sotrudnichestvo" style="font-size: 18px">-->
          <!--            Сотрудничество-->
          <!--          </b-btn>-->
          <!--          <b-btn variant="outline-black" class="live-edit" size="sm" to="/vakansii" style="font-size: 18px"-->
          <!--            >Вакансии</b-btn-->
          <!--          >-->
          <!--          <b-btn variant="outline-black" class="live-edit" size="sm"  style="font-size: 18px"-->
          <!--            >Контакты</b-btn-->
          <!--          >-->
          <b-nav-item to="/obyekty"><span class="navitem">Наши объекты</span></b-nav-item>
          <b-nav-item to="/otzyvy"><span class="navitem">Отзывы</span></b-nav-item>
          <b-nav-item to="/sotrudnichestvo"><span class="navitem">Сотрудничество</span></b-nav-item>
          <b-nav-item to="/vakansii"><span class="navitem">Вакансии</span></b-nav-item>
          <b-nav-item to="/kontakty"><span class="navitem">Контакты</span></b-nav-item>
          <b-nav-item to="/offer" class="align-items-end">
            <div class="d-flex flex-row align-items-center">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M33.2502 14.25H31.0018L25.1245 3.96466L22.3758 5.53533L27.3554 14.25H10.6449L15.6261 5.53533L12.8758 3.96466L6.99849 14.25H4.75016C4.5068 14.2503 4.26676 14.3066 4.04867 14.4146C3.83057 14.5225 3.64027 14.6793 3.49252 14.8727C3.34477 15.0661 3.24353 15.2909 3.19666 15.5297C3.14979 15.7685 3.15855 16.0149 3.22224 16.2498L7.654 32.5011C7.83822 33.1705 8.23683 33.7611 8.78877 34.1823C9.3407 34.6036 10.0155 34.8323 10.7098 34.8333H27.2921C28.7139 34.8333 29.9711 33.8754 30.3479 32.4979L34.7797 16.2482C34.8441 16.0132 34.8534 15.7665 34.8067 15.5274C34.76 15.2883 34.6586 15.0632 34.5106 14.8697C34.3625 14.6762 34.1716 14.5196 33.953 14.4121C33.7343 14.3046 33.4938 14.2491 33.2502 14.25ZM27.2905 31.6667V33.25V31.6667H10.7098L6.82433 17.4167H31.176L27.2905 31.6667Z"
                  fill="#445CAA"
                />
                <path d="M14 19H17.1667V26.9167H14V19ZM20.3333 19H23.5V26.9167H20.3333V19Z" fill="#445CAA" />
              </svg>
              <span class="navitem mx-1">Корзина</span>
            </div>
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
