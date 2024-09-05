<template>
    <div class="container">
        <div class="row">
            <div class="d-flex justify-content-between align-items-center my-3">
                <h1 class="text-white" v-if="store.data.movies.length > 0">Film Trovati: {{ store.totalResults }}</h1>
                <h1 v-else class="text-white">Nessun Film</h1>
                <div class="d-flex justify-content-center align-items-center " v-if="store.data.movies.length > 0">
                    <button class="btn btn-secondary me-2" @click="prevPage" :disabled="store.page === 1">
                        &#8592; <!-- Freccia sinistra -->
                    </button>

                    <span class="text-white mx-2">Pagina {{ store.page }} di {{ store.totalPages }}</span>

                    <button class="btn btn-secondary ms-2" @click="nextPage"
                        :disabled="store.page === store.totalPages">
                        &#8594; <!-- Freccia destra -->
                    </button>
                </div>
            </div>

            <div v-for="(movie, index) in store.data.movies" :key="index"
                class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
                <CardComponents :image="store.imageUrl + movie.poster_path" :title="movie.title"
                    :date="movie.release_date" :vote="movie.vote_average" :description="movie.overview"
                    :lenguage="movie.original_language" />
            </div>
        </div>

        <div class="d-flex justify-content-center align-items-center my-4" v-if="store.data.movies.length > 0">
            <button class="btn btn-secondary me-2" @click="prevPage" :disabled="store.page === 1">
                &#8592; <!-- Freccia sinistra -->
            </button>

            <span class="text-white mx-2">Pagina {{ store.page }} di {{ store.totalPages }}</span>

            <button class="btn btn-secondary ms-2" @click="nextPage" :disabled="store.page === store.totalPages">
                &#8594; <!-- Freccia destra -->
            </button>
        </div>
    </div>


</template>

<script>
import CardComponents from './CardComponents.vue';
import { store } from "../store.js";

export default {
    name: "MainComponents",
    components: {
        CardComponents,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        nextPage() {
            if (this.store.page < this.store.totalPages) {
                this.store.page++;
                this.$emit('newpage');
            }
        },
        prevPage() {
            if (this.store.page > 1) {
                this.store.page--;
                this.$emit('newpage');
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin-top: 20px;
}
</style>