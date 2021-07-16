<template>
  <div class="align-self-center w-100" @keyup.enter="login()">
    <b-card title="Авторизация" class="container-fluid shadow" style="max-width: 600px">
      <b-form-group>
        <b-form-group label="E-mail"
          ><b-form-input v-model="form.username" size="lg" type="email"></b-form-input>
        </b-form-group>
        <b-form-group label="Пароль">
          <b-form-input v-model="form.password" size="lg" type="password"></b-form-input>
        </b-form-group>
      </b-form-group>
      <div class="d-flex justify-content-between w-100">
        <b-btn class="px-5" size="lg" variant="light-blue" @click="login()">Логин</b-btn>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'AuthLogin',
  layout: 'manager',
  data() {
    return {
      status: {
        isBusy: false,
      },
      form: {
        username: '',
        password: '',
        grant_type: 'password',
        client_id: process.env.PASSPORT_CLIENT_GRANT_ID,
        client_secret: process.env.PASSPORT_CLIENT_GRANT_SECRET,
        scope: '',
      },
      error: {
        username: {
          isValid: null,
          message: null,
        },
        password: {
          valid: null,
          msg: null,
        },
      },
    }
  },
  computed: {
    loggedin() {
      return this.$auth.loggedIn
    },
  },
  watch: {
    'form.username'(newValue) {
      if (newValue.length > 0) this.validateEmail()
      else this.error.username.isValid = null
    },
    'form.password'(nValue) {
      if (nValue.length > 0) this.validatePass()
      else this.error.password.valid = null
    },
  },
  created() {},
  methods: {
    validateEmail() {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.form.username)) {
        this.error.username.message = null
        this.error.username.isValid = true
      } else {
        this.error.username.message = 'Неверный формат Email (example@mail.ru)'
        this.error.username.isValid = false
      }
    },
    validatePass() {
      if (this.form.password.length !== 0) {
        this.error.password.msg = null
        this.error.password.valid = true
      } else {
        this.error.password.msg = 'Вы не ввели пароль'
        this.error.password.valid = false
      }
    },
    checkForm() {
      let isValid = true
      // check email
      if (this.error.username.isValid !== true) {
        this.makeToast('Укажите Email', 'warning')
        isValid = false
      }
      // check password
      if (this.error.password.valid !== true) {
        this.makeToast('Введите пароль', 'warning')
        isValid = false
      }
      return isValid
    },
    login() {
      if (!this.checkForm()) {
        return
      }

      this.$auth
        .loginWith('local', {
          data: {
            ...this.form,
          },
        })
        .then(response => {
          this.$auth.setUserToken(response.data.access_token, response.data.refresh_token).then(() => {
            this.makeToast('Вы успешно авторизовались')
            this.$router.push('/manager/manage')
            this.clearForm()
          })
        })
        .catch(() => {
          this.makeToast('Введен неправильный пароль', 'danger')
        })
    },
    // очистить форму
    clearForm() {
      this.form.username = ''
      this.form.password = ''
    },
    makeToast(body = 'Ничего не произошло', variant = 'success', title = 'Уведомление') {
      this.$bvToast.toast(body, {
        title,
        autoHideDelay: 3000,
        appendToast: false,
        variant,
        toaster: 'b-toaster-bottom-right',
      })
    },
  },
}
</script>
