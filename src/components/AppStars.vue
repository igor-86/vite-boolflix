<script>


export default {
    name: "AppStars",
    props: {
        item: Object
    },
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>

<template>
    <div class="quotes d-flex">
        <p>Voto:</p>
        <div class="vote">
            <p v-if="Math.round((5 * item.vote_average) / 10) === 0">
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </p>
            <p v-else-if="Math.round((5 * item.vote_average) / 10) === 1">
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </p>
            <p v-else-if="Math.round((5 * item.vote_average) / 10) === 2">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </p>
            <p v-else-if="Math.round((5 * item.vote_average) / 10) === 3">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </p>
            <p v-else-if="Math.round((5 * item.vote_average) / 10) === 4">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </p>
            <p v-else-if="Math.round((5 * item.vote_average) / 10) === 5">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
p {
    display: inline-block;
    margin-right: 1rem;
}
</style>