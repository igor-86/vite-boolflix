<script>
import axios from "axios";
import AppSearchVue from "./components/AppSearch.vue";
import { store } from "./store";
import AppSearch from "./components/AppSearch.vue";
import AppCards from "./components/AppCards.vue";

export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppSearch,
    AppCards,
  }
}
</script>

<template>
  <AppSearch />
  <AppCards />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
