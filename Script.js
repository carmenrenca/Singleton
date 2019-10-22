
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDqYUmjBPAKherMvrcvp8wIbIzlM-slFeA",
 authDomain: "singleton-a8097.firebaseapp.com",
  projectId: "singleton-a8097"
});

var db = firebase.firestore();
    var instance;
   var i=0;




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

function devolver(){
    db.collection("users").where("nombre", "==", 'carmen')
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log("ENTRAA");    
 i++;
       console.log("i "+i);

            // doc.data() is never undefined for query doc snapshots
            var nombre=doc.data().nombre;
            console.log(nombre+"nombrecito")
       if(nombre=="" && i==1){
          console.log("false");
          instance = createInstance();
           console.log("Creado");
         return false
       }else {
         alert("Ya existe una instancia");
   console.log("Ya existe una instancia");
         return true;
       }
        
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}


        function  getInstance() {
 
          var aux= devolver();
    console.log(aux+"ausss");
            if (!instance && aux) {
                instance = createInstance();
                  
                console.log("Creado");
            }else{
                console.log("Ya existe una instancia");
            }
            return instance;
        
  }
function insertarBaseDato(u,p){
    db.collection("users").add({
      id: 100,
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





