<template>
  <div class="d-flex justify-content-between w-100 h-100">
    <div>
      <b-input-group>
        <b-form-input type="search" placeholder="Введите наименование"></b-form-input>
        <b-btn variant="corp">
          <span><b-icon icon="search" variant="corp" class="b-icon mr-2" scale="0.8"></b-icon>Поиск</span>
        </b-btn>
      </b-input-group>
    </div>
    <b-btn v-b-popover.hover.top="'Добавить новый стеллаж,ебать'" v-b-modal.modal-add-rack class="mb-2" variant="corp">
      <b-icon icon="plus"></b-icon>
    </b-btn>
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
            <b-form-input v-model.trim="form.rack_name" trim placeholder="Название стеллажа"></b-form-input>
          </div>
        </div>
        <div class="d-flex flex-row">
          <div class="w-100">
            <div class="form-group d-flex p-1">
              <div class="d-flex justify-content-start">
                <label class="col-form-label text-right mr-2">Категория:</label>
              </div>
              <div class="input-group d-flex justify-content-end">
                <b-dd variant="corp" :text="selectedRack.text">
                  <template v-for="item in optionRackCategory">
                    <b-dd-item v-if="item.uuid !== null" :key="item.uuid" @click="selectRack(item)">{{
                      item.text
                    }}</b-dd-item>
                  </template>
                </b-dd>
              </div>
            </div>
            <div class="form-group d-flex p-1">
              <div class="d-flex justify-content-start">
                <label class="col-form-label text-right mr-2">Подкатегория:</label>
              </div>
              <div class="input-group d-flex justify-content-end">
                <b-dd variant="corp" text="Выбрать">
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
                <b-dd variant="corp" text="Выбрать">
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
                <b-dd variant="corp" text="Выбрать">
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
                <b-dd variant="corp" text="Выбрать">
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
                <b-dd variant="corp" text="Выбрать">
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
                <b-dd variant="corp" text="Выбрать">
                  <b-dd-item>2</b-dd-item>
                  <b-dd-item>3</b-dd-item>
                  <b-dd-item>4</b-dd-item>
                  <b-dd-item>5</b-dd-item>
                  <b-dd-item>6</b-dd-item>
                  <b-dd-item>7</b-dd-item>
                  <b-dd-item>8</b-dd-item>
                </b-dd>
              </div>
            </div>
            <div class="form-group d-flex p-1">
              <div class="d-flex justify-content-start">
                <label class="col-form-label text-right mr-2 text-truncate">Нагрузка на полку:</label>
              </div>
              <div class="input-group d-flex justify-content-end">
                <b-dd variant="corp" text="Выбрать">
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
                <b-dd variant="corp" text="Выбрать">
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
            <b-form-textarea
              v-model.trim="form.rack_description"
              rows="18"
              placeholder="Описание стеллажа"
            ></b-form-textarea>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: 'ManagerControl',
  data() {
    return {
      form: {
        rack_uuid: '',
        rack_name: '',
        rack_description: '',
        rack_category_uuid: null,
        rack_subcategory_uuid: null,
        rack_type_uuid: null,
        rack_height_uuid: null,
        rack_width_uuid: null,
        rack_depth_uuid: null,
        rack_shelves_count_uuid: null,
        rack_shelf_load_uuid: null,
        rack_load_uuid: null,
      },
    }
  },
  computed: {
    selectedRack() {
      if (this.optionRackCategory.find((rack) => rack.uuid === this.form.rack_category_uuid)) {
        return this.optionRackCategory.find((rack) => rack.uuid === this.form.rack_category_uuid)
      }
      return {}
    },
    optionRackCategory() {
      return this.$store.getters['manager/getOptionsCategory']
    },
  },
  mounted() {},
  methods: {
    selectRack(item) {
      this.form.rack_category_uuid = item.uuid
    },
  },
}
</script>
