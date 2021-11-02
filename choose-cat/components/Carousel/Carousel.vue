<template>
  <v-carousel
    height="300"
    hideDelimiterBackground
    showArrowsOnHover
    class="carousel mb-5 ma-auto"
  >
    <v-carousel-item
      v-for="(image, idx) in images"
      :key="idx"
      class="carousel-item"
    >
      <v-img
        :src="image"
        width="100%"
        height="100%"
        cover
        class="carousel-item-image"
      />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: "Carousel",
    data(){
      return {
        images: [],
      }
    },
    async fetch() {
      while (this.images.length < 5) {
        const response = await this.$axios.$get('https://thatcopy.pw/catapi/rest/');

        this.images.push(response.webpurl);
      }
    },
  }
</script>

<style lang="scss">
  .carousel {
    max-width: 1000px;
  }
</style>
