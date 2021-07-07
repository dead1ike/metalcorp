<template>
  <div class="w-100 overflow-hidden">
    <b-nav class="overflow-auto flex-nowrap">
      <b-nav-item v-for="itemLink in items" :key="itemLink.path" :to="itemLink">
        {{ getLinkTitle(itemLink.title) }}
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'ManagerRackControl',
  props: {
    links: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      linkPathMaps: {
        category: {
          title: 'Категория',
        },
        type: {
          title: 'Тип',
        },
        parameter: {
          title: 'Параметры',
        },
        price: {
          title: 'Цена',
        },
      },
      items: [
        {
          path: 'category',
          title: 'Категория',
        },
        {
          path: 'type',
          title: 'Тип',
        },
        {
          path: 'parameter',
          title: 'Параметры',
        },
        {
          path: 'rack_parameter',
          title: 'Параметр стеллажа',
        },
        {
          path: 'component',
          title: 'Компонент',
        },
        {
          path: 'rack_component',
          title: 'Компонент стеллажа',
        },
        {
          path: 'price',
          title: 'Цена',
        },
      ],
    }
  },
  methods: {
    getLinkTitle(linkPath) {
      if (this.linkPathMaps[linkPath]) {
        return this.linkPathMaps[linkPath].title
      }
      return linkPath
    },
  },
}
</script>
