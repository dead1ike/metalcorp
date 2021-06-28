<template>
  <div>
    <b-table
      id="catalog-table"
      :items="items"
      :fields="fields"
      striped
      small
      primary-key="a"
      :tbody-transition-props="transProps"
    ></b-table>
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
      items: [
        {
          rack_name: 'СТФЛ Стеллаж 180х100х30',
          rack_description: '',
          rack_category: 'Металлические стеллажи',
          rack_subcategory: 'Архивные стеллажи',
          rack_type: 'СТФЛ',
          rack_height: '1800',
          rack_width: '1000',
          rack_depth: '300',
          rack_shelves_count: '3',
          rack_shelf_load: '100',
          rack_load: '750',
        },
      ],
      fields: [
        { key: 'rack_name', label: 'Название', sortable: true },
        { key: 'rack_description', label: 'Описание', sortable: true },
        { key: 'rack_category', label: 'Категория', sortable: true },
        { key: 'rack_subcategory', label: 'Подкатегория', sortable: true },
        { key: 'rack_type', label: 'Вид', sortable: true },
        { key: 'rack_height', label: 'Высота', sortable: true },
        { key: 'rack_width', label: 'Ширина', sortable: true },
        { key: 'rack_depth', label: 'Глубина', sortable: true },
        { key: 'rack_shelves_count', label: 'Кол-во полок', sortable: true },
        { key: 'rack_shelf_load', label: 'Нагрузка на полку', sortable: true },
        { key: 'rack_load', label: 'Нагрузка на стеллаж', sortable: true },
      ],
    }
  },
}
</script>
