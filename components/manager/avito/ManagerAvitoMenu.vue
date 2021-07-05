<template>
  <div class="overflow-hidden" style="min-width: 580px">
    <b-nav class="overflow-auto">
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
