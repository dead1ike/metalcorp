<template>
  <div class="w-100 overflow-hidden">
    <b-nav class="overflow-auto flex-nowrap">
      <b-nav-item class="btn-light" @click="fetchAll()">
        <b-icon-arrow-clockwise variant="primary" :animation="busy.fetchAll ? 'spin' : ''"></b-icon-arrow-clockwise>
      </b-nav-item>
      <template v-for="itemLink in links">
        <b-nav-item v-if="itemLink.path" :key="itemLink.name" class="btn-light" :to="itemLink">
          {{ getLinkTitle(itemLink.path) }}
        </b-nav-item>
      </template>
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
      busy: {
        fetchAll: false,
      },
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
  mounted() {
    this.fetchAll()
  },
  methods: {
    getLinkTitle(linkPath) {
      if (this.linkPathMaps[linkPath]) {
        return this.linkPathMaps[linkPath].title
      }
      return linkPath
    },
    fetchAll() {
      console.warn('fetchAll')
      this.busy.fetchAll = true
      Promise.all([
        this.$store.dispatch('manager/avito/setting/fetchSettngs'),
        this.$store.dispatch('manager/avito/item/fetchItems'),
        this.$store.dispatch('manager/avito/user/fetchUsers'),
        this.$store.dispatch('manager/avito/message/fetchMessages'),
        this.$store.dispatch('manager/avito/chat/fetchChats'),
      ]).finally(() => {
        this.busy.fetchAll = false
      })
    },
  },
}
</script>

<style scoped></style>
