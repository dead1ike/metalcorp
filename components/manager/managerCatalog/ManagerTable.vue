<template>
  <div>
    <b-table
      id="manager-table"
      :items="items"
      :fields="fields"
      striped
      small
      primary-key="a"
      :tbody-transition-props="transProps"
    >
      <template #cell(rack_description)>
        <b-btn id="btn-description" variant="corp" size="sm" block><b-icon icon="eye"></b-icon></b-btn>
        <b-popover target="btn-description" triggers="hover"
          >Тут должно быть описание, но его спиздили еноты...
        </b-popover>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'ManagerTable',
  data() {
    return {
      transProps: {
        // Transition name
        name: 'flip-list',
      },
      items: [],
      fields: [
        { key: 'rack_name', label: 'Название', sortable: true },
        { key: 'rack_category', label: 'Категория', sortable: true },
        { key: 'rack_type_parameters', label: 'Параметры стеллажа', sortable: true },
        { key: 'rack_shelf_load', label: 'Нагрузка на полку', sortable: true },
        { key: 'rack_load', label: 'Нагрузка на стеллаж', sortable: true },
        { key: 'rack_section_load', label: 'Нагрузка на секцию', sortable: true },
        { key: 'action', label: 'Действие' },
      ],
    }
  },
}
</script>
