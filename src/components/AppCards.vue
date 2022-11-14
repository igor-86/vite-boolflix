<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            name: "Results",
        }
    },
    components: {

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

</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
</style>