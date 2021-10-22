
//ADD YOUR FIREBASE LINKS HERE
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
    function addroom(){
          var room_name= document.getElementById("room_name").value; 
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding roomname"
                
          });
          localStorage.setItem("room_name",room_name);
          window.location="Purple Chatt_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'> "+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+= row;

      //End code
      });});}
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="Purple Chatt_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

