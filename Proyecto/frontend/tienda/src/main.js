import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Comienza firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGFpzQKQWgPoDLWYCkr3VHLnUE1wWg41k",
  authDomain: "programacion-web-85d1e.firebaseapp.com",
  projectId: "programacion-web-85d1e",
  storageBucket: "programacion-web-85d1e.appspot.com",
  messagingSenderId: "1028272821880",
  appId: "1:1028272821880:web:a7de501e5c44dc7f7fff8d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//Termina firebase

const app = createApp(App)

app.use(router);

app.mount('#app')
