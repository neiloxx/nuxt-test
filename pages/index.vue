<template>
  <div class="main justify-center">
    <div class="hero-image">
      <div class="hero-image-container">
        <h2 class="hero-image__title">
          fun facts
        </h2>
        <p class="hero-image__text">
          Get random cat facts via text message every day.
        </p>
      </div>
    </div>
    <div class="facts d-flex align-center flex-column ma-auto mt-5 mb-5">
      <h2
        id="facts"
        class="facts__title text-center mb-5"
      >
        Look at these facts:
      </h2>
      <div
        class="d-flex flex-wrap justify-space-around"
      >
        <v-card
          v-for="(fact, idx) in facts"
          :key="idx"
          class="ma-1 d-flex flex-column align-center"
          width="100%"
          minHeight="150"
          maxWidth="300"
          :loading="isLoading"
        >
          <v-card-text>
            {{ fact.fact }}
          </v-card-text>
        </v-card>
      </div>
      <v-btn
        outlined
        class="mt-5"
        maxWidth="300"
        @click="$fetch"
      >
        show me new facts
      </v-btn>
    </div>
    <Carousel />
  </div>
</template>

<script>
  import Carousel from "../components/Carousel/Carousel.vue";
  export default {
    components: {Carousel},
    data() {
      return {
        facts: [],
        isLoading: true,
      }
    },
    async fetch() {
      this.isLoading = true;
      const response = await this.$axios.$get('https://catfact.ninja/facts?max_length=150&limit=6');

      this.facts = response.data;
      this.isLoading = false;
    },
    methods: {
      async refresh() {
        await this.fetch();
      },
    },
  }
</script>

<style lang="scss">
.main {
  width: 100%;
  height: 100%;
}

.hero-image {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url("https://images.pexels.com/photos/1521305/pexels-photo-1521305.jpeg") right center no-repeat;
  height: 600px;
  background-size: cover;
  position: relative;

  &-container {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }

  &__title {
    font-family: $font-heading;
    font-size: 80px;
  }

  &__text {
    font-family: $font-body;
    font-size: 30px;
  }
}

.facts {
  max-width: 1000px;

  &__title {
    font-family: $font-body;
  }

  &__loader {
    height: 320px
  }
}
</style>
