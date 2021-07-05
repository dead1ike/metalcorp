<template>
  <div class="d-flex w-100 flex-row flex-wrap justify-content-around bg-light shadow">
    <b-btn variant="outline-corp" size="sm" class="m-2 font-weight-bold live-edit" to="/rekvizity">Реквизиты</b-btn>
    <b-btn variant="outline-corp" size="sm" class="m-2 font-weight-bold live-edit" to="/otzyvy">Отзывы</b-btn>
    <b-btn variant="outline-corp" size="sm" class="m-2 font-weight-bold live-edit" to="/obyekty">Наши объекты</b-btn>
    <b-btn variant="outline-corp" size="sm" class="m-2 font-weight-bold live-edit" to="/vakansii">Вакансии</b-btn>
    <b-btn variant="outline-corp" size="sm" class="m-2 font-weight-bold live-edit" to="/kontakty">Контакты</b-btn>
    <b-btn variant="outline-corp" size="sm" class="m-2 font-weight-bold live-edit" to="/sotrudnichestvo">
      Сотрудничество
    </b-btn>
  </div>
</template>

<script>
export default {
  name: 'PublicDashboardControl',
}
</script>

<style scoped></style>
