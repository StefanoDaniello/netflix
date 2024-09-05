<template>
    <div class="flip-card ">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="(image === 'https://image.tmdb.org/t/p/originalnull' ? '/public/images/NotFoundImg.png' : image)" alt="Avatar" class="w-100 h-100">
            </div>
            <div class="flip-card-back">
                <h5 class="mt-4">{{ title }}</h5>
                <p> {{ date}}</p>
                <p> {{ getStar(vote)}}</p>
                <p class=" m-auto my-1"> <img :src="`https://flagcdn.com/w20/${flagimg()}.png`" :alt="lenguage" class="flag"></p>
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
        
    },
    methods: {
        getStar(vote) {
            // arrotondo per eccesso e divido il numero per 2 per usare una scala da 1 a 5
            const star = Math.ceil(vote / 2)
            return '⭐'.repeat(star)
        },
        flagimg(){
                if(this.lenguage === 'en'){
                    return 'gb'
                }else if(this.lenguage === 'ja'){
                    return 'jp'
                }else if(this.lenguage === 'ko'){
                    return 'kr'
                }else if(this.lenguage === 'el'){
                    return 'gr'
                }else if(this.lenguage === 'zh'){
                    return 'cn'
                }else if(this.lenguage === 'hi'){
                    return 'in'
                }else if(this.lenguage === 'cs'){
                    return 'cz'
                }else{
                    return this.lenguage
                }
            }  
    }
}
</script>

<style lang="scss" scoped>
 .flag{
    width: 40px;
    height: 25px;
}
.description{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
}
.flip-card {
    background-color: transparent;
    width: 400px;
    height: 400px;
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