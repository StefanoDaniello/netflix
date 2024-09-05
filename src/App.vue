<template>
  <div class="app-container">
    <HeaderComponents />
    <div class="content">

    </div>
    <FooterComponents />
  </div>
</template>

<script>
import HeaderComponents from './components/HeaderComponents.vue'; 
import FooterComponents from './components/FooterComponents.vue';
import { store } from './store.js';
import axios from 'axios';


export default {
  name: 'App',
  components: {
    HeaderComponents,
    FooterComponents,
  },
  data() {
    return {
      store,

    }
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    getMovie() {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=c2623eb63df32c9f32b41797b4f2efe5&query=avengers&language=it-IT&page=1')
      .then((response) => {
        this.store.movies = response.data.results;
        console.log(this.store.movies)
      })
      .finally({
        
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  // overflow-y: auto;
}

.content {
  flex: 1; 
}

footer {
  margin-top: auto; 
}
</style>

