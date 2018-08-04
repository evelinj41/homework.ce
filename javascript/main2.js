jjQuery(document).ready(function($){
  $('.registro').on(
    'submit',
    function(e){
      e.preventDefault();



      var email = $('.registro .email').val();
      var password = $('.registro .password').val();

      if (!email){
        alert('debe ingresar email');
      }else if(!password){
        alert('debe ingresar el campo.');
      }else {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
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