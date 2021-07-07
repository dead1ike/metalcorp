<template>
  <div class="d-flex flex-column h-100 overflow-hidden">
    <manager-avito-menu :links="getRouteChildAvito('/manager/avito/manage')"></manager-avito-menu>
    <NuxtChild class="shadow h-100 overflow-auto"></NuxtChild>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  methods: {
    getRouteChildAvito(parent) {
      const routerOptions = this.$router.options.routes.find(routeItem => {
        return routeItem.path === parent
      })
      if (routerOptions && routerOptions.children) return routerOptions.children
      else return []
    },
  },
}
</script>
