<template>
  <div class="d-flex flex-row h-100 overflow-hidden justify-content-between">
    <div class="d-flex flex-column h-100 overflow-hidden flex-fill">
      <manager-goods-control />
      <manager-goods-table />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'manager',
}
</script>
