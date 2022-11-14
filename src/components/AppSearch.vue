<script>
import axios from "axios";
import { store } from "../store";

export default {
    data() {
        return {
            store,
            name: "Boolfix",

        }
    },
}
</script>

<template>
    <h2>{{ name }}</h2>
    <div class="form-search">

        <input type="text" placeholder="scrivi qui" v-model="store.searchKey">
        <button class="btn-1 ms-1" @click="$emit('startSearch')">Cerca</button>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
</style>