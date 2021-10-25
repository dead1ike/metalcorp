<template>
  <div class="w-100 overflow-hidden">
    <b-nav class="overflow-auto flex-nowrap">
      <!--      <b-nav-item to="/manager/rack/manage/category"> Категория </b-nav-item>-->
      <b-nav-item to="/manager/rack/manage/type"> Тип </b-nav-item>
      <!--      <b-nav-item to="/manager/rack/manage/parameter"> Параметр </b-nav-item>-->
      <b-nav-item to="/manager/rack/manage/component"> Компонент </b-nav-item>
      <b-nav-item to="/manager/rack/manage/rack_component"> Компонент стеллажа </b-nav-item>
      <!--      <b-nav-item to="/manager/rack/manage/offer"> Заказы </b-nav-item>-->
      <!--      <b-nav-item to="/manager/rack/manage/price"> Цена компонента стеллажа </b-nav-item>-->
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
