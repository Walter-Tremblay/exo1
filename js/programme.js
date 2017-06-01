$('form').submit(function(event){
	event.preventDefault();

	console.log('Vous vous appelez '+ $('input').val());
	$('input').val('');
});

