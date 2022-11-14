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
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
    }
}
</script>

<template>
    <h2>{{ name }}</h2>
    <div class="list" v-for="(inner, index) in this.store.listFilm" :key="index">
        <h4>{{ inner.title }}</h4>
        <h4>{{ inner.original_title }}</h4>
        <img :src="getImagePath(`../assets/img/${inner.original_language}.svg`)" alt="">
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

img {
    width: 30px;
    height: 20px;
    object-fit: cover;
}
</style>