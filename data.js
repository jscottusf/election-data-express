var firebase = require('firebase');
var app = firebase.initializeApp(firebaseConfig);
var firebaseConfig = {
    apiKey: "AIzaSyDqjLNRonSRsP1VbZAxpx9rDnfv3NuDwAc",
    authDomain: "election-data-2020.firebaseapp.com",
    databaseURL: "https://election-data-2020.firebaseio.com",
    projectId: "election-data-2020",
    storageBucket: "election-data-2020.appspot.com",
    messagingSenderId: "627040919383",
    appId: "1:627040919383:web:d569ee8fcdaae97cbb6812"
};

let database;
firebase.initializeApp(firebaseConfig);
database = firebase.database();