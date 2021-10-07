<template>
  <div class="d-flex flex-column flex-lg-row shadow callback_banner">
    <div class="d-flex flex-column w-100">
      <div class="callback_left_header text-wrap py-5 px-4">Закажите бесплатный выезд замерщика!</div>
      <div class="d-flex flex-column flex-lg-row px-4 py-4">
        <div class="pr-lg-5">
          <p class="callback_input_header">Ваше имя</p>
          <b-form-input size="sm" class="px-5 py-4"></b-form-input>
        </div>
        <div class="pl-lg-5">
          <p class="callback_input_header">Ваш телефон</p>
          <b-form-input size="sm" class="px-5 py-4"></b-form-input>
        </div>
      </div>
      <div class="px-5 py-4">
        <a class="black_button d-inline-block px-4 py-3" style="max-width: 281px">Оставить заявку</a>
      </div>
    </div>
    <div class="d-flex flex-column w-100 callback_rightside" style="max-width: 650px">
      <div class="px-5 py-5">
        <div class="callback_right_header1 text-wrap pr-lg-5">Затрудняетесь с выбором?</div>
        <div class="callback_right_header2 text-wrap pr-lg-5">Закажите обратный звонок!</div>
      </div>
      <div class="d-flex flex-column flex-lg-row px-5 py-4">
        <div class="pr-lg-5">
          <p class="callback_info_header">Почта:</p>
          <p class="callback_info">info@m-lc.ru</p>
        </div>
        <div class="pl-lg-5">
          <p class="callback_info_header">Телефон:</p>
          <p class="callback_info">+7 (906) 812-81-75</p>
        </div>
      </div>
      <div class="px-5 pb-5">
        <a class="white_button d-block px-4 py-3" style="max-width: 281px">Заказать звонок</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicWidgetCallback',
}
</script>
