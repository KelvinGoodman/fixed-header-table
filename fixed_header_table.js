$(document).ready(function(){
	
	$('.scrollholder').each(function(){
		var counter = 0;
		$(this).children(".scrollablecontent").children().children().children("tr:first").children().each(function(){
			var width = $(this).width();
			$(this).parent().parent().parent().parent().parent().children('.headertable').children().children('tr:first').children('td:eq(' +counter + ')').width(width)
			counter++;
		});
	});
});