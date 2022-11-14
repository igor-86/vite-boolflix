<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            nameF: "Movies",
            nameS: "Series",
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
    <h2>{{ nameF }}</h2>
    <div class="list" v-for="(inner, index) in this.store.listFilm" :key="index">
        <div class="img-poster">
            <img :src="`http://image.tmdb.org/t/p/w342/${inner.poster_path}`" alt="">
        </div>
        <h4>{{ inner.title }}</h4>
        <h4>{{ inner.original_title }}</h4>
        <img :src="getImagePath(`../assets/img/${inner.original_language}.svg`)" alt="">
        <p>{{ inner.vote_average }}</p>
    </div>
    <h2>{{ nameS }}</h2>
    <div class="list-serie" v-for="(series, index) in this.store.listSeries" :key="index">
        <div class="img-poster">
            <img :src="`http://image.tmdb.org/t/p/w342/${series.poster_path}`" alt="">
        </div>
        <h4>{{ series.name }}</h4>
        <h4>{{ series.original_name }}</h4>
        <img :src="getImagePath(`../assets/img/${series.original_language}.svg`)" alt="">
        <p>{{ series.vote_average }}</p>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;

.img-poster {
    width: 200px;
    height: 250px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

img {
    width: 30px;
    height: 20px;
    object-fit: cover;
}
</style>