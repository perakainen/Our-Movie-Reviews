import * as React from 'react'
import Navigation from './navigation/navigation'
import * as firebase from 'firebase'

const optionsForFirebase = {
  apiKey: "AIzaSyAKK1paDs52N-S8BE8KOAz-VxSs9KFOf8g",
  authDomain: "our-movie-reviews.firebaseapp.com",
  databaseURL: "https://our-movie-reviews-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "our-movie-reviews",
  storageBucket: "our-movie-reviews.appspot.com",
  messagingSenderId: "839333432667",
  appId: "1:839333432667:web:9c1f7a2a3b7c7342ec5e7e"
}

  firebase.initializeApp(optionsForFirebase);

export default function App() {
  return(
        <Navigation/>
        );
}

    