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


console.log("i - "+i);
var name = '';
var destination = '';
var firstStop = '';
var frequency = '';
var i = 0;

function checki() {
return firebase.database().ref('/count/').once('value').then(function(snapshot) {
  var count = snapshot.val().i;
  console.log(count);
  i = count;
  console.log('i - '+i);
  // ...
});
}

checki();



//clear input text boxes

function clear()
{
	$('#trainName').val('');
	$('#destination').val('');
	$('#firstStop').val('');
	$('#frequency').val('');
}



// pushes form data to firebase database

function writeUserData(i) {
  firebase.database().ref('/trains/'+i+'/').set({
    trainName: name,
    destination: destination,
    firstStop : firstStop,
    frequency : frequency
  });


  clear();

}


//when submit button is clicked, set form data to variabls and call writeUserData function

$('#submitBtn').on('click', function () {

	event.preventDefault();

	console.log('i - '+i);

	name = $('#trainName').val().trim();
	destination = $('#destination').val().trim();
	firstStop = $('#firstStop').val().trim();
	frequency = $('#frequency').val().trim();

	writeUserData(i);

	//updates the count
	i++;

	 firebase.database().ref('/count/').set({
	    i: i,
	  });


});


});