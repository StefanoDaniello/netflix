import { reactive } from "vue";

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/",
    imageUrl: "https://image.tmdb.org/t/p/original",
    api_key: "c2623eb63df32c9f32b41797b4f2efe5",
    language: "it-IT",
    search: '',
    totalPages: 0,
    totalResults: 0,
    page: 1,
    data:{
        movies:[],
    },
    loading:false,
   
    
})