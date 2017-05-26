$(document).ready(function(){

console.log("ready!");

 var config = {
    apiKey: "AIzaSyAy2r_Ahyq9uR45KxJFXDcP5obn3uwsIx0",
    authDomain: "traintime-83ff2.firebaseapp.com",
    databaseURL: "https://traintime-83ff2.firebaseio.com",
    projectId: "traintime-83ff2",
    storageBucket: "traintime-83ff2.appspot.com",
    messagingSenderId: "6512932252"
  };
  firebase.initializeApp(config);



var database = firebase.database();

var i = 0;
var name = '';
var destination = '';
var firstStop = '';
var frequency = '';

function writeUserData(i) {
  firebase.database().ref('/trains/'+i+'/').set({
    trainName: name,
    destination: destination,
    firstStop : firstStop,
    frequency : frequency
  });
}


$('#submitBtn').on('click', function () {

event.preventDefault();

console.log('i - '+i);

name = $('#trainName').val().trim();
destination = $('#destination').val().trim();
firstStop = $('#firstStop').val().trim();
frequency = $('#frequency').val().trim();

writeUserData(i);

i++;

});



});