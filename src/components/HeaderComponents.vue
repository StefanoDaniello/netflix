<template>
  <header class="py-3">
    <div class="container d-flex justify-content-between">
        <h1 class="text-secondary">Netflix</h1>
        <div class="d-flex align-items-center">
            <input type="text" placeholder="Cerca" class="form-control me-2" v-model="store.search">
            <button class="btn btn-danger " @click="$emit('search')">Cerca</button>
        </div>
    </div>
  </header>
</template>

<script>
import {store} from '../store.js';
    export default {
        name:"HeaderComponents",
        data(){
            return{
                store,
            }
        },
    }
</script>

<style lang="scss" scoped>
    header{
        background-color: black;
    }
</style>