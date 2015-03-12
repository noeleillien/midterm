(function(){

$('.option').on('click', function(){
	var which_image = $(this).attr('data-which');
	// console.log(which_image);

	var full_image_path = 'imgs/' + which_image;
	console.log(full_image_path);

	$('#slideshow-canvas img').attr('src', full_image_path);
});

}).call(this);