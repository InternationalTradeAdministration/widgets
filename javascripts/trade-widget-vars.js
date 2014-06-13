var stateList = [["Select a State", ""],["ALABAMA",	"AL"],["ALASKA",	"AK"],["AMERICAN SAMOA",	"AS"],["ARIZONA",	"AZ"],["ARKANSAS",	"AR"],["CALIFORNIA",	"CA"],["COLORADO",	"CO"],
["CONNECTICUT",	"CT"],["DELAWARE",	"DE"],["DISTRICT OF COLUMBIA",	"DC"],["FEDERATED STATES OF MICRONESIA",	"FM"],["FLORIDA",	"FL"],["GEORGIA",	"GA"],
["GUAM GU",	"GU"],["HAWAII",	"HI"],["IDAHO",	"ID"],["ILLINOIS",	"IL"],["INDIANA",	"IN"],["IOWA",	"IA"],["KANSAS",	"KS"],["KENTUCKY",	"KY"],["LOUISIANA",	"LA"],
["MAINE",	"ME"],["MARSHALL ISLANDS",	"MH"],["MARYLAND",	"MD"],["MASSACHUSETTS",	"MA"],["MICHIGAN",	"MI"],["MINNESOTA",	"MN"],["MISSISSIPPI",	"MS"],["MISSOURI",	"MO"],
["MONTANA",	"MT"],["NEBRASKA",	"NE"],["NEVADA",	"NV"],["NEW HAMPSHIRE",	"NH"],["NEW JERSEY",	"NJ"],["NEW MEXICO",	"NM"],["NEW YORK",	"NY"],["NORTH CAROLINA",	"NC"],
["NORTH DAKOTA",	"ND"],["NORTH MARIANA ISLANDS",	"MP"],["OHIO",	"OH"],["OKLAHOMA",	"OK"],["OREGON",	"OR"],["PALAU",	"PW"],["PENNSYLVANIA",	"PA"],["PUERTO RICO",	"PR"],
["RHODE ISLAND",	"RI"],["SOUTH CAROLINA",	"SC"],["SOUTH DAKOTA",	"SD"],["TENNESSEE",	"TN"],["TEXAS",	"TX"],["UTAH",	"UT"],["VERMONT",	"VT"],["VIRGIN ISLANDS",	"VI"],
["VIRGINIA",	"VA"],["WASHINGTON",	"WA"],["WEST VIRGINIA",	"WV"],["WISCONSIN",	"WI"],["WYOMING",	"WY"],["Armed Forces Africa",	"AE"],["Armed Forces Americas",	"AA"],
["Armed Forces Canada",	"AE"],["Armed Forces Europe",	"AE"],["Armed Forces Middle East",	"AE"],["Armed Forces Pacific",	"AP"]];

var countryList = ["Select a Country", "MA", "CA", "SN", "IN", "DO"
];

var industryList = ["Select a Industry","Aerospace & Defense",
"Agribusiness",
"Arts, Entertainment & Media",
"Automotive & Ground Transportation",
"Business & Professional Services",
"Chemicals",
"Construction, Building & Heavy Equipment",
"Consumer Goods",
"Energy & Mining",
"Environmental Industries",
"Financial Services",
"Food Processing & Packaging",
"Franchising",
"Healthcare, Biotechnology & Pharmaceuticals",
"Industrial Machinery & Equipment",
"Industrial Materials",
"Information Technology & Services",
"Marine Industries",
"Public Administration",
"Security & Safety",
"Textiles & Apparel",
"Travel, Tourism & Hospitality"
];

var spinnerVars = {
	lines: 10, // The number of lines to draw
	length: 4, // The length of each line
	width: 3, // The line thickness
	radius: 5, // The radius of the inner circle
	color: '#ffffff', // #rbg or #rrggbb
	speed: 1, // Rounds per second
	trail: 10, // Afterglow percentage
	shadow: false // Whether to render a shadow
};