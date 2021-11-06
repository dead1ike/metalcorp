<template>
  <div>
    <h3>Таблица кандидатов</h3>
    <div class="d-flex shadow p-4">
      <b-table
        class="w-100"
        no-border-collapse
        sticky-header
        hover
        striped
        borderless
        :items="getVacancyItems"
        :fields="getVacancyFields"
      >
        <template #cell(actions)="data">
          <b-btn :disabled="busy.vacancy" @click="downloadPdf(data.item.uuid)">Скачать</b-btn>
          <b-btn variant="danger" @click="deleteVacancy(data.item)">Удалить</b-btn>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManagerVacancyTable',
  data() {
    return {
      busy: {
        vacancy: false,
      },
    }
  },
  computed: {
    getVacancyItems() {
      return this.$store.getters['vacancy/getVacancies']
    },
    getVacancyFields() {
      return this.$store.getters.getManagerVacancyFiels
    },
  },
  mounted() {
    this.$store.dispatch('vacancy/fetchVacancies')
  },
  methods: {
    downloadPdf(uuid) {
      this.busy.vacancy = true
      this.$axios
        .get(`/api/vacancy/pdf_file/${uuid}`, {
          responseType: 'blob',
        })
        .then((response) => {
          this.busy.vacancy = false
          const blob = new Blob([response.data], { type: 'application/pdf' })
          const link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = `Резюме.pdf`
          link.click()
        })
        .catch(() => {
          this.busy.vacancy = false
        })
    },
    deleteVacancy(vacancy) {
      this.$store.dispatch('vacancy/deleteVacancy', vacancy).then(() => this.$store.dispatch('vacancy/fetchVacancies'))
    },
  },
}
</script>

<style scoped></style>
