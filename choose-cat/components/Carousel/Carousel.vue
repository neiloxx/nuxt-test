<template>
  <v-carousel
    height="300"
    hideDelimiterBackground
    showArrowsOnHover
    class="carousel"
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
        class="carousel-item-image"
      />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  import * as axios from "core-js";

  export default {
    name: "Carousel",
    data(){
      return {
        images: [],
      }
    },
    async fetch() {
      const response = await this.$axios.$get('https://api.thecatapi.com/v1/images/search', {
        headers: {'x-api-key': '6762e144-8a07-48f8-b251-6d762c096fe3'},
      });

      // eslint-disable-next-line no-console
      console.log(response[0].url);

      this.images.push(response[0].url);
    },
    methods: {
      getImages() {

      },
    },
  }
</script>
