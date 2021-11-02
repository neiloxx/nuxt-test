<template>
  <v-footer class="header-wrapper">
    <v-app-bar
      dense
      class="header"
    >
      <v-tabs
        class="d-flex"
        sliderColor="white"
      >
        <v-tab
          v-for="(item, idx) in links"
          :key="idx"
          class="header__link white--text ml-4"
          :to="item.link"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
  </v-footer>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        links: [
          {name: 'fun cats', link: '/'},
          {name: 'contact us', link: '/contact'},
        ],
      }
    },
  }
</script>

<style lang="scss">
.header-wrapper {
  width: 100%;
  color: $background-color;
}

.header__link {
  font-family: $font-heading;
  font-size: 20px;
}
</style>
