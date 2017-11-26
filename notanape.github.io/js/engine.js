$(function(){

//Регистрация обработчиков событий

	$("#name").add("#surname").add("#mobile").add("#ID").bind({
		"keyup":_format
	});

	$("#job").bind({
		"click": function(e){
			_reset(e.target);
		},
		"keydown": function(e){
			_reset(e.target);
		}
	})

	$("#confirm").bind({
		"click": _check
	})

	$("#sendSms").bind({
		"click": _sendSms
	})

})