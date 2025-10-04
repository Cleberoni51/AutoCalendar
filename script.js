//script.js

//Caleb Schear
//9-30-2025

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJEE9Yo8gWxOxikUXVX9yidIuEot2j6z8",
  authDomain: "autocalendar-bc07c.firebaseapp.com",
  projectId: "autocalendar-bc07c",
  storageBucket: "autocalendar-bc07c.firebasestorage.app",
  messagingSenderId: "847381554275",
  appId: "1:847381554275:web:34afd613d71baedfde8456",
  measurementId: "G-8RKGGC78VK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const wrapper = document.querySelector('.wrapper');
const loginLink = document. querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin');
//const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

