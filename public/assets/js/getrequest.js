
$('body').on('click','.devour', function(event){
	event.preventDefault();
	var str = $(this).val();
	var arr = str.split('_');
	var item_id = arr[0];
	var itemtext = arr[1];

	$.ajax({
		method:'PUT',
		datatype: 'json',
		url:`/api/burgers/${item_id}`,
		data: {
			devoured : "1"
		}
	});

	var rdiv = $('<div>',{id:'rdiv'}).css({'background-color':'red', "color":'white'});
		rdiv.append(itemtext.trim());

	$('.row23').append(rdiv);
	$(this).parent().remove();


});
