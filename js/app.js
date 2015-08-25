$(document).ready(function(){

$( "button" ).on( "click", function(){

	var product = $('.productdescrip').val().trim();
	var price = $('.price').val().trim();
	var quantity = $('.quantity').val().trim();
	//var total = $('.total').val().trim();
	var totalCal = (quantity*price);

	var arr = [product,price,quantity]

	if (product.length == 0 ) {
			$('.error1').text("Please enter product").show();
			//$('.error1').show();
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
		$('.error1, .error2, .error3').hide('');
		}
});
$('ul').on("click",".removelist", function(){
	$(this).nextAll().slice(0,4).toggle();
	$(this).toggle();
	//$(this).toggle();
});
});

