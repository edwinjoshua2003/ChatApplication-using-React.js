import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjIItNe_6n5g5tHQByPRZUgosnClK5eLo",
    authDomain: "chat-application-e6c43.firebaseapp.com",
    projectId: "chat-application-e6c43",
    storageBucket: "chat-application-e6c43.appspot.com",
    messagingSenderId: "811111928253",
    appId: "1:811111928253:web:6e762ef293108aa26ac2d4",
    measurementId: "G-ZDDVRM2QSG"
  };

const app = firebase.initializeApp(firebaseConfig);
const database = app.firestore();

export default database;