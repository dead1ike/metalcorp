<template>
  <div class="d-flex flex-column h-100 overflow-hidden">
    <manager-rack-control :links="getRouteChieldAvito('/manager/rack/manage')"></manager-rack-control>
    <NuxtChild class="p-4 shadow h-100 overflow-auto"></NuxtChild>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  methods: {
    getRouteChieldAvito(parent) {
      const routerOptions = this.$router.options.routes.find((routeItem) => {
        return routeItem.path === parent
      })
      if (routerOptions && routerOptions.children) return routerOptions.children
      else return []
    },
  },
}
</script>
