
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDqYUmjBPAKherMvrcvp8wIbIzlM-slFeA",
 authDomain: "singleton-a8097.firebaseapp.com",
  projectId: "singleton-a8097"
});

var db = firebase.firestore();
    var instance;

     
   
    function createInstance() {
        var user=document.getElementById("user").value;
        var pas=document.getElementById("pass").value;
        var login = new Object();
        login.user=user;
        login.pass=pas;
   
       var u= login.user;
       var p= login.pass;
       insertarBaseDato(u,p);
      
            console.log('u '+u+' p'+p)

// Add a second document with a generated ID.

        return login;
    }
 

        function  getInstance() {

          var n=  leer();
          console.log(n+"21")
            if (!instance || n==null ) {
                instance = createInstance();
                  
                console.log("Creado");
            }else{
                console.log("Ya existe una instancia");
            }
            return instance;
        
  }
function insertarBaseDato(u,p){
    db.collection("users").add({
  nombre: u,
  pass: p
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}

function leer(){
  
//var n =db.collection().count();
//console.log(n+"22");
var x;
return x =db.collection("users").get().then(snap => {
  
   return snap.size ;
});

}


