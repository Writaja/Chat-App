//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
          msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      uname:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";

    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
uname=message_data["uname"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4> "+uname+"<img class='user_tick' sre='tick.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value"+like+" onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span> </button> <hr>";
row=name_with_tag+message_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
 
//End code
      } });  }); }

getData();
function updatelike(message_id){
      button_id=message_id;
      noOfLikes=document.getElementById(button_id).value;
      updatedlike=Number(noOfLikes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updatedslike
      });
       }
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

