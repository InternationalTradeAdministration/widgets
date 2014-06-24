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
		$('#country-art-button').removeClass('search-button-clear');
		$('#industry-art-button').removeClass('search-button-clear');
		spinner.stop();	
	}



	function getArt(spinner){
		var countryIndex = $('#art-country').val();
		var industryIndex = $('#art-industry').val();
		if (countryIndex == 0 && industryIndex == 0){
			alert("No selection has been chosen");
			document.getElementById("art-results").innerHTML = "";
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

		var url = "http://api.trade.gov/trade_articles/search?" + searchParams + "&callback=?";
		$.getJSON(url, function(feed){
			var results = feed.results;
			if (results.length == 0){
				list = "<p>No events were found, please try another selection.<p>"
			}
			else {
				$('#art-results').addClass('results-container');
				var list = "<p>List of Articles<input type='submit' value ='View Calendar' id='view-calendar-button' class='view-calendar-button'></p>";
				for (var i=0; i<=results.length-1; i++){
					var art = results[i];
					var title = art.title;
					var content = art.content;
					var id = art.id;
					if (art.url){
						var url = "<a class='results-link' href=" + art.url + " target='_blank'>" + art.url + "</a></p>"
					}
					else{
						var url = "No event url provided"
					}
					list += "<p class='results-legend'>" + title + "<br>";
					list += id + " to " + content + "<br>";
					list += url + "</p>";
				}
			}
			document.getElementById("art-results").innerHTML = list;
			$('#view-calendar-button').on('click', showCalendar);
		
			stopSpinner(spinner);
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
				container += ('<div id="art-form" class="form-container"></div>');
				container += ('<div id="art-results" class="results-container"></div>');			
				document.getElementById('art-container').innerHTML = container;
				$('#art-container').addClass('widget-container');
				$('<div class="modal" id="calendar"></div>').appendTo("body");
				var form = "";				
	      form += ('<p class="widget-title">Trade Articles</p>');
				form += ('<p><div class="select-input"><select class="search-input" id="art-industry"></select>');
				form += ('<button class="search-button" id="industry-art-button"></button></div></p>');
				form += ('<div class="select-input"><select class="search-input" id="art-country"></select>');
				form += ('<button class="search-button" id="country-art-button"></button></div>');
				document.getElementById('art-form').innerHTML = form;
				$('#industry-art-button').on('click', function(){
					$(this).addClass('search-button-clear');
					var spinner = new Spinner(spinnerVars).spin(this);
					getArt(spinner)
					});
				$('#country-art-button').on('click', function(){
					$(this).addClass('search-button-clear');
					var spinner = new Spinner(spinnerVars).spin(this);
					getArt(spinner);
					});

				//populate dropdown lists
				$.each(industryList, function(val, text) {
		      $('#art-industry').append( $('<option></option>').val(val).html(text));
		     });
				$.each(countryList, function(val, array) {
		      $('#art-country').append( $('<option></option>').val(val).html(array[0]));
		     });
	    });
	}

})();