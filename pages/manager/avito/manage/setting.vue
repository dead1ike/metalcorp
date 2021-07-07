<template>
  <div>
    <div class="p-0 p-sm-2">
      <b-form-group label-cols-lg="3" label-size="lg" label-class="font-weight-bold pt-0" class="mb-0">
        <b-form-group label="Client_id:" label-for="nested-Client_id" label-cols-sm="3" label-align-sm="right">
          <b-form-input id="nested-Client_id" v-model="form.authorization_code.client_id" disabled></b-form-input>
        </b-form-group>

        <b-form-group label="Client_secret:" label-for="nested-Client_secret" label-cols-sm="3" label-align-sm="right">
          <b-form-input
            id="nested-Client_secret"
            v-model="form.authorization_code.client_secret"
            disabled
          ></b-form-input>
        </b-form-group>
      </b-form-group>

      <div class="d-flex flex-column flex-sm-row w-100 justify-content-between">
        <b-btn class="m-1" variant="danger" @click="fetchSettngs()">Сбросить</b-btn>
        <b-btn class="m-1" variant="success" :disabled="!isChange" @click="saveSettngs()">Сохранить</b-btn>
      </div>
    </div>

    <div class="d-flex flex-column">
      <b-list-group class="py-2 px-sm-2">
        <b-list-group-item class="d-flex justify-content-between align-items-center" variant="light">
          <div>token</div>
          <div>
            <b-btn
              variant="primary"
              :disabled="getDuration(getToken.updated_at).seconds >= 0"
              @click="fetchSettngToken()"
            >
              Получить новый токен
            </b-btn>
          </div>
        </b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <div>expires_in</div>
          <div class="px-2"></div>
          <div>{{ form.token.expires_in }}</div>
        </b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <div>token_type</div>
          <div class="px-2"></div>
          <div>{{ form.token.token_type }}</div>
        </b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <div>access_token</div>
          <div class="px-2"></div>
          <div class="text-truncate">{{ form.token.access_token }}</div>
        </b-list-group-item>

        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          :class="{
            'bg-danger': getDuration(getToken.updated_at).seconds <= 0,
            'bg-success': getDuration(getToken.updated_at).seconds >= 0,
          }"
        >
          <div>Окончание действия токена</div>
          <div class="px-2"></div>
          <div>
            Часов: {{ getDuration(getToken.updated_at).hours }}<br />
            Минут: {{ getDuration(getToken.updated_at).minutes }}<br />
          </div>
        </b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <div>Обновлен</div>
          <div class="px-2"></div>
          <div>
            {{
              $DateTime
                .fromISO(getToken.updated_at)
                .setLocale('ru')
                .toLocaleString($DateTime.DATETIME_SHORT)
            }}
          </div>
        </b-list-group-item>
      </b-list-group>

      <b-list-group class="py-2 px-sm-2">
        <b-list-group-item class="d-flex justify-content-between align-items-center" variant="light">
          <div>account</div>
          <div>
            <b-btn
              variant="primary"
              :disabled="getDuration(getAccount.fetching_at).hours <= 1"
              @click="fetchSettngAccount()"
            >
              Обновить данные компании
            </b-btn>
          </div>
        </b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <div>id</div>
          <div class="px-2"></div>
          <div>{{ form.account.id }}</div>
        </b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <div>name</div>
          <div class="px-2"></div>
          <div>{{ form.account.name }}</div>
        </b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <div>email</div>
          <div class="px-2"></div>
          <div>{{ form.account.email }}</div>
        </b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <div>phone</div>
          <div class="px-2"></div>
          <div>{{ form.account.phone }}</div>
        </b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <div>profile_url</div>
          <div class="px-2"></div>
          <div class="text-truncate">
            <a :href="form.account.profile_url" target="_blank">{{ form.account.profile_url }}</a>
          </div>
        </b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <div>Обновлен</div>
          <div class="px-2"></div>
          <div>
            {{
              $DateTime
                .fromISO(getAccount.fetching_at)
                .setLocale('ru')
                .toLocaleString($DateTime.DATETIME_SHORT)
            }}
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  data() {
    return {
      busy: {
        fetching: true,
      },
      form: {
        authorization_code: {
          client_id: null,
          client_secret: null,
        },
        token: {
          expires_in: null,
          token_type: null,
          access_token: null,
        },
        account: {
          id: null,
          name: null,
          email: null,
          phone: null,
          profile_url: null,
        },
      },
    }
  },
  computed: {
    getToken() {
      return this.$store.getters['manager/avito/setting/getToken'] || {}
    },
    getAccount() {
      return this.$store.getters['manager/avito/setting/getAccount'] || {}
    },
    getItemAuthorizationCode() {
      return this.$store.getters['manager/avito/setting/getItemAuthorizationCode'] || {}
    },
    isChange() {
      return (
        this.form.authorization_code.client_id !== this.getItemAuthorizationCode.client_id ||
        this.form.authorization_code.client_secret !== this.getItemAuthorizationCode.client_secret
      )
    },
  },
  mounted() {
    this.fetchSettngs()
  },
  methods: {
    getDuration(date) {
      return (
        this.$DateTime
          .fromISO(date)
          // .fromISO(getToken.updated_at)
          .plus({ seconds: this.form.token.expires_in })
          .diff(this.$DateTime.now(), ['months', 'days', 'hours', 'minutes', 'seconds'])
          .toObject()
      )
    },
    saveSettngs() {
      this.$store.dispatch('asdasd')
    },
    fetchSettngs() {
      this.$store.dispatch('manager/avito/setting/fetchSettngs').then(() => {
        this.setForm()
        this.busy.fetching = false
      })
    },
    fetchSettngToken() {
      this.busy.fetching = true
      this.$store.dispatch('manager/avito/setting/fetchSettngToken').then(() => {
        this.fetchSettngs()
      })
    },
    fetchSettngAccount() {
      this.busy.fetching = true
      this.$store.dispatch('manager/avito/setting/fetchSettngAccount').then(() => {
        this.fetchSettngs()
      })
    },
    setForm() {
      this.form.authorization_code = _.merge(this.form.authorization_code, this.getItemAuthorizationCode)
      this.form.token = _.merge(this.form.token, this.getToken.value)
      this.form.account = _.merge(this.form.account, this.getAccount.value)
      console.warn(this.getToken.updated_at)
    },
  },
}
</script>

<style scoped></style>
