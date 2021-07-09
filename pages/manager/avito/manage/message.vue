<template>
  <div class="d-flex flex-column overflow-hidden">
    <div class="overflow-hidden h-100">
      <b-table
        striped
        :items="getMessages"
        :fields="getFields"
        head-variant="light"
        sticky-header="100%"
        bordered
        hover
        no-border-collapse
      >
        <template #cell(author_id)="data">
          <div v-if="data.item.avito_user">
            <div>
              <b-avatar size="6rem" rounded :src="data.item.avito_user.avatar"></b-avatar>
            </div>
            <div>
              <a :href="data.item.avito_user.url" target="_blank">{{ data.item.avito_user.name }}</a>
            </div>
          </div>
        </template>
        <template #cell(content)="data">
          <div class="d-flex flex-column">
            <div class="d-flex">
              <div class="flex-fill">
                {{
                  $DateTime
                    .fromISO(data.item.created_at)
                    .setLocale('ru')
                    .toLocaleString($DateTime.DATETIME_SHORT)
                }}
              </div>
              <div>
                <!--                <template v-if="data.item.last_message.direction === 'in'">-->
                <!--                  <b-icon-envelope-fill scale="1.75" animation="fade" variant="corp" class="mx-2" />-->
                <!--                </template>-->
                <!--                <b-icon-box-arrow-in-down-right v-else scale="1.75" variant="corp" />-->
              </div>
              <hr />
            </div>
            <div>
              {{ data.item.content.text }}
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
        <b-btn variant="primary" class="py-2 m-1" @click="fetchMessages()">Получить сообщения</b-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  computed: {
    getMessages() {
      return this.$store.getters['manager/avito/message/getMessages']
    },
    getFields() {
      return [
        // {
        //   key: 'avito_chat_id',
        // },
        {
          key: 'author_id',
        },
        {
          key: 'content',
        },
        {
          key: 'direction',
        },
        {
          key: 'type',
        },
        {
          key: 'actions',
        },
      ]
    },
  },
  methods: {
    fetchMessages() {
      this.$store.dispatch('manager/avito/message/fetchMessages')
    },
    // fetchMessagesTemp() {
    //   this.$store.dispatch('manager/avito/message/fetchMessagesTemp')
    // },
  },
}
</script>

<style scoped></style>
