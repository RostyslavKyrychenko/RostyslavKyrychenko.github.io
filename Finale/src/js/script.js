
// (function(){
//     $.getJSON('http://api.pixplorer.co.uk/image?word=Activity+idea&amount=7&size=l', 
//   	  function (activity) {
//   	  	$.each(activity.images, function(i,images){
//           var template = $('#template').html();   
//           var activityImg = {
//           	images: images
//           };
//           var content = tmpl(template, {
//           	data: activityImg
//           });

//           $('.ideas').append(content);

//           $('.grid').masonry({
//             itemSelector: '.grid__item',
//             columnWidth: 200,
//             layoutMode: 'fitRows'
//           });

//           // $('.grid').remove

//         });
//     });

(function($) {

	$.support.cors = true;

	$(function() {

		$('.jcarousel').jcarousel({
			animation: 'slow',
			wrap: 'circular'
		})

		.jcarouselAutoscroll({
			interval: 5000,
			target: '+=1',
			autostart: true
		});

		$('.jcarousel-control-prev')
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('inactive');
			})
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('inactive');
			})
			.jcarouselControl({
				target: '-=1'
			});

		$('.jcarousel-control-next')
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('inactive');
			})
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('inactive');
			})
			.jcarouselControl({
				target: '+=1'
			});
	
		var queryPic = '';

		function renderList(queryPic) {

			$.ajax({
				type: "GET",
    			dataType: "json",
    			cache: false,
				url: 'http://api.pixplorer.co.uk/image?word=' + queryPic + '&amount=7&size=tb',
				// url: 'https://pixabay.com/api/?key=2702410-c1bfe1096276972627af84493&q=' + queryPic + '&per_page=7&image_type=photo',
				success: function(data) {
					var piclist = tmpl($('#piclist-template').html(), data);

					$('.grid').remove();

					$('.ideas').append(piclist);
					$('.grid').masonry({
						itemSelector: '.grid__item',
						layoutMode: 'masonry',
						masonry: {
							gutter: 20
						}
					});
				}
			});
		}

		$('#f').submit(function(e) {

			e.preventDefault();
			var query = encodeURIComponent($('.search__input').val());
			renderList(query);

		});

		renderList();

	});

})(jQuery);