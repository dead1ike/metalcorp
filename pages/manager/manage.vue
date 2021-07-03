<template>
  <div class="overflow-auto w-100 h-100">
    <b-tabs content-class="mt-3" fill>
      <b-tab title="Категории">
        <manager-category-control />
        <manager-category-table />
      </b-tab>
      <b-tab title="Стеллажи"></b-tab>
      <b-tab title="Параметры стеллажа"></b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  layout: 'manager',
}
</script>
