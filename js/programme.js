$('form').submit(function(event){
			event.preventDefault();

			window.alert('Vous vous appelez '+ $('input').val());
			$('input').val('');
		});