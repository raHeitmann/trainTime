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


function writeUserData(i) {
  firebase.database().ref('/trains/train'+i+'/').set({
    trainName: "A Train",
    destination: "email",
    firstStop : "imageUrl",
    frequency : i
  });
}


for (var i = 0 ; i < 5 ; i ++)
{

writeUserData(i);

}

});