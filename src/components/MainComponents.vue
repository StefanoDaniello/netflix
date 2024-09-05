<template>
    <div class="d-flex flex-wrap container mt-5">
        <div   v-for="movie in store.data.movies" class="m-1">
        <CardComponents :image="this.store.imageUrl + movie.poster_path" :title="movie.title" :date="movie.release_date"
            :vote="movie.vote_average" :description="movie.overview" :lenguage="movie.original_language" />
    </div>
    </div>
   
</template>

<script>
import CardComponents from './CardComponents.vue';
import { store } from "../store.js";
export default {
    name: "MainComponents",
    components: {
        CardComponents
    },
    data() {
        return {
            store
        }
    },


}
</script>

<style lang="scss" scoped></style>