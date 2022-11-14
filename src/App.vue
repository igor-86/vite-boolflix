<script>
import axios from "axios";
import AppSearch from "./components/AppSearch.vue";
import { store } from "./store";
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
  },
  created() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=14152c5e090182b9de00cb70bbc025c3&query=${this.store.searchKey}`).then((resp) => {
        this.store.listFilm = resp.data.results;
        console.log(this.store.listFilm);
      })


    }
  }
}
</script>

<template>
  <AppSearch @startSearch="getMovies" />
  <AppCards />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
