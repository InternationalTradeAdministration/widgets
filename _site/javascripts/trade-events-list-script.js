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
	$('#reports-button').removeClass('search-button-clear');
		spinner.stop();
		$('#country-trade-events-button').removeClass('search-button-clear');
		$('#industry-trade-events-button').removeClass('search-button-clear');
		spinner.stop();	
	}

	function getTradeEvents(spinner){
		var countryIndex = $('#trade-events-country').val();
		var industryIndex = $('#trade-events-industry').val();
		if (countryIndex == 0 && industryIndex == 0){
			alert("No selection has been chosen");
			document.getElementById("trade-events-results").innerHTML = "";
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
					var list = "<p>List of Events</p>";
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

function getReports(spinner) {
		var keyword = document.getElementById("reports-keyword").value;
		var url = "http://api.trade.gov/market_research_library/search.json?q=";
		if (keyword.length > 0){
			url += keyword;
		}
		else {
			alert("No MRL search term entered");
			document.getElementById("reports-results").innerHTML = "";
			stopSpinner(spinner);
			return;
		}
		url += "&callback=?";
		$.ajax({
			url: url,
			dataType: 'jsonp',
			success: function(feed){
				var results = feed.results;
				if (results.length == 0){
					list = "<p>No reports were found, please try another search term.<p>"
				}
				else {
					$('#reports-results').addClass('results-container');
					var list = "<p class='results-title'>Market Research Reports</p>";
					for (var i=0; i<=results.length-1; i++){
						var report = results[i];
						var title = report.title;
						var url = report.url;
						list += "<p class='results-legend'>" + title + "<br>";
						list += "<a class='results-link' href=" + url + " target='_blank'>" + url + "</a></p>";
					}
				}
				document.getElementById("reports-results").innerHTML = list;
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
				container += ('<div id="reports-form" class="form-container"></div>');
				container += ('<div id="reports-results" class="results-container"></div>');
				document.getElementById('reports-container').innerHTML = container;
				$('#reports-container').addClass('widget-container');
				var form = "";
				container += ('<div id="trade-events-form" class="form-container"></div>');
				container += ('<div id="trade-events-results" class="results-container"></div>');			
				document.getElementById('trade-events-list-container').innerHTML = container;
				$('#trade-events-list-container').addClass('widget-container');
				var form = "";				
	      form += ('<p class="widget-title">Trade Events List</p>');
				form += ('<p><div class="select-input"><select class="search-input" id="trade-events-industry"></select>');
				form += ('<button class="search-button" id="industry-trade-events-button"></button></div></p>');
				form += ('<div class="select-input"><select class="search-input" id="trade-events-country"></select>');
				form += ('<button class="search-button" id="country-trade-events-button"></button></div>');
				document.getElementById('trade-events-form').innerHTML = form;
				form += ('<p class="widget-title">Market Research Reports</p>');
				form += ('<div><input class="search-input" type="text" id="reports-keyword" placeholder="Enter a search term" size="40">');
				form += ('<button class="search-button" id="reports-button"></button></div>');
				document.getElementById('reports-form').innerHTML = form;
		
				$('#industry-trade-events-button').on('click', function(){
					$(this).addClass('search-button-clear');
					var spinner = new Spinner(spinnerVars).spin(this);
					getTradeEvents(spinner)
					});
				$('#country-trade-events-button').on('click', function(){
					$(this).addClass('search-button-clear');
					var spinner = new Spinner(spinnerVars).spin(this);
					getTradeEvents(spinner);
					});
					
					
				$('#reports-button').on('click', function(){
					$(this).addClass('search-button-clear');
					var spinner = new Spinner(spinnerVars).spin(this);
					getReports(spinner);
					});
				$('#reports-keyword').keypress(function (e){
				    if(e.which == 13){
							$('#reports-button').addClass('search-button-clear');
							target = document.getElementById('reports-button');
							var spinner = new Spinner(spinnerVars).spin(target);
							getReports(spinner);
				    }
				

				//populate dropdown lists
				$.each(industryList, function(val, text) {
		      $('#trade-events-industry').append( $('<option></option>').val(val).html(text));
		     });
				$.each(countryList, function(val, array) {
		      $('#trade-events-country').append( $('<option></option>').val(val).html(array[0]));
		     });
	    });
	}

})();