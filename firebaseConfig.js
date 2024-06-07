// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAjYlTUGJh2mreKITP_0N2p7Cws0LsZXEY",
  authDomain: "eventease-f37ec.firebaseapp.com",
  projectId: "eventease-f37ec",
  storageBucket: "eventease-f37ec.appspot.com",
  messagingSenderId: "635192149166",
  appId: "1:635192149166:android:453df05c5c4ca7dc16593f",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, firestore, storage };
