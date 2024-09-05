<template>
  <div class="app-container">
    <HeaderComponents @search="getMovie()"/>
    <div class="content">
      <MainComponents />
    </div>
    <FooterComponents />
  </div>
</template>

<script>
import HeaderComponents from './components/HeaderComponents.vue';
import MainComponents from './components/MainComponents.vue';
import FooterComponents from './components/FooterComponents.vue';
import { store } from './store.js';
import axios from 'axios';


export default {
  name: 'App',
  components: {
    HeaderComponents,
    MainComponents,
    FooterComponents,
  },
  data() {
    return {
      store,

    }
  },
  mounted() {

  },
  methods: {
    getMovie() {
      axios.get(`${this.store.apiUrl}search/movie?api_key=${store.api_key}&query=${this.store.search}`)
        .then((response) => {
          this.store.data.movies = response.data.results;
          console.log(this.store.data.movies)
        })
        .catch((error) => {
          console.error(error)
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
