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
    //Movies
    getMovies() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=14152c5e090182b9de00cb70bbc025c3&query=${this.store.searchKey}`)
        .then((resp) => {
          this.store.listFilm = resp.data.results;
          console.log(this.store.listFilm);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("Chiamata terminata");
          //serie
          axios.get(`https://api.themoviedb.org/3/search/tv?api_key=14152c5e090182b9de00cb70bbc025c3&query=${this.store.searchKey}`)
            .then((resp) => {
              this.store.listSeries = resp.data.results;
              console.log(this.store.listSeries);
            })
            .catch((error) => {
              console.log(error, "errore");
            })
            .finally(() => {
              console.log("fine chiamata serie");
            })


        })

    }
    //Series




  }
}
</script>

<template>
  <AppSearch @startSearch="getMovies" />
  <section class="main">
    <AppCards />
  </section>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

.main {
  width: 100%;
  height: calc(100vh - 80px);
  background-color: aqua;
  margin-top: 80px;
  overflow-y: scroll;
}
</style>
