<template>
  <div class="overflow-auto h-100">
    <div class="d-flex flex-row justify-content-between border border-warnings">
      <b-card>
        <template #header>
          <h4 class="mb-0">Каталог</h4>
        </template>
        <b-list-group flush>
          <b-list-group-item class="d-flex justify-content-between">
            <b-btn class="d-flex justify-content-between">
              <b-icon-alarm class="mt-1 mr-2"></b-icon-alarm>
              <h5>Стеллажи</h5></b-btn
            >
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between">
            <b-btn class="d-flex justify-content-between">
              <b-icon-alarm class="mt-1 mr-2"></b-icon-alarm>
              <h5>Стеллажи</h5></b-btn
            >
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between">
            <b-btn class="d-flex justify-content-between">
              <b-icon-alarm class="mt-1 mr-2"></b-icon-alarm>
              <h5>Стеллажи</h5></b-btn
            >
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between">
            <b-btn class="d-flex justify-content-between">
              <b-icon-alarm class="mt-1 mr-2"></b-icon-alarm>
              <h5>Стеллажи</h5></b-btn
            >
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between">
            <b-btn class="d-flex justify-content-between">
              <b-icon-alarm class="mt-1 mr-2"></b-icon-alarm>
              <h5>Стеллажи</h5></b-btn
            >
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between">
            <b-btn class="d-flex justify-content-between">
              <b-icon-alarm class="mt-1 mr-2"></b-icon-alarm>
              <h5>Стеллажи</h5></b-btn
            >
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between">
            <b-btn class="d-flex justify-content-between">
              <b-icon-alarm class="mt-1 mr-2"></b-icon-alarm>
              <h5>Стеллажи</h5></b-btn
            >
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between">
            <b-btn class="d-flex justify-content-between">
              <b-icon-alarm class="mt-1 mr-2"></b-icon-alarm>
              <h5>Стеллажи</h5></b-btn
            >
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
