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
        <v-btn outlined>
          start now
        </v-btn>
      </div>
    </div>
    <div class="facts d-flex flex-column ma-auto mt-5 mb-5">
      <h2 class="facts__title text-center mb-5">
        Look at these facts:
      </h2>
      <div class="d-flex flex-wrap justify-space-around">
        <v-card
          v-for="(fact, idx) in facts"
          :key="idx"
          class="ma-1 d-flex align-center justify-center"
          width="100%"
          height="150"
          maxWidth="300"
        >
          <v-card-text>{{ fact.fact }}</v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        facts: [],
      }
    },
    async fetch() {
      const response = await this.$axios.$get('https://catfact.ninja/facts?max_length=200&limit=6');

      this.facts = response.data;
    },
  }
</script>

<style lang="scss">
  .main {
    width: 100%;
    height: 100%;
  }

  .hero-image {
    background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),
      url("@/static/hero-image.jpg") right center no-repeat;
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
  }
</style>
