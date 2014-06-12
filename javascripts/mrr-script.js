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
	var country = "";

	function stopSpinner(spinner){
		$('#country-mrr-button').removeClass('search-button-clear');
		$('#industry-mrr-button').removeClass('search-button-clear');
		spinner.stop();	
	}

	function getMrr(spinner){
		var countryIndex = $('#mrr-country').val();
		var industryIndex = $('#mrr-industry').val();
		if (countryIndex == 0 && industryIndex == 0){
			alert("No selection has been chosen");
			document.getElementById("mrr-results").innerHTML = "";
			stopSpinner(spinner);
			return;
		}
		else{
			if (industryIndex > 0){
				industry = industryList[industryIndex];
			}
			if (countryIndex > 0){
				country = countryList[countryIndex][1]
			}
			var searchParams = "country=" + country + "&industry=" + industry;
		}

		var url = "http://api.trade.gov/market_research_library/search?" + searchParams + "&callback=?";
		$.ajax({
			url: url,
			dataType: 'jsonp',
			success: function(feed){
				var results = feed.results;
				if (results.length == 0){
					list = "<p>No mrr were found, please try another selection.<p>"
				}
				else {
					$('#mrr-results').addClass('results-container');
					var list = "<p>List of Market Research Report</p>";
					for (var i=0; i<=results.length-1; i++){
						var mrr = results[i];
						var title = mrr.title;
						var expiration_date = mrr.expiration_date;
						if (event.url){
							var url = "<a class='results-link' href=" + mrr.url + " target='_blank'>" + mrr.url + "</a></p>"
						}
						else{
							var url = ""
						}
						list += "<p class='results-legend'>" + title + "<br>";
						list += expiration_date + "<br>";
						list += url + "</p>";
					}
				}
				document.getElementById("mrr-results").innerHTML = list;
				stopSpinner(spinner);
			},
			error: function(error) {
				stopSpinner(spinner);
				alert("Error retriving mrr, please try again");
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
				container += ('<div id="mrr-form" class="form-container"></div>');
				container += ('<div id="mrr-results" class="results-container"></div>');			
				document.getElementById('mrr-container').innerHTML = container;
				$('#mrr-container').addClass('widget-container');
				var form = "";				
	      
				form += ('<p><div class="select-input"><select class="search-input" id="mrr-industry"></select>');
				form += ('<button class="search-button" id="industry-mrr-button"></button></div></p>');
				form += ('<div class="select-input"><select class="search-input" id="mrr-country"></select>');
				form += ('<button class="search-button" id="country-mrr-button"></button></div>');
				document.getElementById('mrr-form').innerHTML = form;
				$('#industry-mrr-button').on('click', function(){
					$(this).addClass('search-button-clear');
					var spinner = new Spinner(spinnerVars).spin(this);
					getMrr(spinner)
					});
				$('#country-mrr-button').on('click', function(){
					$(this).addClass('search-button-clear');
					var spinner = new Spinner(spinnerVars).spin(this);
					getMrr(spinner);
					});

				//populate dropdown lists
				$.each(industryList, function(val, text) {
		      $('#mrr-industry').append( $('<option></option>').val(val).html(text));
		     });
				$.each(countryList, function(val, array) {
		      $('#mrr-country').append( $('<option></option>').val(val).html(array[0]));
		     });
	    });
	}

})();