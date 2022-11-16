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
    computed: {
        getStars() {
            return Math.ceil(this.item.vote_average / 2);
        }
    },

}
</script>

<template>
    <div class="quotes d-flex">
        <p>Voto: {{ getStars }}</p>
        <i v-for="n in 5" :key="n" :class="n <= getStars ? 'fa-solid' : 'fa-regular'" class="fa-star"></i>
    </div>
</template>

<style lang="scss" scoped>
p {
    display: inline-block;
    margin-right: 1rem;
}
</style>