$(document).ready(function() {

$("#sign_up").on( "submit", function(event) {
		event.preventDefault();
		var email_input = $("#email").val()
		email_validation(email_input)
		var password_input = $("#pw").val()
		password_validation(password_input)
		validate_contains_numbers(password_input)
		validate_contains_uppercase(password_input)
    console.log( "<form> was clicked" );


});


});

function email_validation(email) {
		var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		if (email.match(regex)){
			$("#error").text("Gracias por Registrarte!")
		}
		else{
			$("#error").append("<p>Debes escribir una dirección válida.</p>");
		}
};
 
 function password_validation(pw) {
 		if (pw.length < 8 || pw == null){
 			 $("#error").append("<p>El password debe de tener al menos 8 caracteres.</p>");
 		}
 };


function validate_contains_numbers(pw){
		var regex=/^(?=.*\d).*$/;
    if (pw.match(regex)){
    	$("#error").text("Gracias por Registrarte!")
		}
		else{
      $("#error").append("<p>El password debe tener al menos un carácter numérico.</p>");
    }
}


function validate_contains_uppercase(pw){
		var regex=/^(?=.*[A-Z]).*$/;
    if (pw.match(regex)){
    	$("#error").text("Gracias por Registrarte!")
		}
		else{
       $("#error").append("<p>El password debe contener al menos una mayúscula.</p>");
    }
}

