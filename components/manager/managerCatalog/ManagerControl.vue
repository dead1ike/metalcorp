<template>
  <div class="d-flex justify-content-between w-100 h-100">
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
    >
      <div class="d-flex flex-column form-group p-2">
        <div class="form-group d-flex p-1">
          <div>
            <label class="col-form-label text-right mr-2">Название:</label>
          </div>
          <div class="input-group">
            <b-form-input trim placeholder="Название стеллажа"></b-form-input>
          </div>
        </div>
        <div class="d-flex flex-row">
          <div class="w-100">
            <div class="form-group d-flex p-1">
              <div class="d-flex justify-content-start">
                <label class="col-form-label text-right mr-2">Категория:</label>
              </div>
              <div class="input-group d-flex justify-content-end">
                <b-dd variant="outline-corp" text="Выбрать">
                  <b-dd-item>Металлические стеллажи</b-dd-item>
                </b-dd>
              </div>
            </div>
            <div class="form-group d-flex p-1">
              <div class="d-flex justify-content-start">
                <label class="col-form-label text-right mr-2">Подкатегория:</label>
              </div>
              <div class="input-group d-flex justify-content-end">
                <b-dd variant="outline-corp" text="Выбрать">
                  <b-dd-item>Архивные стеллажи</b-dd-item>
                  <b-dd-item>Складские стеллажи / Среднегрузовые</b-dd-item>
                  <b-dd-item>Паллетные стеллажи / Фронтальные</b-dd-item>
                  <b-dd-item>Консольные стеллажи</b-dd-item>
                  <b-dd-item>Глубинные стеллажи</b-dd-item>
                  <b-dd-item>Стеллажи для кабельной продукции</b-dd-item>
                  <b-dd-item>Стеллажи для напольных покрытий</b-dd-item>
                </b-dd>
              </div>
            </div>
            <div class="form-group d-flex p-1">
              <div class="d-flex justify-content-start">
                <label class="col-form-label text-right mr-2">Вид:</label>
              </div>
              <div class="input-group d-flex justify-content-end">
                <b-dd variant="outline-corp" text="Выбрать">
                  <b-dd-item>Стеллажи СТФЛ</b-dd-item>
                  <b-dd-item>Стеллажи СТФ</b-dd-item>
                  <b-dd-item>Стеллажи СТФУ</b-dd-item>
                  <b-dd-item>Стеллажи МС</b-dd-item>
                  <b-dd-item>Стеллажи МС-100</b-dd-item>
                  <b-dd-item>Стеллажи МС-200</b-dd-item>
                  <b-dd-item>Стеллажи MS-Standart</b-dd-item>
                  <b-dd-item>Стеллажи Ms-Strong</b-dd-item>
                  <b-dd-item>Стеллажи Ms-Hard</b-dd-item>
                  <b-dd-item>Стеллажи МКФ</b-dd-item>
                  <b-dd-item>Стеллажи SGR</b-dd-item>
                  <b-dd-item>Стеллажи СК/СКУ</b-dd-item>
                  <b-dd-item>Стеллажи МС-Т</b-dd-item>
                  <b-dd-item>Стеллажи MS-Pro</b-dd-item>
                  <b-dd-item>Стеллажи СФМ</b-dd-item>
                  <b-dd-item>Стеллажи MZ-PROFIL</b-dd-item>
                </b-dd>
              </div>
            </div>
          </div>
          <div class="w-100">
            <div class="form-group d-flex p-1">
              <div class="d-flex justify-content-start">
                <label class="col-form-label text-right mr-2">Высота:</label>
              </div>
              <div class="input-group d-flex justify-content-end">
                <b-dd variant="outline-corp" text="Выбрать">
                  <b-dd-item>1500</b-dd-item>
                  <b-dd-item>1800</b-dd-item>
                  <b-dd-item>2000</b-dd-item>
                  <b-dd-item>2200</b-dd-item>
                  <b-dd-item>2500</b-dd-item>
                  <b-dd-item>3000</b-dd-item>
                </b-dd>
              </div>
            </div>
            <div class="form-group d-flex p-1">
              <div class="d-flex justify-content-start">
                <label class="col-form-label text-right mr-2">Ширина:</label>
              </div>
              <div class="input-group d-flex justify-content-end">
                <b-dd variant="outline-corp" text="Выбрать">
                  <b-dd-item>70</b-dd-item>
                  <b-dd-item>100</b-dd-item>
                  <b-dd-item>120</b-dd-item>
                  <b-dd-item>150</b-dd-item>
                </b-dd>
              </div>
            </div>
            <div class="form-group d-flex p-1">
              <div class="d-flex justify-content-start">
                <label class="col-form-label text-right mr-2">Глубина:</label>
              </div>
              <div class="input-group d-flex justify-content-end">
                <b-dd variant="outline-corp" text="Выбрать">
                  <b-dd-item>30</b-dd-item>
                  <b-dd-item>40</b-dd-item>
                  <b-dd-item>50</b-dd-item>
                  <b-dd-item>60</b-dd-item>
                  <b-dd-item>70</b-dd-item>
                  <b-dd-item>80</b-dd-item>
                </b-dd>
              </div>
            </div>
          </div>
          <div class="w-100">
            <div class="form-group d-flex p-1">
              <div class="d-flex justify-content-start">
                <label class="col-form-label text-right mr-2 text-truncate">Кол-во полок:</label>
              </div>
              <div class="input-group d-flex justify-content-end">
                <b-dd variant="outline-corp" text="Выбрать">
                  <b-dd-item>3</b-dd-item>
                  <b-dd-item>4</b-dd-item>
                  <b-dd-item>5</b-dd-item>
                  <b-dd-item>6</b-dd-item>
                  <b-dd-item>7</b-dd-item>
                </b-dd>
              </div>
            </div>
            <div class="form-group d-flex p-1">
              <div class="d-flex justify-content-start">
                <label class="col-form-label text-right mr-2 text-truncate">Нагрузка на полку:</label>
              </div>
              <div class="input-group d-flex justify-content-end">
                <b-dd variant="outline-corp" text="Выбрать">
                  <b-dd-item>100</b-dd-item>
                  <b-dd-item>140</b-dd-item>
                  <b-dd-item>145</b-dd-item>
                  <b-dd-item>170</b-dd-item>
                  <b-dd-item>200</b-dd-item>
                  <b-dd-item>300</b-dd-item>
                  <b-dd-item>450</b-dd-item>
                  <b-dd-item>500</b-dd-item>
                </b-dd>
              </div>
            </div>
            <div class="form-group d-flex p-1">
              <div class="d-flex justify-content-start">
                <label class="col-form-label text-right mr-2 text-truncate">Нагрузка на стеллаж:</label>
              </div>
              <div class="input-group d-flex justify-content-end">
                <b-dd variant="outline-corp" text="Выбрать">
                  <b-dd-item>700</b-dd-item>
                  <b-dd-item>780</b-dd-item>
                  <b-dd-item>1000</b-dd-item>
                  <b-dd-item>1200</b-dd-item>
                  <b-dd-item>1400</b-dd-item>
                  <b-dd-item>2100</b-dd-item>
                  <b-dd-item>2400</b-dd-item>
                </b-dd>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group d-flex p-1">
          <div>
            <label class="col-form-label text-right mr-2">Описание:</label>
          </div>
          <div class="input-group">
            <b-form-textarea rows="18" placeholder="Описание стеллажа"></b-form-textarea>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: 'ManagerControl',
}
// TODO: Сделать динамическое отображение в дропдаунах значения которые сейчас в статике.
// TODO: Добавление выбранных и внесенных значений в таблицу
</script>
