<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            name: "Results",
            imgLang: "de.svg",
        }
    },
    methods: {
        getNation() {
            this.store.listFilm.original_language = this.imgLang;
        }
    }
}
</script>

<template>
    <h2>{{ name }}</h2>
    <div class="list" v-for="(inner, index) in this.store.listFilm" :key="index">
        <h4>{{ inner.title }}</h4>
        <h4>{{ inner.original_title }}</h4>
        <p>{{ inner.original_language }}</p>
        <p>{{ inner.vote_average }}</p>
    </div>
    <h2>{{ name }}</h2>
    <div class="list-serie" v-for="(series, index) in this.store.listSeries" :key="index">
        <h4>{{ series.name }}</h4>
        <h4>{{ series.original_name }}</h4>
        <p>{{ series.original_language }}</p>
        <p>{{ series.vote_average }}</p>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
</style>