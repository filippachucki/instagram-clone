import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = { // Have the firebase config here
    apiKey: "AIzaSyBo2Os9iSV7rzS6-_l-bda-M69C2ffP0as",
    authDomain: "instagram-clone-e61bd.firebaseapp.com",
    databaseURL: "https://instagram-clone-e61bd-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "instagram-clone-e61bd",
    storageBucket: "instagram-clone-e61bd.appspot.com",
    messagingSenderId: "748180357948",
    appId: "1:748180357948:web:bfb89c1e47674c13b89439"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { auth, db, storage };