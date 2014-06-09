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
		$('#events-button').removeClass('search-button-clear');
		spinner.stop();	
	}

	function getEvents(spinner) {
		var keyword = document.getElementById("events-keyword").value;
		var url = "http://api.trade.gov/trade_events/search.json?q=";
		if (keyword.length > 0){
			url += keyword;
		}
		else {
			alert("No Events search term entered");
			document.getElementById("events-results").innerHTML = "";
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
					list = "<p>No events were found, please try another search term.<p>"
				}
				else {
					$('#events-results').addClass('results-container');
					var list = "<p class='results-title'>Trade Events</p>";
					for (var i=0; i<=results.length-1; i++){
						var event = results[i];
						var event_name = event.event_name;
						var url = event.url;
						list += "<p class='results-legend'>" + title + "<br>";
						list += "<a class='results-link' href=" + url + " target='_blank'>" + url + "</a></p>";
					}
				}
				document.getElementById("events-results").innerHTML = list;
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
				if (!$("link[href='stylesheets/trade-widgets.css']").length){
					$('<script src="javascripts/spin.js" type="text/javascript"></script>').appendTo("head");
					$('<script src="javascripts/trade-widget-vars.js" type="text/javascript"></script>').appendTo("head");
					$('<link href="stylesheets/trade-widgets.css" rel="stylesheet">').appendTo("head");
				}
				var container = "";
				container += ('<div id="events-form" class="form-container"></div>');
				container += ('<div id="events-results" class="results-container"></div>');
				document.getElementById('events-container').innerHTML = container;
				$('#events-container').addClass('widget-container');
				var form = "";				
	      form += ('<p class="widget-title">Trade Events</p>');
				form += ('<div><input class="search-input" type="text" id="events-keyword" placeholder="Enter a search term" size="40">');
				form += ('<button class="search-button" id="events-button"></button></div>');
				document.getElementById('events-form').innerHTML = form;
				$('#events-button').on('click', function(){
					$(this).addClass('search-button-clear');
					var spinner = new Spinner(spinnerVars).spin(this);
					getEvents(spinner);
					});
				$('#events-keyword').keypress(function (e){
				    if(e.which == 13){
							$('#events-button').addClass('search-button-clear');
							target = document.getElementById('events-button');
							var spinner = new Spinner(spinnerVars).spin(target);
							getEvents(spinner);
				    }
				});
	    });
	}

})();