import './assets/style/main.scss'

import { createApp } from 'vue'
import App from './App.vue'


//controllo se il browser dell'utente supporta il service worker
if('serviceWorker' in navigator){
    //attendo che tutti gli assets siano completamente caricati
    window.addEventListener('load', function () {
        //registro il file sw nel broswer
        navigator.serviceWorker
        .register('/service-worker.js')
        .then(function () {
        console.log('Service Worker Registered! 🎉'); 
        })
    })
}

createApp(App).mount('#app')