<template>
  <div class="d-flex flex-column overflow-hidden">
    <div class="overflow-hidden h-100">
      <b-table
        striped
        :items="getChats"
        :fields="getFields"
        head-variant="light"
        sticky-header="100%"
        bordered
        hover
        no-border-collapse
      >
        <template #cell(avito_user_id)="data">
          <div v-if="data.item.avito_user">
            <div>
              <b-img :src="data.item.avito_user.avatar" thumbnail></b-img>
            </div>
            <div>
              {{ data.item.avito_user.price_string }}
            </div>
            <div>
              <a :href="data.item.avito_user.url" target="_blank">{{ data.item.avito_user.name }}</a>
            </div>
            <div>
              {{ data.item.avito_user.location_title }}
            </div>
          </div>
        </template>
        <template #cell(avito_item_id)="data">
          <div>
            <div>
              {{ data.item.avito_item.price_string }}
            </div>
            <div>
              <a :href="data.item.avito_item.url" target="_blank">{{ data.item.avito_item.title }}</a>
            </div>
            <div>
              {{ data.item.avito_item.location_title }}
            </div>
          </div>
        </template>
        <template #cell(last_message_content)="data">
          <div class="d-flex flex-column">
            <div class="">
              {{
                $DateTime
                  .fromISO(data.item.last_message_created_at)
                  .setLocale('ru')
                  .toLocaleString($DateTime.DATETIME_SHORT)
              }}
              <hr />
            </div>
            <div>
              {{ data.item.last_message_content.text }}
            </div>
          </div>
        </template>
      </b-table>
    </div>
    <div class="overflow-hidden text-center d-flex flex-row bg-light">
      <div class="flex-fill d-flex justify-content-center">
        <b-pagination pills :total-rows="100" class="p-2 m-1 "></b-pagination>
      </div>
      <div>
        <b-btn variant="primary" class="py-2 m-1" @click="fetchChats()">Получить чаты</b-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  computed: {
    getChats() {
      return this.$store.getters['manager/avito/chat/getChats']
    },
    getFields() {
      return [
        {
          key: 'avito_user_id',
        },
        {
          key: 'avito_item_id',
        },
        {
          key: 'last_message_content',
        },
        {
          key: 'actions',
        },
      ]
    },
  },
  methods: {
    fetchChats() {
      this.$store.dispatch('manager/avito/chat/fetchChats')
    },
    // fetchChatsTemp() {
    //   this.$store.dispatch('manager/avito/chat/fetchChatsTemp')
    // },
  },
}
</script>

<style scoped></style>
