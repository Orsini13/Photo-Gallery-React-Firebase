import  firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import  'firebase/compat/firestore';

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDePxE15IyL8Pgz-x946q33jTPY07ZXxVs",
    authDomain: "ninja-firegram-f2daf.firebaseapp.com",
    projectId: "ninja-firegram-f2daf",
    dataBaseURL: "https://ninja-firegram.firebaseio.com",
    // dataBaseURL: "https://ninja-firegram-f2daf-default-rtdb.firebaseio.com/",
    storageBucket: "ninja-firegram-f2daf.appspot.com",
    messagingSenderId: "395091423761",
    appId: "1:395091423761:web:35cb270875e94e399337b0"
  };


  
  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValueserverTimestamp;

export { projectStorage, projectFireStore, timestamp};