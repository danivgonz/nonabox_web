var firebase = require("firebase/app");

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
module.exports = function() {
  return database;
}