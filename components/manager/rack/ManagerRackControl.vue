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
          path: 'price',
          title: 'Цена',
        },
        {
          path: 'type_parameter',
          title: 'Параметр стеллажа',
        },
      ],
    }
  },
  methods: {
    getLinkTitle(linkPath) {
      console.warn(this.links)
      if (this.linkPathMaps[linkPath]) {
        return this.linkPathMaps[linkPath].title
      }
      return linkPath
    },
  },
}
</script>
