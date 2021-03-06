<template>
  <b-modal id="manager-type-component-add" size="xl" no-close-on-backdrop no-close-on-esc>
    <template #modal-header>
      <h5>Добавление компонента стеллажа:</h5>
    </template>
    <div class="d-flex flex-row">
      <div class="mx-2">
        <h6>Выберите стеллаж</h6>
        <b-dd variant="corp" :text="selectedRack.title ? selectedRack.title : 'Выберите'">
          <template v-for="item in getRacks">
            <b-dd-item v-if="item.uuid !== null" :key="item.uuid" @click="selectRack(item.uuid)">
              {{ item.title }}
            </b-dd-item>
          </template>
        </b-dd>
      </div>
      <div class="mx-2">
        <h6>Выберите комплектующий</h6>
        <b-dd variant="corp" :text="selectedComponent.title ? selectedComponent.title : 'Выберите'">
          <template v-for="item in getComponents">
            <b-dd-item v-if="item.uuid !== null" :key="item.uuid" @click="selectComponent(item.uuid)">
              {{ item.title }}
            </b-dd-item>
          </template>
        </b-dd>
      </div>
      <div class="mx-2">
        <h6>Входит в комплект</h6>
        <b-dd
          variant="corp"
          :text="
            selectedRackComponent.rack_component_value
              ? selectedRackComponent.rack.title + ' ' + selectedRackComponent.rack_component_value
              : 'Выберите'
          "
        >
          <template v-for="item in getRackComponents">
            <b-dd-item v-if="item.uuid !== null" :key="item.uuid" @click="selectRackComponent(item.uuid)">
              {{ item.rack.title + ' ' + item.rack_component_value }}
            </b-dd-item>
          </template>
        </b-dd>
      </div>
    </div>
    <div class="d-flex flex-column my-2">
      <h6>Введите название компонента:</h6>
      <b-input v-model="form.title"></b-input>
      <h5 class="my-2">Состоит из комплектующих?</h5>
      <div class="d-flex flex-row mt-2">
        <b-icon
          :icon="form.is_constructor === false ? 'square' : 'check-square'"
          variant="corp"
          @click="selectConstructor"
        ></b-icon>
        <p class="ml-1">{{ form.is_constructor === false ? 'Нет' : 'Да' }}</p>
      </div>
      <div>
        <small class="text-muted">Каждый компонент состоит из своих комплектующих.</small>
        <small class="text-muted">Для того, что-бы добавить компонент, прочитайте эту инструкцию.</small>
        <small class="text-muted">1. Выберите стеллаж, который будет иметь этот компонент.</small>
        <small class="text-muted">2. Выберите комплектующий, чтобы определить вид компонента.</small>
        <small class="text-muted"
          >3. Присвойте ему название, и если он состоит из нескольких частей, поставьте галочку.</small
        >
        <small class="text-muted"
          >4. Чтобы создать компонент комплектующего, не нужно выбирать комплектующий. Выберите стеллаж и в какой
          комплект он входит</small
        >
        <hr />
        <small class="text-muted"
          >Пример: СТФЛ стеллаж состоит из Полки СТФЛ и Стойки СТФЛ. Полка СТФЛ состоит из Полка СТФЛ 700х300, Полка
          СТФЛ 700х400 и тд. Выбираем стеллаж "СТФЛ", выбираем комплектующий "Полка". Задаем название "Полка СТФЛ" и
          ставим галочку "Состоит из комплектующих". Затем, выбираем стеллаж "СТФЛ", в вкладке "Входит в комплект"
          "Полка СТФЛ", и пишем название "Полка СТФЛ 700х300"</small
        >
      </div>
    </div>
    <template #modal-footer>
      <b-btn variant="corp" @click="addComponent()">Добавить</b-btn>
      <b-btn variant="danger" @click="closeModal()">Отменить</b-btn>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ManagerRackTypeComponentAdd',
  data() {
    return {
      form: {
        title: '',
        rack_type_uuid: null,
        rack_component_uuid: null,
        is_constructor: false,
        component_uuid: null,
      },
    }
  },
  computed: {
    getParameters() {
      return this.$store.getters['manager/rack/parameter/getParameter']
    },
    getRacks() {
      return this.$store.getters['type/getTypes']
    },
    getRackComponents() {
      return this.$store.getters['manager/rack/component/getRackComponent']
        .filter(item => item.is_constructor === true)
        .filter(item => item.rack_uuid === this.form.rack_type_uuid)
    },
    getComponents() {
      return this.$store.getters['manager/rack/component/getComponent']
    },

    selectedRack() {
      if (this.getRacks.find(item => item.uuid === this.form.rack_type_uuid)) {
        return this.getRacks.find(item => item.uuid === this.form.rack_type_uuid)
      }
      return {}
    },
    selectedComponent() {
      if (this.getComponents.find(item => item.uuid === this.form.component_uuid)) {
        return this.getComponents.find(item => item.uuid === this.form.component_uuid)
      }
      return {}
    },
    selectedRackComponent() {
      if (this.getRackComponents.find(item => item.uuid === this.form.rack_component_uuid)) {
        return this.getRackComponents.find(item => item.uuid === this.form.rack_component_uuid)
      }
      return {}
    },
    selectedParameter() {
      if (this.getParameters.find(item => item.uuid === this.form.parameter_uuid)) {
        return this.getParameters.find(item => item.uuid === this.form.parameter_uuid)
      }
      return {}
    },
  },
  mounted() {
    this.$bvModal.show('manager-type-component-add')
    this.$store.dispatch('type/fetchTypes')
    this.$store.dispatch('manager/rack/parameter/fetchParameter')
    this.$store.dispatch('manager/rack/component/fetchComponent')
    this.$store.dispatch('manager/rack/component/fetchRackComponent')
  },
  methods: {
    selectParameter(uuid) {
      this.form.parameter_uuid = uuid
    },
    selectComponent(uuid) {
      this.form.component_uuid = uuid
    },
    selectRackComponent(uuid) {
      this.form.rack_component_uuid = uuid
    },
    selectConstructor() {
      this.form.is_constructor = !this.form.is_constructor
    },
    selectRack(uuid) {
      this.form.rack_type_uuid = uuid
    },
    getUuid() {
      return this.$store.getters.getNewUuid(new Date())
    },
    closeModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerRackComponentAdd',
        modalStatus: false,
      })
    },
    addComponent() {
      this.$store
        .dispatch('manager/rack/component/postRackComponent', {
          uuid: this.getUuid(),
          rack_uuid: this.form.rack_type_uuid,
          component_uuid: this.form.component_uuid,
          rack_component_value: this.form.title,
          is_constructor: this.form.is_constructor,
          parent_uuid: this.form.rack_component_uuid,
        })
        .then(() => {
          this.form.title = ''
          this.form.component_uuid = null
          this.form.rack_type_uuid = null
          this.form.rack_component_uuid = null
          this.form.is_constructor = false
          this.closeModal()
          this.$store.dispatch('manager/rack/component/fetchRackComponent')
        })
    },
  },
}
</script>
