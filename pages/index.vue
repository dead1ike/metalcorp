<template>
  <div class="w-100" style="max-height: 480px">
    <b-carousel
      id="main-carousel"
      v-model="slide"
      :interval="3000"
      img-width="1024"
      img-height="480"
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        img-src="https://italstroy.ru/800/600/https/st.depositphotos.com/1000291/3361/i/450/depositphotos_33610513-stock-photo-new-modern-warehouse-rack.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="https://italstroy.ru/800/600/https/st.depositphotos.com/1000291/3361/i/450/depositphotos_33610513-stock-photo-new-modern-warehouse-rack.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="https://italstroy.ru/800/600/https/st.depositphotos.com/1000291/3361/i/450/depositphotos_33610513-stock-photo-new-modern-warehouse-rack.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="https://italstroy.ru/800/600/https/st.depositphotos.com/1000291/3361/i/450/depositphotos_33610513-stock-photo-new-modern-warehouse-rack.jpg"
      ></b-carousel-slide>
    </b-carousel>
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
