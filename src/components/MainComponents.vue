<template>
    <div class="container">
      <div class="row">
        <h1 class="text-white" v-if="store.data.movies.length > 0">Tutti i Film</h1> <h1 v-else class="text-white">Nessun Film</h1>
        <div 
          v-for="(movie, index) in store.data.movies" 
          :key="index" 
          class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center"
        >
          <CardComponents 
            :image="store.imageUrl + movie.poster_path" 
            :title="movie.title" 
            :date="movie.release_date"
            :vote="movie.vote_average" 
            :description="movie.overview" 
            :lenguage="movie.original_language" 
          />
        </div>
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
    }
  }
  </script>
  
  <style lang="scss" scoped>
    .container {
      margin-top: 20px;
    }
  </style>
  