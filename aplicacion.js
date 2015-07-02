$(document).ready(function() {

$("#sign_up").on( "submit", function(event) {
		event.preventDefault();
		var email_input = $("#email").val()
		email_validation(email_input)
		var password_input = $("#pw").val()
		password_validation(password_input)
    console.log( "<form> was clicked" );
});


});

function email_validation(email) {
		if (email.length == 0 || email == null){
			var error = $("#error_email h4").text("Debes escribir una dirección válida.");
		}
};
 
 function password_validation(pw) {
 		if (pw.length < 8 || pw == null){
 			 var error = $("#error_pw h4").text("El password debe de tener al menos 8 caracteres.");
 		}
 };


		// <p>Debes escribit una dirección válida.</p>
		// <p>El password debe tener al menos un carácter numérico.</p>
		// <p>El password debe contener al menos una mayúscula.</p>
		// <p>El password debe de tener al menos 8 caracteres.</p>