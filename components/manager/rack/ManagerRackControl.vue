<template>
  <div class="w-100 overflow-hidden">
    <b-nav class="overflow-auto flex-nowrap">
      <b-nav-item v-for="itemLink in links" :key="itemLink.name" :to="itemLink">
        {{ getLinkTitle(itemLink.path) }}
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
        component: {
          title: 'Компонент',
        },
        rack_component: {
          title: 'Компонент стеллажа',
        },
        price: {
          title: 'Цена',
        },
      },
      items: [
        {
          path: 'manage/category',
          title: 'Категория',
        },
        {
          path: 'manage/type',
          title: 'Тип',
        },
        {
          path: 'manage/parameter',
          title: 'Параметры',
        },
        {
          path: 'manage/component',
          title: 'Компонент',
        },
        {
          path: 'manage/rack_component',
          title: 'Компонент стеллажа',
        },
        {
          path: 'manage/price',
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
