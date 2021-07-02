<template>
  <div class="overflow-auto w-100 h-100">
    <b-tabs content-class="mt-3" fill>
      <b-tab title="Управление каталогом">
        <manager-control></manager-control>
        <manager-table></manager-table>
      </b-tab>
      <b-tab title="Управление прайсом"></b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  layout: 'manager',
}
</script>
