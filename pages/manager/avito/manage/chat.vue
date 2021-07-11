<template>
  <div class="d-flex flex-column overflow-hidden">
    <div class="overflow-hidden h-100">
      <b-list-group class="overflow-auto h-100">
        <template v-for="itemChat in getChats">
          <b-list-group-item :key="itemChat.id" class="btn-light p-0 mb-1">
            <div class="">
              <div class="p-2 bg-dark">
                <div>
                  <span class="text-secondary">{{ itemChat.avito_item.location_title }}: </span>
                  <span class="text-success">{{ itemChat.avito_item.price_string }} - </span>
                  <a :href="itemChat.avito_item.url" target="_blank">{{ itemChat.avito_item.title }}</a>
                </div>
              </div>

              <div class="d-flex">
                <div class="p-2">
                  <b-avatar
                    v-if="itemChat.avito_user"
                    :href="itemChat.avito_user.url"
                    target="_blank"
                    size="6rem"
                    :src="
                      itemChat.avito_user.avatar !== 'https://static.avito.ru/stub_avatars/_/14_256x256.png'
                        ? itemChat.avito_user.avatar
                        : null
                    "
                    :text="itemChat.avito_user.name.substr(0, 2)"
                    :style="'background-color: #' + intToRGB(hashCode(itemChat.avito_user.name))"
                  />
                </div>
                <div class="p-2 w-100">
                  <!-- Имя и дата -->
                  <div class="border-bottom">
                    <a class="font-weight-bold" :href="itemChat.avito_user.url" target="_blank">
                      {{ itemChat.avito_user.name }}
                    </a>
                    <span> | </span>
                    {{
                      $DateTime
                        .fromISO(itemChat.last_message_created_at)
                        .setLocale('ru')
                        .toLocaleString($DateTime.DATETIME_SHORT)
                    }}
                  </div>
                  <!-- Содержимое сообщения -->
                  <div class="p-2">
                    <div class="d-flex" :class="{ 'flex-row-reverse': itemChat.last_message.direction === 'out' }">
                      <!-- Тип text -->
                      <template v-if="itemChat.last_message.type === 'text'">
                        <div class="px-2">
                          <b-icon-reply-fill
                            :rotate="itemChat.last_message.direction === 'out' ? 240 : 90"
                            variant="success"
                            scale="1.5"
                          />
                        </div>

                        <b-alert show="" variant="light">
                          <div v-for="itemText in itemChat.last_message.content.text.split('\n')" :key="itemText">
                            {{ itemText }}
                          </div>
                        </b-alert>

                        <div class="px-4"></div>
                      </template>
                      <!-- Тип image -->
                      <template v-else-if="itemChat.last_message.type === 'image'">
                        <div class="px-2">
                          <b-icon-reply-fill
                            :rotate="itemChat.last_message.direction === 'out' ? 240 : 90"
                            variant="success"
                            scale="1.5"
                          />
                        </div>

                        <b-alert show="" variant="light">
                          <div>
                            {{ itemChat.last_message.content.image }}
                          </div>
                        </b-alert>

                        <div class="px-4"></div>
                      </template>
                      <!-- Тип call -->
                      <template v-else-if="itemChat.last_message.type === 'call'">
                        <div class="px-2">
                          <b-icon-telephone-outbound
                            :rotate="itemChat.last_message.direction === 'out' ? 240 : 90"
                            :variant="itemChat.last_message.content.call.status === 'missed' ? 'danger' : 'success'"
                            scale="1.5"
                          />
                        </div>

                        <b-alert show="" variant="light">
                          <div>
                            {{
                              itemChat.last_message.content.call.status === 'missed'
                                ? 'Пропущенный звонок'
                                : 'Принятый звонок'
                            }}
                            {{ itemChat.last_message.content.call }}
                          </div>
                        </b-alert>

                        <div class="px-4"></div>
                      </template>
                    </div>

                    <!-- Отправить сообщение -->
                    <div class="d-flex">
                      <div class="flex-fill pt-2">
                        <b-textarea v-model="itemChat.textOutMessage" size="sm"></b-textarea>
                      </div>
                      <div class="p-2">
                        <b-btn class="btn-icon" variant="outline-primary" @click="sendMessageChat(itemChat)">
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
      </b-list-group>
    </div>
    <div class="overflow-hidden text-center d-flex flex-row bg-light">
      <div class="flex-fill d-flex justify-content-center">
        <b-pagination pills :total-rows="100" class="p-2 m-1 "></b-pagination>
      </div>
      <div>
        <!--        <b-btn variant="outline-primary" class="py-2 m-1" @click="fetchAccountOther()">U</b-btn>-->
        <!--        <b-btn variant="outline-primary" class="py-2 m-1" @click="sendMessageChats()">T</b-btn>-->
        <b-btn variant="outline-primary" class="py-2 m-1" @click="fetchAvitoChats()">Get Avito</b-btn>
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
    hashCode(str) {
      // java String#hashCode
      let hash = 0
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash)
      }
      return hash
    },
    intToRGB(i) {
      const c = (i & 0x00ffffff).toString(16).toUpperCase()
      return '00000'.substring(0, 6 - c.length) + c
    },
    fetchChats() {
      this.$store.dispatch('manager/avito/chat/fetchChats')
    },
    sendMessageChat(itemChat) {
      console.warn('itemChat', itemChat)
      if (itemChat.textOutMessage && itemChat.textOutMessage.length >= 1) {
        this.$store.dispatch('manager/avito/chat/sendMessageChat', {
          chat_id: itemChat.id,
          text: itemChat.textOutMessage,
        })
      } else {
        this.makeToast('Нечего отправлять, напишите текст', 'danger')
      }
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
    sendMessageChats() {
      this.$store.dispatch('manager/avito/chat/sendMessageChats').then(() => this.fetchChats())
    },
    fetchAccountOther() {
      this.$store.dispatch('manager/avito/chat/fetchAccountOther').then(() => this.fetchChats())
    },
    makeToast(body = 'Ничего не произошло', variant = 'success', title = 'Уведомление') {
      this.$bvToast.toast(body, {
        title,
        autoHideDelay: 5000,
        appendToast: false,
        variant,
        toaster: 'b-toaster-bottom-right',
      })
    },
  },
}
</script>

<style scoped></style>
