//sADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC_3siOtRNlUDtiCrZnx3r7MnX__xET9X0",
      authDomain: "kwitter-6f55c.firebaseapp.com",
      databaseURL: "https://kwitter-6f55c-default-rtdb.firebaseio.com",
      projectId: "kwitter-6f55c",
      storageBucket: "kwitter-6f55c.appspot.com",
      messagingSenderId: "470436905692",
      appId: "1:470436905692:web:59ea11dc8f7ebf1b21aa19"
    };

    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);
    var user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML=" Welcome  "+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
