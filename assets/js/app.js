$(document).ready(function(){
// firebase config code
  var config = {
    apiKey: "AIzaSyCFdxJmWrUK-Txlq77pmHVD66FNc7P5m9o",
    authDomain: "trainschedule-3f934.firebaseapp.com",
    databaseURL: "https://trainschedule-3f934.firebaseio.com",
    projectId: "trainschedule-3f934",
    storageBucket: "",
    messagingSenderId: "872929058499"
  };
  firebase.initializeApp(config);
// reference database
var database = firebase.database();
// global variables
var trainName = "";
var destination = "";
var startTime = "";
var frequency = ""
var nextArrival = currentTime + frequency
var currentTime = 1800
var minutesAway = ""



$("#infoSubmitButton").on('click', function(){

// Don't refresh
event.preventDefault();
// retrieve info from inputs
trainName = $('#frequency-input').val().trim();
destination = $('#destination-input').val().trim();
startTime = $('#startTime-input').val().trim();
frequency = $('#frequency-input').val().trim();
// input info into firebase
database.ref().push({
trainName: trainName,
destination: destination,
startTime: startTime,
frequency: frequency
    });
});

database.ref().on("child_added", function(snapshot){

var newRow = $('<tr>');
var newTNCell = $('<td>');
newTNCell.append(snapshot.val().trainName);
var newDestCell = $('<td>');
newDestCell.append(snapshot.val().destination);
var newFreqCell = $('<td>');
newFreqCell.append(snapshot.val().frequency);


});

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $('#clock').text(h + ":" + m + ":" + s);
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
 startTime();

});
