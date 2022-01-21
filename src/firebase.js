
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1qracjR1QQkrTOOxoJ8P_117IYUOy1Ug",
    authDomain: "clone-4ff61.firebaseapp.com",
    projectId: "clone-4ff61",
    storageBucket: "clone-4ff61.appspot.com",
    messagingSenderId: "358684972151",
    appId: "1:358684972151:web:cf7d1a20d152015d57e272",
    measurementId: "G-8FS79TLS9L"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };

