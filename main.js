var $form = $('form');

var $first = $('#first');

$form.on('submit', function(event){
	var url, movie, data;

	event.preventDefault();
	movie = $form.find('input').val(); // have to pass the value first
	url = 'http://www.omdbapi.com/?t=' + movie + '&type = movie&tomatoes = true';

	$.ajax(url, {
		complete: function(xml, status){
			data = $.parseJSON(xml.responseText);

			$first.find('.title').text(data.Title);
			$first.find('.plot').text(data.Plot);

			$first.find('.poster').html('<img src= "' + data.Poster + '" />"');
			$first.find('.year').text(data.Year);
			$first.show();	
		}
	});

});


$(document).ready(function(){
	$( function() {
    $( "#first" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "h4" )
            .html( "Bookmarked!" );
      }
    });
  } );
});


