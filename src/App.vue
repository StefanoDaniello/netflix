<template>
  <div class="app-container">
    <HeaderComponents @search="getMovie" :prezzo="prezzo" :sconto="sconto" />
    <div class="content">
      <LoaderComponets />
      <!-- non utilizzando le () le funzione viene chiamata dall'emit mentre utilizzandole viene chiamata direttamente quando il componente viene montato -->
      <MainComponents @newpage="getMovie"/>
    </div>
    <FooterComponents />
  </div>
 
</template>

<script>
import HeaderComponents from './components/HeaderComponents.vue';
import MainComponents from './components/MainComponents.vue';
import FooterComponents from './components/FooterComponents.vue';
import LoaderComponets from './components/LoaderComponents.vue';
import { store } from './store.js';
import axios from 'axios';


export default {
  name: 'App',
  components: {
    HeaderComponents,
    MainComponents,
    FooterComponents,
    LoaderComponets
  },
  data() {
    return {
      store,
      prezzo: 100,
      sconto: 20
    }
  },
  mounted() {
    this.refreshprezzosconto();
  },
  methods: {
    getMovie(data) {
      if (data) {
        // data dall'emit di MainComponents in App.vue
        console.log('Data received:', data); 
      }
      axios.get(`${this.store.apiUrl}search/movie?api_key=${store.api_key}&query=${this.store.search}&language=${this.store.language}&page=${this.store.page}`)
        .then((response) => {
          this.store.loading = true;
          this.store.data.movies = response.data.results;
          this.store.totalPages = response.data.total_pages;
          this.store.totalResults = response.data.total_results;
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => {
          setTimeout(() => {
            this.store.loading = false;
          }, 150);
          
        })
    },
    refreshprezzosconto(){
      setInterval(() => {
        this.prezzo ++;
        // this.sconto++;
      }, 1000);
      
    }
  },
}
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

footer {
  margin-top: auto;
}
</style>
