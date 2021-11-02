<template>
  <v-carousel
    height="500"
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
        images: [
          'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/2870353/pexels-photo-2870353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        ],
      }
    },
  }
</script>

<style lang="scss">
  .carousel {
    max-width: 1000px;
  }
</style>
