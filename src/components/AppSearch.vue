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
    <div class="menu">
        <h2>{{ name }}</h2>
        <div class="form-search">
            <input type="text" placeholder="scrivi qui" v-model="store.searchKey">
            <button class="btn ms-1 my-btn" @click="$emit('startSearch')">Cerca</button>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;

.menu {
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    z-index: 10;

    h2 {
        color: white;
        text-transform: uppercase;
        margin-left: 1rem;
        font-weight: 800;
    }

    .form-search {
        margin-right: 1rem;

        input {
            width: 250px;
            padding: .375rem 0;
            border-radius: .375remgit;
        }

        .my-btn {
            background-color: white;
        }
    }
}
</style>