<template>
  <div class="d-flex flex-column flex-lg-row shadow callback_banner">
    <div class="d-flex flex-column w-100 p-7">
      <div class="callback_left_header text-wrap p-5"><h3>Закажите бесплатный выезд замерщика!</h3></div>
      <div class="d-flex flex-column flex-lg-row px-5 pb-6">
        <div class="pr-lg-5">
          <h5 class="callback_input_header">Ваше имя</h5>
          <b-form-input size="sm" class="px-5 py-4"></b-form-input>
        </div>
        <div class="pl-lg-5">
          <h5 class="callback_input_header">Ваш телефон</h5>
          <b-form-input size="sm" class="px-5 py-4"></b-form-input>
        </div>
      </div>
      <div class="px-5 pt-10">
        <b-btn class="d-inline-block px-8 py-4" variant="dark">Оставить заявку</b-btn>
      </div>
    </div>
    <div class="d-flex flex-column w-100 callback_rightside p-7" style="max-width: 650px">
      <div class="p-5">
        <div class="callback_right_header1 text-wrap pr-lg-5"><h3 class="m-0">Затрудняетесь с выбором?</h3></div>
        <div class="callback_right_header2 text-wrap pr-lg-5"><h4 class="m-0">Закажите обратный звонок!</h4></div>
      </div>
      <div class="d-flex flex-column flex-lg-row px-5 py-4">
        <div class="pr-lg-5">
          <h5 class="callback_info_header">Почта:</h5>
          <h5 class="font-weight-light">info@m-lc.ru</h5>
        </div>
        <div class="pl-lg-5">
          <h5 class="callback_info_header">Телефон:</h5>
          <h5 class="font-weight-light">+7 (906) 812-81-75</h5>
        </div>
      </div>
      <div class="px-5 py-6">
        <b-btn class="d-inline-block px-8 py-4" variant="light" to="/zvonok">Заказать звонок</b-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicWidgetCallback',
}
</script>
