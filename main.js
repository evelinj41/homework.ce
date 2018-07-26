jQuery(document).ready(function($){
  $('.registro').on(
    'submit',
    function(e){
    e.preventDefault();


  var name = $('.registro .name').val();
  var apellido = $('.registro .apellido').val();
  var number = $('.registro.number').val();
  var Email = $('.registro .Email').val();
  var edad = $('.registro .edad').val();
  var dep = $('.registro .dep').val();
  var number = $('.registro .dep').val();
  var des = $('.registro .des').val();
  var ciu = $('.registro .ciu').val();

  if (!name) {
    alert('debe ingresar el campo.');
  } else if(!apellido){
    alert('debe ingresar el campo.');
  } else {
    firebase
    .auth()
    .createUserWithNameAndApellido(name, apellido, number, Email, edad, dep, number)
    .then(function(){
      alert('bienvenido');
    })
    .catch(function(error) {
      alert('no eres bienvenido');
    
         });
    }
  }

  );

});

jQuery(document).ready(function($){
  $('.registro').on(
    'submit',
    function(e){
    e.preventDefault();
alert('ingrsar evento');
  var number = $('.numero.number').val();
  var Email = $('.numero .Email').val();
  var edad = $('.numero .edad').val();

  if (!number) {
    alert('debe ingresar un numero.');
  } else if(!Email){
    alert('debe ingresar un email.');
  }else {
    firebase
    .auth()
    .createUserWithNumberAndEmail(number, Email, edad)
    .then(function(){
      alert('bienvenido');
    })
    .catch(function(error) {
      alert('no eres bienvenido');
    
         });
    }
  }

  );

});
