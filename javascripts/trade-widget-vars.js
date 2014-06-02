var stateList = [["Select a State", ""],["ALABAMA",	"AL"],["ALASKA",	"AK"],["AMERICAN SAMOA",	"AS"],["ARIZONA",	"AZ"],["ARKANSAS",	"AR"],["CALIFORNIA",	"CA"],["COLORADO",	"CO"],
["CONNECTICUT",	"CT"],["DELAWARE",	"DE"],["DISTRICT OF COLUMBIA",	"DC"],["FEDERATED STATES OF MICRONESIA",	"FM"],["FLORIDA",	"FL"],["GEORGIA",	"GA"],
["GUAM GU",	"GU"],["HAWAII",	"HI"],["IDAHO",	"ID"],["ILLINOIS",	"IL"],["INDIANA",	"IN"],["IOWA",	"IA"],["KANSAS",	"KS"],["KENTUCKY",	"KY"],["LOUISIANA",	"LA"],
["MAINE",	"ME"],["MARSHALL ISLANDS",	"MH"],["MARYLAND",	"MD"],["MASSACHUSETTS",	"MA"],["MICHIGAN",	"MI"],["MINNESOTA",	"MN"],["MISSISSIPPI",	"MS"],["MISSOURI",	"MO"],
["MONTANA",	"MT"],["NEBRASKA",	"NE"],["NEVADA",	"NV"],["NEW HAMPSHIRE",	"NH"],["NEW JERSEY",	"NJ"],["NEW MEXICO",	"NM"],["NEW YORK",	"NY"],["NORTH CAROLINA",	"NC"],
["NORTH DAKOTA",	"ND"],["NORTH MARIANA ISLANDS",	"MP"],["OHIO",	"OH"],["OKLAHOMA",	"OK"],["OREGON",	"OR"],["PALAU",	"PW"],["PENNSYLVANIA",	"PA"],["PUERTO RICO",	"PR"],
["RHODE ISLAND",	"RI"],["SOUTH CAROLINA",	"SC"],["SOUTH DAKOTA",	"SD"],["TENNESSEE",	"TN"],["TEXAS",	"TX"],["UTAH",	"UT"],["VERMONT",	"VT"],["VIRGIN ISLANDS",	"VI"],
["VIRGINIA",	"VA"],["WASHINGTON",	"WA"],["WEST VIRGINIA",	"WV"],["WISCONSIN",	"WI"],["WYOMING",	"WY"],["Armed Forces Africa",	"AE"],["Armed Forces Americas",	"AA"],
["Armed Forces Canada",	"AE"],["Armed Forces Europe",	"AE"],["Armed Forces Middle East",	"AE"],["Armed Forces Pacific",	"AP"]];

var countryList = [["Select a Country", ""],["AFGHANISTAN",	"AF"],["ÅLAND ISLANDS",	"AX"],["ALBANIA",	"AL"],["ALGERIA",	"DZ"],["AMERICAN SAMOA",	"AS"],["ANDORRA",	"AD"],["ANGOLA",	"AO"],["ANGUILLA",	"AI"],
["ANTARCTICA",	"AQ"],["ANTIGUA AND BARBUDA",	"AG"],["ARGENTINA",	"AR"],["ARMENIA",	"AM"],["ARUBA",	"AW"],["AUSTRALIA",	"AU"],["AUSTRIA",	"AT"],["AZERBAIJAN",	"AZ"],
["BAHAMAS",	"BS"],["BAHRAIN",	"BH"],["BANGLADESH",	"BD"],["BARBADOS",	"BB"],["BELARUS",	"BY"],["BELGIUM",	"BE"],["BELIZE",	"BZ"],["BENIN",	"BJ"],["BERMUDA",	"BM"],
["BHUTAN",	"BT"],["BOLIVIA, PLURINATIONAL STATE OF",	"BO"],["BONAIRE, SINT EUSTATIUS AND SABA",	"BQ"],["BOSNIA AND HERZEGOVINA",	"BA"],["BOTSWANA",	"BW"],["BOUVET ISLAND",	"BV"],
["BRAZIL",	"BR"],["BRITISH INDIAN OCEAN TERRITORY",	"IO"],["BRUNEI DARUSSALAM",	"BN"],["BULGARIA",	"BG"],["BURKINA FASO",	"BF"],["BURUNDI",	"BI"],["CAMBODIA",	"KH"],["CAMEROON",	"CM"],
["CANADA",	"CA"],["CAPE VERDE",	"CV"],["CAYMAN ISLANDS",	"KY"],["CENTRAL AFRICAN REPUBLIC",	"CF"],["CHAD",	"TD"],["CHILE",	"CL"],["CHINA",	"CN"],["CHRISTMAS ISLAND",	"CX"],
["COCOS (KEELING) ISLANDS",	"CC"],["COLOMBIA",	"CO"],["COMOROS",	"KM"],["CONGO",	"CG"],["CONGO, THE DEMOCRATIC REPUBLIC OF THE",	"CD"],["COOK ISLANDS",	"CK"],["COSTA RICA",	"CR"],
["CÔTE D'IVOIRE",	"CI"],["CROATIA",	"HR"],["CUBA",	"CU"],["CURAÇAO",	"CW"],["CYPRUS",	"CY"],["CZECH REPUBLIC",	"CZ"],["DENMARK",	"DK"],["DJIBOUTI",	"DJ"],["DOMINICA",	"DM"],
["DOMINICAN REPUBLIC",	"DO"],["ECUADOR",	"EC"],["EGYPT",	"EG"],["EL SALVADOR",	"SV"],["EQUATORIAL GUINEA",	"GQ"],["ERITREA",	"ER"],["ESTONIA",	"EE"],["ETHIOPIA",	"ET"],["FALKLAND ISLANDS (MALVINAS)",	"FK"]
,["FAROE ISLANDS",	"FO"],["FIJI",	"FJ"],["FINLAND",	"FI"],["FRANCE",	"FR"],["FRENCH GUIANA",	"GF"],["FRENCH POLYNESIA",	"PF"],["FRENCH SOUTHERN TERRITORIES",	"TF"],["GABON",	"GA"],["GAMBIA",	"GM"],
["GEORGIA",	"GE"],["GERMANY",	"DE"],["GHANA",	"GH"],["GIBRALTAR",	"GI"],["GREECE",	"GR"],["GREENLAND",	"GL"],["GRENADA",	"GD"],["GUADELOUPE",	"GP"],["GUAM",	"GU"],["GUATEMALA",	"GT"],["GUERNSEY",	"GG"],
["GUINEA",	"GN"],["GUINEA-BISSAU",	"GW"],["GUYANA",	"GY"],["HAITI",	"HT"],["HEARD ISLAND AND MCDONALD ISLANDS",	"HM"],["HOLY SEE (VATICAN CITY STATE)",	"VA"],["HONDURAS",	"HN"],["HONG KONG",	"HK"],
["HUNGARY",	"HU"],["ICELAND",	"IS"],["INDIA",	"IN"],["INDONESIA",	"ID"],["IRAN, ISLAMIC REPUBLIC OF",	"IR"],["IRAQ",	"IQ"],["IRELAND",	"IE"],["ISLE OF MAN",	"IM"],["ISRAEL",	"IL"],["ITALY",	"IT"],
["JAMAICA",	"JM"],["JAPAN",	"JP"],["JERSEY",	"JE"],["JORDAN",	"JO"],["KAZAKHSTAN",	"KZ"],["KENYA",	"KE"],["KIRIBATI",	"KI"],["KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF",	"KP"],["KOREA, REPUBLIC OF",	"KR"],
["KUWAIT",	"KW"],["KYRGYZSTAN",	"KG"],["LAO PEOPLE'S DEMOCRATIC REPUBLIC",	"LA"],["LATVIA",	"LV"],["LEBANON",	"LB"],["LESOTHO",	"LS"],["LIBERIA",	"LR"],["LIBYA",	"LY"],["LIECHTENSTEIN",	"LI"],
["LITHUANIA",	"LT"],["LUXEMBOURG",	"LU"],["MACAO",	"MO"],["MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF",	"MK"],["MADAGASCAR",	"MG"],["MALAWI",	"MW"],["MALAYSIA",	"MY"],["MALDIVES",	"MV"],["MALI",	"ML"],
["MALTA",	"MT"],["MARSHALL ISLANDS",	"MH"],["MARTINIQUE",	"MQ"],["MAURITANIA",	"MR"],["MAURITIUS",	"MU"],["MAYOTTE",	"YT"],["MEXICO",	"MX"],["MICRONESIA, FEDERATED STATES OF",	"FM"],
["MOLDOVA, REPUBLIC OF",	"MD"],["MONACO",	"MC"],["MONGOLIA",	"MN"],["MONTENEGRO",	"ME"],["MONTSERRAT",	"MS"],["MOROCCO",	"MA"],["MOZAMBIQUE",	"MZ"],["MYANMAR",	"MM"],["NAMIBIA",	"NA"],
["NAURU",	"NR"],["NEPAL",	"NP"],["NETHERLANDS",	"NL"],["NEW CALEDONIA",	"NC"],["NEW ZEALAND",	"NZ"],["NICARAGUA",	"NI"],["NIGER",	"NE"],["NIGERIA",	"NG"],["NIUE",	"NU"],["NORFOLK ISLAND",	"NF"],
["NORTHERN MARIANA ISLANDS",	"MP"],["NORWAY",	"NO"],["OMAN",	"OM"],["PAKISTAN",	"PK"],["PALAU",	"PW"],["PALESTINE, STATE OF",	"PS"],["PANAMA",	"PA"],["PAPUA NEW GUINEA",	"PG"],["PARAGUAY",	"PY"],
["PERU",	"PE"],["PHILIPPINES",	"PH"],["PITCAIRN",	"PN"],["POLAND",	"PL"],["PORTUGAL",	"PT"],["PUERTO RICO",	"PR"],["QATAR",	"QA"],["RÉUNION",	"RE"],["ROMANIA",	"RO"],["RUSSIAN FEDERATION",	"RU"],
["RWANDA",	"RW"],["SAINT BARTHÉLEMY",	"BL"],["SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA",	"SH"],["SAINT KITTS AND NEVIS",	"KN"],["SAINT LUCIA",	"LC"],["SAINT MARTIN (FRENCH PART)",	"MF"],
["SAINT PIERRE AND MIQUELON",	"PM"],["SAINT VINCENT AND THE GRENADINES",	"VC"],["SAMOA",	"WS"],["SAN MARINO",	"SM"],["SAO TOME AND PRINCIPE",	"ST"],["SAUDI ARABIA",	"SA"],["SENEGAL",	"SN"],
["SERBIA",	"RS"],["SEYCHELLES",	"SC"],["SIERRA LEONE",	"SL"],["SINGAPORE",	"SG"],["SINT MAARTEN (DUTCH PART)",	"SX"],["SLOVAKIA",	"SK"],["SLOVENIA",	"SI"],["SOLOMON ISLANDS",	"SB"],["SOMALIA",	"SO"],
["SOUTH AFRICA",	"ZA"],["SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",	"GS"],["SOUTH SUDAN",	"SS"],["SPAIN",	"ES"],["SRI LANKA",	"LK"],["SUDAN",	"SD"],["SURINAME",	"SR"],["SVALBARD AND JAN MAYEN",	"SJ"],
["SWAZILAND",	"SZ"],["SWEDEN",	"SE"],["SWITZERLAND",	"CH"],["SYRIAN ARAB REPUBLIC",	"SY"],["TAIWAN, PROVINCE OF CHINA",	"TW"],["TAJIKISTAN",	"TJ"],["TANZANIA, UNITED REPUBLIC OF",	"TZ"],["THAILAND",	"TH"],
["TIMOR-LESTE",	"TL"],["TOGO",	"TG"],["TOKELAU",	"TK"],["TONGA",	"TO"],["TRINIDAD AND TOBAGO",	"TT"],["TUNISIA",	"TN"],["TURKEY",	"TR"],["TURKMENISTAN",	"TM"],["TURKS AND CAICOS ISLANDS",	"TC"],
["TUVALU",	"TV"],["UGANDA",	"UG"],["UKRAINE",	"UA"],["UNITED ARAB EMIRATES",	"AE"],["UNITED KINGDOM",	"GB"],["UNITED STATES",	"US"],["UNITED STATES MINOR OUTLYING ISLANDS",	"UM"],["URUGUAY",	"UY"],
["UZBEKISTAN",	"UZ"],["VANUATU",	"VU"],["VENEZUELA, BOLIVARIAN REPUBLIC OF",	"VE"],["VIET NAM",	"VN"],["VIRGIN ISLANDS, BRITISH",	"VG"],["VIRGIN ISLANDS, U.S.",	"VI"],["WALLIS AND FUTUNA",	"WF"],
["WESTERN SAHARA",	"EH"],["YEMEN",	"YE"],["ZAMBIA",	"ZM"],["ZIMBABWE",	"ZW"]];

var industryList = ["Select a Industry","Accounting Services","Advanced Ceramics","Advertising Services","Agricultural Chemicals","Agricultural Machinery & Eq.","Agricultural Products",
"Education","Agricultural Services","Air Conditioning/Refrigeration Eq.","Aircraft/Aircraft Parts","Airport/Ground Support Eq.","Apparel","Architectural/Constr./Engineering SVC","Artwork",
"Audio/Visual Eq.","Automobile/Light Truck/Vans","Automotive Parts/Services Eq.","Aviation Services","Biotechnology","Books/Periodicals","Building Products","Business Eq. (Non-Computer)",
"Chemical Production Machinery","Coal","Commercial Fishing Eq.","Commercial Vessel/Eq","Composite Materials","Computer Services","Computer Software","Computers/Peripherals",
"Construction Eq.","Consumer Electronics","Cosmetics/Toiletries","Defense Industry Eq.","Dental Eq.","Drugs/Pharmaceuticals","Economy","Education/Training Services",
"Electrical Power Systems","Electronic Commerce","Electronic Components","Electronics Industry Prod/Test Eq.","Employment Services","Environmental Technologies","Films/Videos",
"Financial Services","Food Processing/Packaging Eq.","Foods - Processed","Footwear","Forestry/Woodworking Machinery","Franchising","Furniture","Genera","Consumer Goods",
"General Industrial Eq./Supplies","General Science & Technology","General Services","Giftware","Health Care Services","Hotel/Restaurant Eq.","Household Consumer Goods",
"Industrial Chemicals","Information Services","Insurance Services","Investment Services","Iron/Steel","Jewelry","Laboratory Scientific Instruments","Lawn/Garden Eq.","Leasing",
"Services","Leather/Fur Products","Machine Tools/Metalworking Eq.","Management Consulting Services","Marine Fisheries Products (Seafood)","Materials Handling Machinery",
"Medical Eq.","Minin","Industry Eq.","Musical Instruments","Non-Ferrous Metals","Oil/Gas Field Machinery","Oil/Gas/Mineral Prod/Explor Serv.","Operations/Maintenance Services",
"Packaging Eq.","Paper/Paperboard","Pe","Foods/Supp.","Photographic Eq.","Plastics Materials/Resins","Plastics Production Machinery","Pleasure Boats/Accessories",
"Pollution Control Eq.","Port/Shipbuilding Eq.","Printing/Graphic Arts Eq.","Process Controls - Industrial","Pulp/Paper Machinery","Pumps/Valves/Compressors","Railroad Eq.",
"Regulations","Renewable Energy Eq.","Robotics","Security/Safety Eq.","Sportin","Goods/Recreational Eq.","Telecommunications Eq.","Telecommunications Services","Textile Fabrics",
"Textile Machinery/Eq.","Textile Products - Made-Up","Tools - Hand/Power","Toys/Games","Trad","Promotion Services","Transportation Serv. (other than Aviation)",
"Travel and Tourism Industrie","Trucks/Trailers/Buses","Used/Reconditioned Eq.","Veterinary Medicine Eq./Supplies","Water Resources Eq./Services","Yarn"];

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