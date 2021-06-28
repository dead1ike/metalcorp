<template>
  <div class="d-flex justify-content-between">
    <div>
      <b-input-group>
        <b-form-input type="search" placeholder="Введите наименование"></b-form-input>
        <b-btn variant="outline-corp">
          <span><b-icon icon="search" variant="outline-corp" class="b-icon mr-2" scale="0.8"></b-icon>Поиск</span>
        </b-btn>
      </b-input-group>
    </div>
    <b-btn
      v-b-popover.hover.top="'Добавить новый стеллаж,ебать'"
      v-b-modal.modal-add-rack
      class="mb-2"
      variant="outline-corp"
      ><b-icon icon="plus"></b-icon
    ></b-btn>
    <b-modal
      id="modal-add-rack"
      size="xl"
      scrollable
      body-class="p-0 overflow-hidden h-100"
      content-class="h-100"
      class="m-0"
      centered
      title="Добавление нового стеллажа"
      lazy
      no-close-on-backdrop
      no-close-on-esc
    ></b-modal>
  </div>
</template>

<script>
export default {
  name: 'ManagerControl',
}
</script>
