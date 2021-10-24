import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAnKWSQN6fFhVWV8dOmXHrUOxnncK9WQsc",
  authDomain: "class71-89c7e.firebaseapp.com",
  projectId: "class71-89c7e",
  storageBucket: "class71-89c7e.appspot.com",
  messagingSenderId: "214498383423",
  appId: "1:214498383423:web:aeeb16400697267bfd4a8a"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();