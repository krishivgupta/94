
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA5Ht84cCAxaQda-_tCzZGGeoQ3j9GOaUk",
    authDomain: "kwitter-ee3e8.firebaseapp.com",
    databaseURL: "https://kwitter-ee3e8-default-rtdb.firebaseio.com",
    projectId: "kwitter-ee3e8",
    storageBucket: "kwitter-ee3e8.appspot.com",
    messagingSenderId: "878328730647",
    appId: "1:878328730647:web:38034ec7912d29e800b852",
    measurementId: "G-C16293ZZWM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  function adduser(){
       user_name=document.getElementById("user_name").value ;
       firebase.database().ref("/").child(user_name).update({
           purpose:"Adding user"
       }) ;

  }