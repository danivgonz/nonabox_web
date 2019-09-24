// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");

var firebaseConfig = {
  apiKey: "AIzaSyC8zYu-8325mE-fOB_wB7_gX0DfWtJINkE",
  authDomain: "nonabox-fiap.firebaseapp.com",
  databaseURL: "https://nonabox-fiap.firebaseio.com",
  projectId: "nonabox-fiap",
  storageBucket: "nonabox-fiap.appspot.com",
  messagingSenderId: "267192402401",
  appId: "1:267192402401:web:e7cafec9daeb258a3ed2a0"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//https://firebase.google.com/docs/database/web/read-and-write?hl=pt-br