import './assets/style/main.scss'

import { createApp } from 'vue'
import App from './App.vue'

if('serviceWorker' in navigator){
    window.addEventListener('load', function () {
        navigator.serviceWorker
        .register('/service-worker.js')
        .then(function () {
        console.log('Service Worker Registered! 🎉'); 
        })
    })
}

createApp(App).mount('#app')