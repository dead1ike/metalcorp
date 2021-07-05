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
  name: 'ManagerAvitoMenu',
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
        chat: {
          title: 'Чаты',
        },
        item: {
          title: 'объявления',
        },
        message: {
          title: 'Сообщения',
        },
        setting: {
          title: 'Настройки',
        },
        user: {
          title: 'Клиенты',
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

<style scoped></style>
