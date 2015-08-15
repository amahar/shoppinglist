$(document).ready(function(){

$( "button" ).on( "click", function(){

	var product = $('.productdescrip').val().trim();
	var price = $('.price').val().trim();
	var quantity = $('.quantity').val().trim();
	var total = $('.total').val().trim();

	var arr = [product,price,quantity,total]

	if (product.length == 0 ) {

		$('#error').text("Please enter value");

	} else if (price.length == 0) {

		

	}

});


});

