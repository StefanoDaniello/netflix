<template>
    <div class="flip-card ">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="image" alt="Avatar" style="width:300px;height:300px;">
            </div>
            <div class="flip-card-back">
                <h5>{{ title }}</h5>
                <p> {{ date}}</p>
                <p> {{ vote }}</p>
                <p> {{ lenguage }}</p>
                <p class="description"> {{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js'
export default {
    name: "CardComponents",
    props: {
        image: String,
        title: String,
        date: String,
        vote: Number,
        description: String,
        lenguage: String
    
    },
    data(){
        return{
            store,

        }
    }
}
</script>

<style lang="scss" scoped>
.description{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
    border-radius: 10px;
    overflow: hidden;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;

}

.flip-card-front {
    background-color: #bbb;
    color: black;
}

.flip-card-back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
}
</style>