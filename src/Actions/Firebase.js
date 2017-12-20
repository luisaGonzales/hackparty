import firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBi0eAzG5Pe6GfXn0DwgkmTFQw_hCFJ3f0",
    authDomain: "bookhackparty.firebaseapp.com",
    databaseURL: "https://bookhackparty.firebaseio.com",
    projectId: "bookhackparty",
    storageBucket: "",
    messagingSenderId: "298489929271"
  };
  firebase.initializeApp(config);

  export default firebase;
  
  export const database = firebase.database();
  export const auth = firebase.auth();
  export const storage = firebase.storage();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
