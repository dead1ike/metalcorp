<template>
  <div class="overflow-auto w-100 h-100">
    <b-tabs content-class="mt-3" fill>
      <b-tab title="Категории">
        <manager-category-control />
        <manager-category-table />
      </b-tab>
      <b-tab title="Типы стеллажей">
        <manager-rack-control />
        <manager-rack-table />
      </b-tab>
      <b-tab title="Параметры">
        <manager-parameter-control />
        <manager-parameter-table />
      </b-tab>
      <b-tab title="Параметры стеллажей">
        <manager-rack-type-parameter-control />
        <manager-rack-type-parameter-table />
      </b-tab>
      <b-tab title="Прайс">
        <manager-price-control />
        <manager-price-table />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  layout: 'manager',
}
</script>
