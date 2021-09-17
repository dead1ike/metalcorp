<template>
  <div class="d-flex flex-row w-100 justify-content-around flex-wrap text-white bg-black p-4">
    <div class="d-flex flex-column m-4">
      <div class="">
        <b-img
          src="https://thumb.tildacdn.com/tild6536-3538-4137-b034-373731613935/-/resize/130x/-/format/webp/__2_2.png"
        ></b-img>
      </div>
      <br />
      <div class="mt-2">
        <a class="text-white" href="tel:+79068128175">+7 (906) 812-81-75</a> <br />
        <span>ЕЖЕДНЕВНО с 9:00 до 21:00</span><br />
        <br />
        <b-btn variant="light">Заказать звонок</b-btn>
      </div>
    </div>
    <div class="m-4 d-flex flex-column text-left">
      <div>
        <strong>
          ОБЩЕСТВО С ОГРАНИЧЕННОЙ <br />
          ОТВЕТСТВЕННОСТЬЮ «МЕТАЛЛКОРП»
        </strong>
      </div>
      <br />
      <div>
        <span>ИНН 6678111118</span><br />
        <span>КПП 667801001</span><br />
        <span>ОГРН 1216600004587</span><br />
      </div>
      <br />
      <div style="letter-spacing: 1px">
        <a class="text-white" href="tel:+79068128175">+7 (906) 812-81-75</a> <br />
        <a class="text-white" href="mailto:info@m-lc.ru">info@m-lc.ru</a>
      </div>
      <br />
      <div class="mt-2">
        Адрес<br />
        г. Екатеринбург,ул. Радищева, 4, офис 611
      </div>
    </div>
    <div class="d-flex flex-column">
      <public-widget-sidebar-catalog />
    </div>
    <div class="d-flex flex-column">
      <a class="banner_text" href="#" style="text-decoration: none;color: white">Наши объекты</a>
      <a class="banner_text" href="#" style="text-decoration: none;color: white">Отзывы</a>
      <a class="banner_text" href="#" style="text-decoration: none;color: white">Сотрудничество</a>
      <a class="banner_text" href="#" style="text-decoration: none;color: white">Вакансии</a>
      <a class="banner_text" href="#" style="text-decoration: none;color: white">Контакты</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicDashboardFooter',
}
</script>
