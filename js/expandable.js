
$(function() {
	$('.click-block').on("click", function() {
   var container = $(this).parents('.container_expand');
   container.find('.hiding-block').slideToggle();
   container.find('.arrow-btn').toggleClass('active');
	});
  });