$(document).ready(function(){

    var firebaseConfig = {
        apiKey: "AIzaSyDol1Twh0SLkBzoeWj5vk9VIFAUMk5kKqU",
        authDomain: "train-scheduler-aaa14.firebaseapp.com",
        databaseURL: "https://train-scheduler-aaa14.firebaseio.com",
        projectId: "train-scheduler-aaa14",
        storageBucket: "train-scheduler-aaa14.appspot.com",
        messagingSenderId: "973780121242",
        appId: "1:973780121242:web:1381d1bd99ff7f2f"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


      var database = firebase.database();

  //  Button Click
  $("#addTrain").on("click", function (event) {
    event.preventDefault();

   
    var trainName = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = $("#firstTrain").val().trim();
    var freq = $("#interval").val().trim();

// pushing the data entered

database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: freq
  });
});




})