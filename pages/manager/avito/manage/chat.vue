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
              <b-avatar size="6rem" rounded :src="data.item.avito_user.avatar"></b-avatar>
            </div>
            <div>
              <a :href="data.item.avito_user.url" target="_blank">{{ data.item.avito_user.name }}</a>
            </div>
          </div>
        </template>
        <template #cell(avito_item_id)="data">
          <div v-if="data.item.avito_item">
            <div>
              {{ data.item.avito_item.location_title }}
            </div>
            <div class="text-success">
              {{ data.item.avito_item.price_string }}
            </div>
            <div>
              <a :href="data.item.avito_item.url" target="_blank">{{ data.item.avito_item.title }}</a>
            </div>
          </div>
        </template>
        <template #cell(last_message)="data">
          <div class="d-flex flex-column">
            <div class="d-flex">
              <div class="flex-fill">
                {{
                  $DateTime
                    .fromISO(data.item.last_message_created_at)
                    .setLocale('ru')
                    .toLocaleString($DateTime.DATETIME_SHORT)
                }}
              </div>
              <div>
                <template v-if="data.item.last_message.direction === 'in'">
                  <b-icon-envelope-fill scale="1.75" animation="fade" variant="corp" class="mx-2" />
                </template>
                <!--                <b-icon-box-arrow-in-down-right v-else scale="1.75" variant="corp" />-->
              </div>
              <hr />
            </div>
            <div>
              {{ data.item.last_message.content.text }}
            </div>
          </div>
        </template>
        <template #cell(actions)="data">
          <b-btn class="btn-icon" variant="link" @click="fetchMessageChat(data.item)">
            <b-icon-download></b-icon-download>
          </b-btn>
        </template>
      </b-table>
    </div>
    <div class="overflow-hidden text-center d-flex flex-row bg-light">
      <div class="flex-fill d-flex justify-content-center">
        <b-pagination pills :total-rows="100" class="p-2 m-1 "></b-pagination>
      </div>
      <div>
        <b-btn variant="outline-primary" class="py-2 m-1" @click="fetchAvitoChats()">Обновить с Avito</b-btn>
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
          key: 'last_message',
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
    fetchMessageChat(itemChat) {
      console.warn(itemChat)
      this.$store.dispatch('manager/avito/chat/fetchMessageChat', {
        chat_id: itemChat.id,
        item_id: itemChat.avito_item_id,
      })
    },
    fetchAvitoChats() {
      this.$store.dispatch('manager/avito/chat/fetchAvitoChats').then(() => this.fetchChats())
    },
  },
}
</script>

<style scoped></style>
