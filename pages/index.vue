<template>
  <div class="d-flex overflow-hidden">
    <public-widget-sidebar />
    <div class="overflow-auto h-100 container__main">
      <div class="banner_header d-flex flex-fill pb-10">
        <public-main-first-block />
      </div>
      <h2 class="font-weight-bold pt-10 pb-6">Каталог</h2>
      <div class="d-flex flex-wrap justify-content-between">
        <public-widget-catalog />
      </div>
      <!--блок3-->
      <public-main-third-block />
      <!--      блок 4-->
      <div class="pt-5 px-3">
        <public-main-fourth-block />
      </div>
      <!--      блок 5-->
      <div class="p-3 pt-5">
        <public-main-fifth-block />
      </div>
      <public-dashboard-footer />
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss"></style>
