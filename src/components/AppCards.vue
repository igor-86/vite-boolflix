<script>
import { store } from '../store';
import AppStars from './AppStars.vue';

export default {
    data() {
        return {
            store,
            nameF: "Movies",
            nameS: "Series",
            avFlags: ["de", "it", "fr", "es", "en"]
        }
    },
    methods: {
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
    },
    components: {
        AppStars

    }
}
</script>

<template>
    <!-- MOVIES -->
    <div class="container-fluid">
        <div class="list" v-if="store.listFilm.length > 0">
            <h2 class="text-center">{{ nameF }}</h2>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gx-0">
                <div class="col" v-for="(inner, index) in this.store.listFilm" :key="index">
                    <div class="mycard">
                        <div class="img-poster">
                            <img v-if="inner.poster_path" :src="`http://image.tmdb.org/t/p/w342/${inner.poster_path}`"
                                alt="">
                            <img v-else src="../assets/img/not-image.png" alt="">
                        </div>
                        <div class="info">
                            <h4>{{ inner.title }}</h4>
                            <p>Titolo originale:{{ inner.original_title }}</p>
                            <div class="langue d-flex">
                                <img v-if="avFlags.includes(inner.original_language)"
                                    :src="getImagePath(`../assets/img/${inner.original_language}.svg`)" alt="">
                                <p v-else class="me-3">{{ inner.original_language }}</p>
                            </div>
                            <AppStars :item="inner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- SERIES -->
    <div class="container-fluid mt-3">
        <div class="list" v-if="store.listSeries.length > 0">
            <h2 class="text-center">{{ nameS }}</h2>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gx-0">
                <div class="col" v-for="(series, index) in this.store.listSeries" :key="index">
                    <div class="mycard">
                        <div class="img-poster">
                            <img v-if="series.poster_path" :src="`http://image.tmdb.org/t/p/w342/${series.poster_path}`"
                                alt="">
                            <img v-else src="../assets/img/not-image.png" alt="">
                        </div>
                        <div class="info">
                            <h4>{{ series.name }}</h4>
                            <p>Titolo originale:{{ series.original_name }}</p>
                            <div class="langue d-flex">
                                <img v-if="avFlags.includes(series.original_language)"
                                    :src="getImagePath(`../assets/img/${series.original_language}.svg`)" alt="">
                                <p v-else class="me-3">{{ series.original_language }}</p>
                            </div>

                            <AppStars :item="series" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;


h2 {
    color: white;
}

.mycard {
    width: 100%;
    height: 450px;
    overflow: hidden;
    position: relative;

    &:hover {
        .info {
            bottom: 0;
        }
    }

    .img-poster {
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    h4 {
        font-weight: 700;
        text-transform: uppercase;

        margin-bottom: 1.2rem;
    }

    p {
        color: #ebebeb;

        font-weight: 400;

    }

    .info {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.563);
        width: 100%;
        bottom: -100%;
        left: 0;
        color: white;
        padding: 1.5rem .8rem;
        transition: all .6s ease-in-out;

        .star {
            p {
                display: inline-block;
                margin-right: 1rem;
            }
        }
    }
}

img {
    width: 30px;
    height: 20px;
    object-fit: cover;
    margin-bottom: 1rem;
}
</style>