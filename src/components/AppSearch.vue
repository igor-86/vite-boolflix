<script>
import axios from "axios";
import { store } from "../store";

export default {
    data() {
        return {
            store,
            name: "AppSearch",
        }
    },
    components: {

    }
}
</script>

<template>
    <h2>{{ name }}</h2>
    <div class="form-search">
        <label for="serach">Ricerca film</label>
        <input type="text" name="" id="search" placeholder="scrivi qui">
        <button class="btn-1 ms-1">Cerca</button>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
</style>