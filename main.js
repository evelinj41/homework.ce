jQuery(document).ready(function($){
	$('.name').on(
		'submit',
		function(e){
    e.preventDefault();

    var nombre = $('.registro .name').val();
  var apellidos = $('.registro .apellido').val();

  if (!nombre) {
  	alert('debe ingresar un nombre.');
  } else if(!apellidos){
  	alert('debe ingresar un apellido.');
  } else {
    firebase
    .auth()
    .signInWithNameAndApellidos(nombre, apellidos)
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