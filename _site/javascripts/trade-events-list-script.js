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
	var industry = "";
	var countries = "";

	function stopSpinner(spinner){
		$('#countries-trade-events-button').removeClass('search-button-clear');
		$('#industry-trade-events-button').removeClass('search-button-clear');
		spinner.stop();	
	}

	function getTradeEvents(spinner){
		var countriesIndex = $('#trade-events-countries').val();
		var industryIndex = $('#trade-events-industry').val();
		if (countriesIndex == 0 && industryIndex == 0){
			alert("No selection has been chosen");
			document.getElementById("trade-events-results").innerHTML = "";
			stopSpinner(spinner);
			return;
		}
		else{
			if (industryIndex > 0){
				industry = industryList[industryIndex];
			}
			if (countriesIndex > 0){
				countries = countriesList[countriesIndex][1]
			}
			var searchParams = "countries=" + country + "&industry=" + industry;
		}

		var url = "http://api.trade.gov/trade_events/search?" + searchParams + "&callback=?";
		$.ajax({
			url: url,
			dataType: 'jsonp',
			success: function(feed){
				var results = feed.results;
				if (results.length == 0){
					list = "<p>No events were found, please try another selection.<p>"
				}
				else {
					$('#trade-events-results').addClass('results-container');
					var list = "<p></p>";
					for (var i=0; i<=results.length-1; i++){
						var event = results[i];
						var name = event.event_name;
						var startDate = event.start_date;
						var endDate = event.end_date;
						if (event.url){
							var url = "<a class='results-link' href=" + event.url + " target='_blank'>" + event.url + "</a></p>"
						}
						else{
							var url = "No event url provided"
						}
						list += "<p class='results-legend'>" + name + "<br>";
						list += startDate + " to " + endDate + "<br>";
						list += url + "</p>";
					}
				}
				document.getElementById("trade-events-results").innerHTML = list;
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
					$('<script src="http://ajsingh273.github.io/widgets/javascripts/trade-widget-vars2.js" type="text/javascript"></script>').appendTo("head");
					$('<link href="http://ajsingh273.github.io/widgets/stylesheets/trade-widgets.css" rel="stylesheet">').appendTo("head");
				}
				var container = "";
				container += ('<div id="trade-events-form" class="form-container"></div>');
				container += ('<div id="trade-events-results" class="results-container"></div>');			
				document.getElementById('trade-events-list-container').innerHTML = container;
				$('#trade-events-list-container').addClass('widget-container');
				var form = "";				
	      
				form += ('<p><div class="select-input"><select class="search-input" id="trade-events-industry"></select>');
				form += ('<button class="search-button" id="industry-trade-events-button"></button></div></p>');
				form += ('<div class="select-input"><select class="search-input" id="trade-events-country"></select>');
				form += ('<button class="search-button" id="country-trade-events-button"></button></div>');
				document.getElementById('trade-events-form').innerHTML = form;
				$('#industry-trade-events-button').on('click', function(){
					$(this).addClass('search-button-clear');
					var spinner = new Spinner(spinnerVars).spin(this);
					getTradeEvents(spinner)
					});
				$('#countries-trade-events-button').on('click', function(){
					$(this).addClass('search-button-clear');
					var spinner = new Spinner(spinnerVars).spin(this);
					getTradeEvents(spinner);
					});

				//populate dropdown lists
				$.each(industryList, function(val, text) {
		      $('#trade-events-industry').append( $('<option></option>').val(val).html(text));
		     });
				$.each(countryList, function(val, text) {
		      $('#trade-events-countries').append( $('<option></option>').val(val).html(array[0]));
		     });
	    });
	}

})();