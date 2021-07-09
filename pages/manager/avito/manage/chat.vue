<template>
  <div class="d-flex flex-column overflow-hidden">
    <div class="overflow-hidden h-100">
      <b-list-group class="overflow-auto h-100">
        <template v-for="itemChat in getChats">
          <b-list-group-item :key="itemChat.id" class="btn-light">
            <div>
              <div>
                <div>
                  <span class="text-secondary">{{ itemChat.avito_item.location_title }}: </span>
                  <span class="text-success">{{ itemChat.avito_item.price_string }} - </span>
                  <a :href="itemChat.avito_item.url" target="_blank">{{ itemChat.avito_item.title }}</a>
                </div>
              </div>

              <div class="d-flex">
                <div class="py-2">
                  <b-avatar
                    size="6rem"
                    :src="
                      itemChat.avito_user.avatar !== 'https://static.avito.ru/stub_avatars/_/14_256x256.png'
                        ? itemChat.avito_user.avatar
                        : null
                    "
                    :text="itemChat.avito_user.name.substr(0, 2)"
                  ></b-avatar>
                </div>
                <div class="p-2 w-100">
                  <div class="border-bottom">
                    <a :href="itemChat.avito_user.url" target="_blank">{{ itemChat.avito_user.name }}</a>
                    <span> | </span>
                    {{
                      $DateTime
                        .fromISO(itemChat.last_message_created_at)
                        .setLocale('ru')
                        .toLocaleString($DateTime.DATETIME_SHORT)
                    }}
                  </div>
                  <div class="p-2">
                    {{ itemChat.last_message.content.text }}
                    <div class="d-flex">
                      <div class="flex-fill">
                        <b-textarea v-model="itemChat.textOutMessage" size="sm"></b-textarea>
                      </div>
                      <div class="m-1">
                        <b-btn class="btn-icon" variant="primary" @click="sendMessageChat(itemChat)">
                          <b-icon-forward></b-icon-forward>
                        </b-btn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-list-group-item>
        </template>
        <!--        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>-->
        <!--        <b-list-group-item>Morbi leo risus</b-list-group-item>-->
        <!--        <b-list-group-item>Porta ac consectetur ac</b-list-group-item>-->
        <!--        <b-list-group-item>Vestibulum at eros</b-list-group-item>-->
      </b-list-group>
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
              <div>
                <b-avatar size="4rem" :src="data.item.avito_user.avatar" class="mr-2"></b-avatar>

                {{ data.item.last_message.content.text }}
              </div>
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
      return _.merge([], this.$store.getters['manager/avito/chat/getChats'])
    },
    getFields() {
      return [
        // {
        //   key: 'avito_user_id',
        // },
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
    sendMessageChat(itemChat) {
      console.warn('itemChat', itemChat)
      this.$store.dispatch('manager/avito/chat/sendMessageChat', {
        chat_id: itemChat.id,
        text: itemChat.textOutMessage,
      })
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
