import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB8vhBDJMeDfGRIluj0uGhQM1p-8kH958",
  authDomain: "twitter-clone-d77df.firebaseapp.com",
  projectId: "twitter-clone-d77df",
  storageBucket: "twitter-clone-d77df.appspot.com",
  messagingSenderId: "207004475823",
  appId: "1:207004475823:web:c9bcf22f7fdfe2ff908f5a",
  measurementId: "G-MJ0J13KQKV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
