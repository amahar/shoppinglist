$(document).ready(function(){


// user can enter or click to add values
	$('.productdescrip, .price, .quantity').keypress(function(e){
		if (e.which === 13){
			enterInput();
		};
	});
	$( ".add" ).on( "click", function(){
			enterInput();
	});

// main function	
		function enterInput(){

		var product = $('.productdescrip').val().trim();
		var price = $('.price').val().trim();
		var quantity = $('.quantity').val().trim();
		var totalCal = (quantity*price);

		//store values as an array 
		var arr = [product,price,quantity]

		// validate user input otherwise output values
		if (product.length == 0 ) {
				$('.error1').text("Please enter product").show();
			} else if (price.length == 0) {
				$('.error2').text("Please enter price").show();
			} else if (quantity.length == 0) {
				$('.error3').text("Please enter quantity").show();
		} else {
			$('.shoplist ul').append('<button class="removelist">Remove</button>');
			$('.shoplist ul').append('<li>' + product + '</li>').show();
			$('.shoplist ul').append('<li>' + price + '</li>').show();
			$('.shoplist ul').append('<li>' + quantity + '</li>').show();
			$('.shoplist ul').append('<li>' + totalCal + '</li>').show();
			$('.productdescrip, .price, .quantity').val('');
			$('.error1, .error2, .error3').hide('');
		}
	};

//Romove a row using event delegation
	$(document).on("click",".removelist", function(){
		$(this).nextAll().slice(0,4).toggle();
		$(this).toggle();

	});

	$('#sortable').sortable({ axis: "y"});

});

