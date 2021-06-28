<template>
  <div class="d-flex flex-column h-100 overflow-auto p-2" style="min-width: 300px">
    <h3>Фильтр:</h3>
    <label><b>Цена:</b></label>
    <div class="d-flex flex-row">
      <b-input placeholder="От" class="m-1"></b-input>
      <b-input placeholder="До" class="m-1"></b-input>
    </div>
    <hr />
    <label><b>Размер:</b></label>
    <div class="d-flex flex-column">
      <label>Высота:</label>
      <div class="d-flex flex-row">
        <b-input placeholder="От" class="m-1"></b-input>
        <b-input placeholder="До" class="m-1"></b-input>
      </div>
      <label>Ширина:</label>
      <div class="d-flex flex-row">
        <b-input placeholder="От" class="m-1"></b-input>
        <b-input placeholder="До" class="m-1"></b-input>
      </div>
      <label>Глубина:</label>
      <div class="d-flex flex-row">
        <b-input placeholder="От" class="m-1"></b-input>
        <b-input placeholder="До" class="m-1"></b-input>
      </div>
    </div>
    <hr />
    <label><b>Количество полок:</b></label>
    <div class="d-flex">
      <b-input placeholder="Количество" class="m-1"></b-input>
    </div>
    <hr />
    <label><b>Грузоподъёмность секции:</b></label>
    <div class="d-flex">
      <b-input placeholder="Кг" class="m-1"></b-input>
    </div>
    <hr />
    <div class="d-flex">
      <b-btn variant="outline-corp" class="live-edit">Применить</b-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicCatalogFilter',
}
</script>
