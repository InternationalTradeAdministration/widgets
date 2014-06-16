(function() {

	if(typeof jQuery=='undefined') {
	    var headTag = document.getElementsByTagName("head")[0];
	    var jqTag = document.createElement('script');
	    jqTag.type = 'text/javascript';
	    jqTag.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';
	    jqTag.onload = main;
	    headTag.appendChild(jqTag);
	} else {
	     main();
	}

	function stopSpinner(spinner){
		
		$('#events-country-button').removeClass('search-button-clear');
		spinner.stop();	
	}

	function getCountryEvents(spinner){
		var eventsCountryIndex = $('#events-country-select').val();
		if (eventsCountryIndex == 0){
			alert("No selection has been chosen");
			document.getElementById("#events-country-results").innerHTML = "";
			stopSpinner(spinner);
			return;
		}
		else{
			var searchParam = "country=" + countryList[eventsCountryIndex][1];
			getEventscountry(searchParam, spinner);
		}
	}


	function getEventscountry(searchParam, spinner) {
		var url = "http://api.trade.gov/trade_events/search?"+ searchParam + "&callback=?";
		$.ajax({
			url: url,
			dataType: 'jsonp',
			success: function(feed){
				var results = feed.results;
				if (results.length == 0){
					list = "<p>No events were found, please try another selection.<p>"
				}
				else {
					var list = "<p class='results-title'>List of Events</p>";
					for (var i=0; i<=results.length-1; i++){
						$('#events-country-results').addClass('results-container');
						var eventcountry = results[i];
						var name = eventcountry.event_name;
						var phone = eventcountry.phone;
						list += "<p class='results-legend'>" + name + " - " + phone +"</p>";
					}
				}
				document.getElementById("#events-country-results").innerHTML = list;
				stopSpinner(spinner);
			},
			error: function(error) {
				stopSpinner(spinner);
				alert("Error retriving events, please try again");
			},
			timeout:3000
		});
	}

	function main() { 
	   $(document).ready(function($) {
			if (!$("link[href='http://ajsingh273.github.io/widgets/stylesheets/trade-widgets.css']").length){
				$('<script src="http://ajsingh273.github.io/widgets/javascripts/spin.js" type="text/javascript"></script>').appendTo("head");
				$('<script src="http://ajsingh273.github.io/widgets/javascripts/trade-widget-vars.js" type="text/javascript"></script>').appendTo("head");
				$('<link href="http://ajsingh273.github.io/widgets/stylesheets/trade-widgets.css" rel="stylesheet">').appendTo("head");
			}
			var container = "";
			container += ('<div id="#events-country-form" class="form-container"></div>');
			container += ('<div id="#events-country-results" class="results-container"></div>');
			document.getElementById('events-country-container').innerHTML = container;
			$('#events-country-container').addClass('widget-container');
			var form = "";				
	    form += ('<p class="widget-title"></p>');		
			
			form += ('<div class="select-input"><select id="events-country-select" class="search-input"></select>');
			form += ('<button class="search-button" id="events-country-button"></button></div>');
			document.getElementById('#events-country-form').innerHTML = form;

		
			$('#events-country-button').on('click', function(){
				$(this).addClass('search-button-clear');
				var spinner = new Spinner(spinnerVars).spin(this);
				getCountryEvents(spinner);
				});

			//populate dropdown lists
			
			$.each(countryList, function(val, array) {
	      $('#events-country-select').append( $('<option></option>').val(val).html(array[0]));
	     });

	   });
	}

})();