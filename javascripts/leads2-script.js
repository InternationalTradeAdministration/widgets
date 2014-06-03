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
		$('#leads2-button').removeClass('search-button-clear');
		spinner.stop();	
	}

	function getLeads2(spinner) {
		var keyword = document.getElementById("leads2-keyword").value;
		var url = "http://api.trade.gov/trade_leads/search.json?q=countries";
		
		
		if (keyword.length > 0){
			url += keyword;
		}
		else {
			alert("No search term entered");
			document.getElementById("leads2-results").innerHTML = "";
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
					list = "<p>No leads were found, please try another search term.<p>"
				}
				else {
					$('#leads2-results').addClass('leads2-container');
					var list = "<p class='results-title'></p>";
					for (var i=0; i<=results.length-1; i++){
						var lead2_source = lead2.lead2_source;
						var id = lead2.id;
						var source = lead2.source;
						var last_updated = lead2.last_updated;
						var country = lead2.country;
						var city = lead2.city;
						var title = lead2.title;
						var project_number = lead2.project_number;
						var industry = lead2.industry;
						var project_size = lead2.project_size;
						var description = lead2.description;
						var keywords = lead2.keywords;
						var publish_date = lead2.publish_date;
						var tender_date = lead2.tender_date;
						var funding_source = lead2.funding_source;
						var borrowing_entity = lead2.borrowing_entity;
						var implementing_entity = lead2.implementing_entity;
						var project_pocs = lead2.project_pocs;
						var comments = lead2.comments;
						var submitting_officer = lead2.submitting_officer;
						var submitting_officer_contact = lead2.submitting_officer_contact;
						var url = lead2.url;
						var status = lead2.status;
						list += "<p class='results-legend'>" + "<strong>Lead Source: </strong>" +  id + "<br>";
						list += "<p class='results-legend'>" + "<strong>ID: </strong>" +  agency + "<br>";
						list += "<p class='results-legend'>" + "<strong>Source: $</strong>" + contract_value + " AUD" + "<br>";
						list += "<p class='results-legend'>" + "<strong>Last Updated: </strong>" +  description + "<br>";
						list += "<p class='results-legend'>" + "<strong>Country: </strong>" +  parent_id + "<br>";
						list += "<p class='results-legend'>" + "<strong>City: </strong>" +  procurement_method + "<br>";
						list += "<p class='results-legend'>" + "<strong>Title: </strong>" +  publish_date_amended + "<br>";
						list += "<p class='results-legend'>" + "<strong>Project Number: </strong>" +  status + "<br>" ;
						list += "<p class='results-legend'>" + "<strong>Industry: </strong>" +  topic + "<br>" + "<br>";
						list += "<p class='results-legend'>" + "<strong>Project Size: </strong>" +  id + "<br>";
						list += "<p class='results-legend'>" + "<strong>Description: </strong>" +  agency + "<br>";
						list += "<p class='results-legend'>" + "<strong>Keywords: $</strong>" + contract_value + " AUD" + "<br>";
						list += "<p class='results-legend'>" + "<strong>Publish Date: </strong>" +  description + "<br>";
						list += "<p class='results-legend'>" + "<strong>Tender Date: </strong>" +  parent_id + "<br>";
						list += "<p class='results-legend'>" + "<strong>Funding Source: </strong>" +  procurement_method + "<br>";
						list += "<p class='results-legend'>" + "<strong>Borrowing Entity: </strong>" +  publish_date_amended + "<br>";
						list += "<p class='results-legend'>" + "<strong>Implementing Entity: </strong>" +  status + "<br>" ;
						list += "<p class='results-legend'>" + "<strong>Project Pocs: </strong>" +  topic + "<br>" ;
						list += "<p class='results-legend'>" + "<strong>Comments: </strong>" +  publish_date_amended + "<br>";
						list += "<p class='results-legend'>" + "<strong>Submitting Officer: </strong>" +  status + "<br>" ;
						list += "<p class='results-legend'>" + "<strong>Submitting Officer Contact: </strong>" +  topic + "<br>" ;
						list += "<a class='results-link' href=" + url + " target='_blank'>" + url + "</a></p>" + "<br>" ;
						list += "<p class='results-legend'>" + "<strong>Status: </strong>" +  status + "<br>" ;
					}
				}
				document.getElementById("leads2-results").innerHTML = list;
				stopSpinner(spinner);
			},
			error: function(error) {
				stopSpinner(spinner);
				alert("Error retriving leads, please try again");
			},
			timeout:3000
		});
	}

	function main() { 
	    $(document).ready(function($) {
				if (!$("link[href='stylesheets/']").length){
					$('<script src="javascripts/spin.js" type="text/javascript"></script>').appendTo("head");
					$('<script src="javascripts/trade-widget-vars.js" type="text/javascript"></script>').appendTo("head");
					$('<link href="stylesheets/" rel="stylesheet">').appendTo("head");
				}
				var container = "";
				container += ('<div id="leads2-form" class="form-container"></div>');
				container += ('<div id="leads2-results" class="leads2-container"></div>');
				document.getElementById('leads2-container').innerHTML = container;
				$('#leads2-container').addClass('widget-container');
				var form = "";				
	      form += ('<p class="widget-title">TRADE LEADS</p>');
				form += ('<div><input class="search-input" type="text" id="leads2-keyword" placeholder="" size="40">');
				form += ('<button class="search-button" id="leads2-button">Search</button></div>');
				document.getElementById('leads2-form').innerHTML = form;
				$('#leads2-button').on('click', function(){
					$(this).addClass('search-button-clear');
					var spinner = new Spinner(spinnerVars).spin(this);
					getLeads2(spinner);
					});
				$('#leads2-keyword').keypress(function (e){
				    if(e.which == 13){
							$('#leads2-button').addClass('search-button-clear');
							target = document.getElementById('leads2-button');
							var spinner = new Spinner(spinnerVars).spin(target);
							getLeads2(spinner);
				    }
				});
	    });
	}

})();