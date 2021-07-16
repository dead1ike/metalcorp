<template>
  <b-modal id="user-add" scrollable size="md" body-class="px-5" centered lazy no-close-on-backdrop no-close-on-esc>
    <template #modal-header>
      <h5>{{ getEditUser.id ? 'Редактировать пользователя' : 'Создать пользователя' }}</h5>
    </template>
    <div @keyup.enter="addUser()">
      <b-form-group label="Email">
        <b-form-input v-model.trim="form.email" placeholder="Введите Email пользователя"></b-form-input>
      </b-form-group>
      <hr />
      <b-form-group label="Пароль">
        <b-form-input
          v-model.trim="form.password"
          type="password"
          placeholder="Введите пароль пользователя"
        ></b-form-input>
      </b-form-group>
      <b-btn v-if="getEditUser.id" variant="corp" @click="savePassword()">Сохранить пароль</b-btn>
    </div>
    <template #modal-footer>
      <b-btn v-if="getEditUser.id" variant="corp" @click="saveUser()">Сохранить</b-btn>

      <b-btn v-else variant="corp" @click="addUser()">Создать</b-btn>
      <b-btn variant="danger" @click="closeUser()">Закрыть</b-btn>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ManagerUserAdd',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    getEditUser() {
      return this.$store.getters['manager/user/getEditUser']
    },
  },
  mounted() {
    this.$bvModal.show('user-add')
    if (this.getEditUser.id) {
      this.form.email = this.getEditUser.email
    }
  },
  methods: {
    getUuid() {
      return this.$store.getters.getNewUuid(new Date())
    },
    addUser() {
      this.$store
        .dispatch('manager/user/addUser', {
          ...this.form,
          uuid: this.getUuid(),
        })
        .then(() => {
          this.makeToast('Новый ползьзователь добавлен в базу', 'success', 'УСПЕШНО')
          this.$store.dispatch('manager/user/fetchUsers')
          this.clearForm()
          this.closeUser()
        })
        .catch(({ response }) => {
          this.errors = response.data.errors
          for (const responseKey in this.errors) {
            if ({}.hasOwnProperty.call(this.errors, responseKey)) {
              this.makeToast(this.errors[responseKey][0], 'danger')
            }
          }
          if (response.data.message) {
            if (response.data.message !== 'The given data was invalid.') {
              this.makeToast(response.data.message, 'danger', 'Ошибка')
            }
          }
        })
    },
    saveUser() {
      this.$store
        .dispatch('manager/user/putUser', {
          email: this.form.email,
          id: this.getEditUser.id,
        })
        .then(() => {
          this.makeToast('Данные обновлены', 'success', 'УСПЕШНО')
          this.$store.dispatch('manager/user/fetchUsers')
          this.closeUser()
        })
        .catch(({ response }) => {
          this.errors = response.data.errors
          for (const responseKey in this.errors) {
            if ({}.hasOwnProperty.call(this.errors, responseKey)) {
              this.makeToast(this.errors[responseKey][0], 'danger')
            }
          }
          if (response.data.message) {
            if (response.data.message !== 'The given data was invalid.') {
              this.makeToast(response.data.message, 'danger', 'Ошибка')
            }
          }
        })
    },
    savePassword() {
      this.$store
        .dispatch('manager/user/putUser', {
          password: this.form.password,
          id: this.getEditUser.id,
        })
        .then(() => {
          this.makeToast('Пароль обновлен', 'success', 'УСПЕШНО')
          this.$store.dispatch('manager/user/fetchUsers')
        })
        .catch(({ response }) => {
          this.errors = response.data.errors
          for (const responseKey in this.errors) {
            if ({}.hasOwnProperty.call(this.errors, responseKey)) {
              this.makeToast(this.errors[responseKey][0], 'danger')
            }
          }
          if (response.data.message) {
            if (response.data.message !== 'The given data was invalid.') {
              this.makeToast(response.data.message, 'danger', 'Ошибка')
            }
          }
        })
    },
    closeUser() {
      this.$store.commit('manager/user/clearUser')

      this.$store.commit('setActiveModal', {
        modalName: 'userAdd',
        modalStatus: false,
      })
    },
    clearForm() {
      this.form = {
        email: '',
      }
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
