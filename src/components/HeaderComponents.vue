<template>
  <header class="py-3">
    <div class="container d-flex justify-content-between">
        <h1 class="text-secondary none">Netflix
            <span class="text-danger">{{ prezzoScontato }}</span>
        </h1>
        <div class="d-flex align-items-center w100">
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
        props:{
            prezzo: Number,
            sconto: Number
        },
        data(){
            return{
                store,
            }
        },
        computed:{
            // Calcola dinamicamente il prezzo scontato in base ai valori passati dal genitore
            prezzoScontato(){
                //  il prezzo origiale - sconto ricevuto sul prezzo
                return this.prezzo - (this.prezzo * this.sconto / 100);
            }
        }
    }
</script>

<style lang="scss" scoped>
    header{
        background-color: black;
    }
    @media screen and (max-width: 400px) {
        .none{
            display: none;
        }
        .w100{
            width: 100%;
        }
    }
</style>