import * as firebase from 'firebase';

const firebaseConfig = { // liraz we don't need this in the new firebase version, only json file
    apiKey: "AIzaSyD9YcskAUjVANQVpIUQZGlW1BhU7Ap9XgA",
    authDomain: "nofarim-8837e.firebaseapp.com",
    databaseURL: "https://nofarim-8837e.firebaseio.com",
    projectId: "nofarim-8837e",
    storageBucket: "nofarim-8837e.appspot.com",
    messagingSenderId: "984194899889",
    appId: "1:984194899889:web:6ddf5e956c6c1f0b07e790",
    measurementId: "G-0MPSWH5ESG"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };