import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDePxE15IyL8Pgz-x946q33jTPY07ZXxVs",
  authDomain: "ninja-firegram-f2daf.firebaseapp.com",
  projectId: "ninja-firegram-f2daf",
  storageBucket: "ninja-firegram-f2daf.appspot.com",
  messagingSenderId: "395091423761",
  appId: "1:395091423761:web:35cb270875e94e399337b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.filestore();

export { projectStorage, projectFireStore};