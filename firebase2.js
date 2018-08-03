// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBVuu9sKAwwwKiR9IquQQIrsNVeSSB7Eew",
    authDomain: "homeworkce-2e9f1.firebaseapp.com",
    databaseURL: "https://homeworkce-2e9f1.firebaseio.com",
    projectId: "homeworkce-2e9f1",
    storageBucket: "homeworkce-2e9f1.appspot.com",
    messagingSenderId: "1048146095741"
  };
  firebase.initializeApp(config);

  
  const database = firebase.database();


   var guarde ={
    password:$('.password').val();
    email:$('.email').val();
    name:$('.name').val();
    apellido:$('.apellido').val();
    number:$('.number').val();
    genero:$('.genero').val();
    dep:$('dep').val();
    ciu:$('.ciu').val();
    des:$('.des').val(); 
    tipo:$('tipo').val();  }; 

  firebase.database.ref('/homeworkce-2e9f1/').push(guarde);
    location.href="Adentro.html";
    .catch(function(error) {
      alert('no se registrò con exito')
      });       

console.warn(guarde);
    iterar(guarde)