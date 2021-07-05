<template>
  <div>
    <div class="p-2">
      <b-form-group label-cols-lg="3" label-size="lg" label-class="font-weight-bold pt-0" class="mb-0">
        <b-form-group label="Client_id:" label-for="nested-Client_id" label-cols-sm="3" label-align-sm="right">
          <b-form-input id="nested-Client_id" v-model="form.authorization_code.client_id"></b-form-input>
        </b-form-group>

        <b-form-group label="Client_secret:" label-for="nested-Client_secret" label-cols-sm="3" label-align-sm="right">
          <b-form-input id="nested-Client_secret" v-model="form.authorization_code.client_secret"></b-form-input>
        </b-form-group>
      </b-form-group>

      <div class="text-right w-100">
        <b-btn variant="danger" @click="fetchSettngs()">Сбросить</b-btn>
        <b-btn variant="success" @click="saveSettngs()">Сохранить</b-btn>
      </div>
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
  mounted() {
    this.fetchSettngs()
  },
  methods: {
    saveSettngs() {
      this.$store.dispatch('asdasd')
    },
    fetchSettngs() {
      this.$store.dispatch('manager/avito/setting/fetchSettngs').then(() => {
        this.setForm()
        this.busy.fetching = false
      })
    },
    setForm() {
      this.form.authorization_code = _.merge(
        this.form.authorization_code,
        this.$store.getters['manager/avito/setting/getAuthorizationCode']
      )
      this.form.token = _.merge(this.form.token, this.$store.getters['manager/avito/setting/getToken'])
      this.form.account = _.merge(this.form.account, this.$store.getters['manager/avito/setting/getAccount'])
      console.warn(this.form)
    },
  },
}
</script>

<style scoped></style>
