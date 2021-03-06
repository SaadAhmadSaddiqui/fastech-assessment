const countries = [
  {
    code: 'AF',
    name: 'Afghanistan',
    nationality: 'Afghan'
  },
  {
    code: 'AX',
    name: 'Åland Islands',
    nationality: 'Åland Island'
  },
  {
    code: 'AL',
    name: 'Albania',
    nationality: 'Albanian'
  },
  {
    code: 'DZ',
    name: 'Algeria',
    nationality: 'Algerian'
  },
  {
    code: 'AS',
    name: 'American Samoa',
    nationality: 'American Samoan'
  },
  {
    code: 'AD',
    name: 'Andorra',
    nationality: 'Andorran'
  },
  {
    code: 'AO',
    name: 'Angola',
    nationality: 'Angolan'
  },
  {
    code: 'AI',
    name: 'Anguilla',
    nationality: 'Anguillan'
  },
  {
    code: 'AQ',
    name: 'Antarctica',
    nationality: 'Antarctic'
  },
  {
    code: 'AG',
    name: 'Antigua and Barbuda',
    nationality: 'Antiguan or Barbudan'
  },
  {
    code: 'AR',
    name: 'Argentina',
    nationality: 'Argentine'
  },
  {
    code: 'AM',
    name: 'Armenia',
    nationality: 'Armenian'
  },
  {
    code: 'AW',
    name: 'Aruba',
    nationality: 'Aruban'
  },
  {
    code: 'AU',
    name: 'Australia',
    nationality: 'Australian'
  },
  {
    code: 'AT',
    name: 'Austria',
    nationality: 'Austrian'
  },
  {
    code: 'AZ',
    name: 'Azerbaijan',
    nationality: 'Azerbaijani, Azeri'
  },
  {
    code: 'BS',
    name: 'Bahamas',
    nationality: 'Bahamian'
  },
  {
    code: 'BH',
    name: 'Bahrain',
    nationality: 'Bahraini'
  },
  {
    code: 'BD',
    name: 'Bangladesh',
    nationality: 'Bangladeshi'
  },
  {
    code: 'BB',
    name: 'Barbados',
    nationality: 'Barbadian'
  },
  {
    code: 'BY',
    name: 'Belarus',
    nationality: 'Belarusian'
  },
  {
    code: 'BE',
    name: 'Belgium',
    nationality: 'Belgian'
  },
  {
    code: 'BZ',
    name: 'Belize',
    nationality: 'Belizean'
  },
  {
    code: 'BJ',
    name: 'Benin',
    nationality: 'Beninese, Beninois'
  },
  {
    code: 'BM',
    name: 'Bermuda',
    nationality: 'Bermudian, Bermudan'
  },
  {
    code: 'BT',
    name: 'Bhutan',
    nationality: 'Bhutanese'
  },
  {
    code: 'BO',
    name: 'Bolivia (Plurinational State of)',
    nationality: 'Bolivian'
  },
  {
    code: 'BQ',
    name: 'Bonaire, Sint Eustatius and Saba',
    nationality: 'Bonaire'
  },
  {
    code: 'BA',
    name: 'Bosnia and Herzegovina',
    nationality: 'Bosnian or Herzegovinian'
  },
  {
    code: 'BW',
    name: 'Botswana',
    nationality: 'Motswana, Botswanan'
  },
  {
    code: 'BV',
    name: 'Bouvet Island',
    nationality: 'Bouvet Island'
  },
  {
    code: 'BR',
    name: 'Brazil',
    nationality: 'Brazilian'
  },
  {
    code: 'IO',
    name: 'British Indian Ocean Territory',
    nationality: 'BIOT'
  },
  {
    code: 'BN',
    name: 'Brunei Darussalam',
    nationality: 'Bruneian'
  },
  {
    code: 'BG',
    name: 'Bulgaria',
    nationality: 'Bulgarian'
  },
  {
    code: 'BF',
    name: 'Burkina Faso',
    nationality: 'Burkinabé'
  },
  {
    code: 'BI',
    name: 'Burundi',
    nationality: 'Burundian'
  },
  {
    code: 'CV',
    name: 'Cabo Verde',
    nationality: 'Cabo Verdean'
  },
  {
    code: 'KH',
    name: 'Cambodia',
    nationality: 'Cambodian'
  },
  {
    code: 'CM',
    name: 'Cameroon',
    nationality: 'Cameroonian'
  },
  {
    code: 'CA',
    name: 'Canada',
    nationality: 'Canadian'
  },
  {
    code: 'KY',
    name: 'Cayman Islands',
    nationality: 'Caymanian'
  },
  {
    code: 'CF',
    name: 'Central African Republic',
    nationality: 'Central African'
  },
  {
    code: 'TD',
    name: 'Chad',
    nationality: 'Chadian'
  },
  {
    code: 'CL',
    name: 'Chile',
    nationality: 'Chilean'
  },
  {
    code: 'CN',
    name: 'China',
    nationality: 'Chinese'
  },
  {
    code: 'CX',
    name: 'Christmas Island',
    nationality: 'Christmas Island'
  },
  {
    code: 'CC',
    name: 'Cocos (Keeling) Islands',
    nationality: 'Cocos Island'
  },
  {
    code: 'CO',
    name: 'Colombia',
    nationality: 'Colombian'
  },
  {
    code: 'KM',
    name: 'Comoros',
    nationality: 'Comoran, Comorian'
  },
  {
    code: 'CG',
    name: 'Congo (Republic of the)',
    nationality: 'Congolese'
  },
  {
    code: 'CD',
    name: 'Congo (Democratic Republic of the)',
    nationality: 'Congolese'
  },
  {
    code: 'CK',
    name: 'Cook Islands',
    nationality: 'Cook Island'
  },
  {
    code: 'CR',
    name: 'Costa Rica',
    nationality: 'Costa Rican'
  },
  {
    code: 'CI',
    name: "Côte d'Ivoire",
    nationality: 'Ivorian'
  },
  {
    code: 'HR',
    name: 'Croatia',
    nationality: 'Croatian'
  },
  {
    code: 'CU',
    name: 'Cuba',
    nationality: 'Cuban'
  },
  {
    code: 'CW',
    name: 'Curaçao',
    nationality: 'Curaçaoan'
  },
  {
    code: 'CY',
    name: 'Cyprus',
    nationality: 'Cypriot'
  },
  {
    code: 'CZ',
    name: 'Czech Republic',
    nationality: 'Czech'
  },
  {
    code: 'DK',
    name: 'Denmark',
    nationality: 'Danish'
  },
  {
    code: 'DJ',
    name: 'Djibouti',
    nationality: 'Djiboutian'
  },
  {
    code: 'DM',
    name: 'Dominica',
    nationality: 'Dominican'
  },
  {
    code: 'DO',
    name: 'Dominican Republic',
    nationality: 'Dominican'
  },
  {
    code: 'EC',
    name: 'Ecuador',
    nationality: 'Ecuadorian'
  },
  {
    code: 'EG',
    name: 'Egypt',
    nationality: 'Egyptian'
  },
  {
    code: 'SV',
    name: 'El Salvador',
    nationality: 'Salvadoran'
  },
  {
    code: 'GQ',
    name: 'Equatorial Guinea',
    nationality: 'Equatorial Guinean, Equatoguinean'
  },
  {
    code: 'ER',
    name: 'Eritrea',
    nationality: 'Eritrean'
  },
  {
    code: 'EE',
    name: 'Estonia',
    nationality: 'Estonian'
  },
  {
    code: 'ET',
    name: 'Ethiopia',
    nationality: 'Ethiopian'
  },
  {
    code: 'FK',
    name: 'Falkland Islands (Malvinas)',
    nationality: 'Falkland Island'
  },
  {
    code: 'FO',
    name: 'Faroe Islands',
    nationality: 'Faroese'
  },
  {
    code: 'FJ',
    name: 'Fiji',
    nationality: 'Fijian'
  },
  {
    code: 'FI',
    name: 'Finland',
    nationality: 'Finnish'
  },
  {
    code: 'FR',
    name: 'France',
    nationality: 'French'
  },
  {
    code: 'GF',
    name: 'French Guiana',
    nationality: 'French Guianese'
  },
  {
    code: 'PF',
    name: 'French Polynesia',
    nationality: 'French Polynesian'
  },
  {
    code: 'TF',
    name: 'French Southern Territories',
    nationality: 'French Southern Territories'
  },
  {
    code: 'GA',
    name: 'Gabon',
    nationality: 'Gabonese'
  },
  {
    code: 'GM',
    name: 'Gambia',
    nationality: 'Gambian'
  },
  {
    code: 'GE',
    name: 'Georgia',
    nationality: 'Georgian'
  },
  {
    code: 'DE',
    name: 'Germany',
    nationality: 'German'
  },
  {
    code: 'GH',
    name: 'Ghana',
    nationality: 'Ghanaian'
  },
  {
    code: 'GI',
    name: 'Gibraltar',
    nationality: 'Gibraltar'
  },
  {
    code: 'GR',
    name: 'Greece',
    nationality: 'Greek, Hellenic'
  },
  {
    code: 'GL',
    name: 'Greenland',
    nationality: 'Greenlandic'
  },
  {
    code: 'GD',
    name: 'Grenada',
    nationality: 'Grenadian'
  },
  {
    code: 'GP',
    name: 'Guadeloupe',
    nationality: 'Guadeloupe'
  },
  {
    code: 'GU',
    name: 'Guam',
    nationality: 'Guamanian, Guambat'
  },
  {
    code: 'GT',
    name: 'Guatemala',
    nationality: 'Guatemalan'
  },
  {
    code: 'GG',
    name: 'Guernsey',
    nationality: 'Channel Island'
  },
  {
    code: 'GN',
    name: 'Guinea',
    nationality: 'Guinean'
  },
  {
    code: 'GW',
    name: 'Guinea-Bissau',
    nationality: 'Bissau-Guinean'
  },
  {
    code: 'GY',
    name: 'Guyana',
    nationality: 'Guyanese'
  },
  {
    code: 'HT',
    name: 'Haiti',
    nationality: 'Haitian'
  },
  {
    code: 'HM',
    name: 'Heard Island and McDonald Islands',
    nationality: 'Heard Island or McDonald Islands'
  },
  {
    code: 'VA',
    name: 'Vatican City State',
    nationality: 'Vatican'
  },
  {
    code: 'HN',
    name: 'Honduras',
    nationality: 'Honduran'
  },
  {
    code: 'HK',
    name: 'Hong Kong',
    nationality: 'Hong Kong, Hong Kongese'
  },
  {
    code: 'HU',
    name: 'Hungary',
    nationality: 'Hungarian, Magyar'
  },
  {
    code: 'IS',
    name: 'Iceland',
    nationality: 'Icelandic'
  },
  {
    code: 'IN',
    name: 'India',
    nationality: 'Indian'
  },
  {
    code: 'ID',
    name: 'Indonesia',
    nationality: 'Indonesian'
  },
  {
    code: 'IR',
    name: 'Iran',
    nationality: 'Iranian, Persian'
  },
  {
    code: 'IQ',
    name: 'Iraq',
    nationality: 'Iraqi'
  },
  {
    code: 'IE',
    name: 'Ireland',
    nationality: 'Irish'
  },
  {
    code: 'IM',
    name: 'Isle of Man',
    nationality: 'Manx'
  },
  {
    code: 'IL',
    name: 'Israel',
    nationality: 'Israeli'
  },
  {
    code: 'IT',
    name: 'Italy',
    nationality: 'Italian'
  },
  {
    code: 'JM',
    name: 'Jamaica',
    nationality: 'Jamaican'
  },
  {
    code: 'JP',
    name: 'Japan',
    nationality: 'Japanese'
  },
  {
    code: 'JE',
    name: 'Jersey',
    nationality: 'Channel Island'
  },
  {
    code: 'JO',
    name: 'Jordan',
    nationality: 'Jordanian'
  },
  {
    code: 'KZ',
    name: 'Kazakhstan',
    nationality: 'Kazakhstani, Kazakh'
  },
  {
    code: 'KE',
    name: 'Kenya',
    nationality: 'Kenyan'
  },
  {
    code: 'KI',
    name: 'Kiribati',
    nationality: 'I-Kiribati'
  },
  {
    code: 'KP',
    name: "Korea (Democratic People's Republic of)",
    nationality: 'North Korean'
  },
  {
    code: 'KR',
    name: 'Korea (Republic of)',
    nationality: 'South Korean'
  },
  {
    code: 'KW',
    name: 'Kuwait',
    nationality: 'Kuwaiti'
  },
  {
    code: 'KG',
    name: 'Kyrgyzstan',
    nationality: 'Kyrgyzstani, Kyrgyz, Kirgiz, Kirghiz'
  },
  {
    code: 'LA',
    name: "Lao People's Democratic Republic",
    nationality: 'Lao, Laotian'
  },
  {
    code: 'LV',
    name: 'Latvia',
    nationality: 'Latvian'
  },
  {
    code: 'LB',
    name: 'Lebanon',
    nationality: 'Lebanese'
  },
  {
    code: 'LS',
    name: 'Lesotho',
    nationality: 'Basotho'
  },
  {
    code: 'LR',
    name: 'Liberia',
    nationality: 'Liberian'
  },
  {
    code: 'LY',
    name: 'Libya',
    nationality: 'Libyan'
  },
  {
    code: 'LI',
    name: 'Liechtenstein',
    nationality: 'Liechtenstein'
  },
  {
    code: 'LT',
    name: 'Lithuania',
    nationality: 'Lithuanian'
  },
  {
    code: 'LU',
    name: 'Luxembourg',
    nationality: 'Luxembourg, Luxembourgish'
  },
  {
    code: 'MO',
    name: 'Macao',
    nationality: 'Macanese, Chinese'
  },
  {
    code: 'MK',
    name: 'Macedonia (the former Yugoslav Republic of)',
    nationality: 'Macedonian'
  },
  {
    code: 'MG',
    name: 'Madagascar',
    nationality: 'Malagasy'
  },
  {
    code: 'MW',
    name: 'Malawi',
    nationality: 'Malawian'
  },
  {
    code: 'MY',
    name: 'Malaysia',
    nationality: 'Malaysian'
  },
  {
    code: 'MV',
    name: 'Maldives',
    nationality: 'Maldivian'
  },
  {
    code: 'ML',
    name: 'Mali',
    nationality: 'Malian, Malinese'
  },
  {
    code: 'MT',
    name: 'Malta',
    nationality: 'Maltese'
  },
  {
    code: 'MH',
    name: 'Marshall Islands',
    nationality: 'Marshallese'
  },
  {
    code: 'MQ',
    name: 'Martinique',
    nationality: 'Martiniquais, Martinican'
  },
  {
    code: 'MR',
    name: 'Mauritania',
    nationality: 'Mauritanian'
  },
  {
    code: 'MU',
    name: 'Mauritius',
    nationality: 'Mauritian'
  },
  {
    code: 'YT',
    name: 'Mayotte',
    nationality: 'Mahoran'
  },
  {
    code: 'MX',
    name: 'Mexico',
    nationality: 'Mexican'
  },
  {
    code: 'FM',
    name: 'Micronesia (Federated States of)',
    nationality: 'Micronesian'
  },
  {
    code: 'MD',
    name: 'Moldova (Republic of)',
    nationality: 'Moldovan'
  },
  {
    code: 'MC',
    name: 'Monaco',
    nationality: 'Monégasque, Monacan'
  },
  {
    code: 'MN',
    name: 'Mongolia',
    nationality: 'Mongolian'
  },
  {
    code: 'ME',
    name: 'Montenegro',
    nationality: 'Montenegrin'
  },
  {
    code: 'MS',
    name: 'Montserrat',
    nationality: 'Montserratian'
  },
  {
    code: 'MA',
    name: 'Morocco',
    nationality: 'Moroccan'
  },
  {
    code: 'MZ',
    name: 'Mozambique',
    nationality: 'Mozambican'
  },
  {
    code: 'MM',
    name: 'Myanmar',
    nationality: 'Burmese'
  },
  {
    code: 'NA',
    name: 'Namibia',
    nationality: 'Namibian'
  },
  {
    code: 'NR',
    name: 'Nauru',
    nationality: 'Nauruan'
  },
  {
    code: 'NP',
    name: 'Nepal',
    nationality: 'Nepali, Nepalese'
  },
  {
    code: 'NL',
    name: 'Netherlands',
    nationality: 'Dutch, Netherlandic'
  },
  {
    code: 'NC',
    name: 'New Caledonia',
    nationality: 'New Caledonian'
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    nationality: 'New Zealand, NZ'
  },
  {
    code: 'NI',
    name: 'Nicaragua',
    nationality: 'Nicaraguan'
  },
  {
    code: 'NE',
    name: 'Niger',
    nationality: 'Nigerien'
  },
  {
    code: 'NG',
    name: 'Nigeria',
    nationality: 'Nigerian'
  },
  {
    code: 'NU',
    name: 'Niue',
    nationality: 'Niuean'
  },
  {
    code: 'NF',
    name: 'Norfolk Island',
    nationality: 'Norfolk Island'
  },
  {
    code: 'MP',
    name: 'Northern Mariana Islands',
    nationality: 'Northern Marianan'
  },
  {
    code: 'NO',
    name: 'Norway',
    nationality: 'Norwegian'
  },
  {
    code: 'OM',
    name: 'Oman',
    nationality: 'Omani'
  },
  {
    code: 'PK',
    name: 'Pakistan',
    nationality: 'Pakistani'
  },
  {
    code: 'PW',
    name: 'Palau',
    nationality: 'Palauan'
  },
  {
    code: 'PS',
    name: 'Palestine, State of',
    nationality: 'Palestinian'
  },
  {
    code: 'PA',
    name: 'Panama',
    nationality: 'Panamanian'
  },
  {
    code: 'PG',
    name: 'Papua New Guinea',
    nationality: 'Papua New Guinean, Papuan'
  },
  {
    code: 'PY',
    name: 'Paraguay',
    nationality: 'Paraguayan'
  },
  {
    code: 'PE',
    name: 'Peru',
    nationality: 'Peruvian'
  },
  {
    code: 'PH',
    name: 'Philippines',
    nationality: 'Philippine, Filipino'
  },
  {
    code: 'PN',
    name: 'Pitcairn',
    nationality: 'Pitcairn Island'
  },
  {
    code: 'PL',
    name: 'Poland',
    nationality: 'Polish'
  },
  {
    code: 'PT',
    name: 'Portugal',
    nationality: 'Portuguese'
  },
  {
    code: 'PR',
    name: 'Puerto Rico',
    nationality: 'Puerto Rican'
  },
  {
    code: 'QA',
    name: 'Qatar',
    nationality: 'Qatari'
  },
  {
    code: 'RE',
    name: 'Réunion',
    nationality: 'Réunionese, Réunionnais'
  },
  {
    code: 'RO',
    name: 'Romania',
    nationality: 'Romanian'
  },
  {
    code: 'RU',
    name: 'Russian Federation',
    nationality: 'Russian'
  },
  {
    code: 'RW',
    name: 'Rwanda',
    nationality: 'Rwandan'
  },
  {
    code: 'BL',
    name: 'Saint Barthélemy',
    nationality: 'Barthélemois'
  },
  {
    code: 'SH',
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    nationality: 'Saint Helenian'
  },
  {
    code: 'KN',
    name: 'Saint Kitts and Nevis',
    nationality: 'Kittitian or Nevisian'
  },
  {
    code: 'LC',
    name: 'Saint Lucia',
    nationality: 'Saint Lucian'
  },
  {
    code: 'MF',
    name: 'Saint Martin (French part)',
    nationality: 'Saint-Martinoise'
  },
  {
    code: 'PM',
    name: 'Saint Pierre and Miquelon',
    nationality: 'Saint-Pierrais or Miquelonnais'
  },
  {
    code: 'VC',
    name: 'Saint Vincent and the Grenadines',
    nationality: 'Saint Vincentian, Vincentian'
  },
  {
    code: 'WS',
    name: 'Samoa',
    nationality: 'Samoan'
  },
  {
    code: 'SM',
    name: 'San Marino',
    nationality: 'Sammarinese'
  },
  {
    code: 'ST',
    name: 'Sao Tome and Principe',
    nationality: 'São Toméan'
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    nationality: 'Saudi, Saudi Arabian'
  },
  {
    code: 'SN',
    name: 'Senegal',
    nationality: 'Senegalese'
  },
  {
    code: 'RS',
    name: 'Serbia',
    nationality: 'Serbian'
  },
  {
    code: 'SC',
    name: 'Seychelles',
    nationality: 'Seychellois'
  },
  {
    code: 'SL',
    name: 'Sierra Leone',
    nationality: 'Sierra Leonean'
  },
  {
    code: 'SG',
    name: 'Singapore',
    nationality: 'Singaporean'
  },
  {
    code: 'SX',
    name: 'Sint Maarten (Dutch part)',
    nationality: 'Sint Maarten'
  },
  {
    code: 'SK',
    name: 'Slovakia',
    nationality: 'Slovak'
  },
  {
    code: 'SI',
    name: 'Slovenia',
    nationality: 'Slovenian, Slovene'
  },
  {
    code: 'SB',
    name: 'Solomon Islands',
    nationality: 'Solomon Island'
  },
  {
    code: 'SO',
    name: 'Somalia',
    nationality: 'Somali, Somalian'
  },
  {
    code: 'ZA',
    name: 'South Africa',
    nationality: 'South African'
  },
  {
    code: 'GS',
    name: 'South Georgia and the South Sandwich Islands',
    nationality: 'South Georgia or South Sandwich Islands'
  },
  {
    code: 'SS',
    name: 'South Sudan',
    nationality: 'South Sudanese'
  },
  {
    code: 'ES',
    name: 'Spain',
    nationality: 'Spanish'
  },
  {
    code: 'LK',
    name: 'Sri Lanka',
    nationality: 'Sri Lankan'
  },
  {
    code: 'SD',
    name: 'Sudan',
    nationality: 'Sudanese'
  },
  {
    code: 'SR',
    name: 'Suriname',
    nationality: 'Surinamese'
  },
  {
    code: 'SJ',
    name: 'Svalbard and Jan Mayen',
    nationality: 'Svalbard'
  },
  {
    code: 'SZ',
    name: 'Swaziland',
    nationality: 'Swazi'
  },
  {
    code: 'SE',
    name: 'Sweden',
    nationality: 'Swedish'
  },
  {
    code: 'CH',
    name: 'Switzerland',
    nationality: 'Swiss'
  },
  {
    code: 'SY',
    name: 'Syrian Arab Republic',
    nationality: 'Syrian'
  },
  {
    code: 'TW',
    name: 'Taiwan, Province of China',
    nationality: 'Chinese, Taiwanese'
  },
  {
    code: 'TJ',
    name: 'Tajikistan',
    nationality: 'Tajikistani'
  },
  {
    code: 'TZ',
    name: 'Tanzania, United Republic of',
    nationality: 'Tanzanian'
  },
  {
    code: 'TH',
    name: 'Thailand',
    nationality: 'Thai'
  },
  {
    code: 'TL',
    name: 'Timor-Leste',
    nationality: 'Timorese'
  },
  {
    code: 'TG',
    name: 'Togo',
    nationality: 'Togolese'
  },
  {
    code: 'TK',
    name: 'Tokelau',
    nationality: 'Tokelauan'
  },
  {
    code: 'TO',
    name: 'Tonga',
    nationality: 'Tongan'
  },
  {
    code: 'TT',
    name: 'Trinidad and Tobago',
    nationality: 'Trinidadian or Tobagonian'
  },
  {
    code: 'TN',
    name: 'Tunisia',
    nationality: 'Tunisian'
  },
  {
    code: 'TR',
    name: 'Turkey',
    nationality: 'Turkish'
  },
  {
    code: 'TM',
    name: 'Turkmenistan',
    nationality: 'Turkmen'
  },
  {
    code: 'TC',
    name: 'Turks and Caicos Islands',
    nationality: 'Turks and Caicos Island'
  },
  {
    code: 'TV',
    name: 'Tuvalu',
    nationality: 'Tuvaluan'
  },
  {
    code: 'UG',
    name: 'Uganda',
    nationality: 'Ugandan'
  },
  {
    code: 'UA',
    name: 'Ukraine',
    nationality: 'Ukrainian'
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    nationality: 'Emirati, Emirian, Emiri'
  },
  {
    code: 'GB',
    name: 'United Kingdom of Great Britain and Northern Ireland',
    nationality: 'British, UK'
  },
  {
    code: 'UM',
    name: 'United States Minor Outlying Islands',
    nationality: 'American'
  },
  {
    code: 'US',
    name: 'United States of America',
    nationality: 'American'
  },
  {
    code: 'UY',
    name: 'Uruguay',
    nationality: 'Uruguayan'
  },
  {
    code: 'UZ',
    name: 'Uzbekistan',
    nationality: 'Uzbekistani, Uzbek'
  },
  {
    code: 'VU',
    name: 'Vanuatu',
    nationality: 'Ni-Vanuatu, Vanuatuan'
  },
  {
    code: 'VE',
    name: 'Venezuela (Bolivarian Republic of)',
    nationality: 'Venezuelan'
  },
  {
    code: 'VN',
    name: 'Vietnam',
    nationality: 'Vietnamese'
  },
  {
    code: 'VG',
    name: 'Virgin Islands (British)',
    nationality: 'British Virgin Island'
  },
  {
    code: 'VI',
    name: 'Virgin Islands (U.S.)',
    nationality: 'U.S. Virgin Island'
  },
  {
    code: 'WF',
    name: 'Wallis and Futuna',
    nationality: 'Wallis and Futuna, Wallisian or Futunan'
  },
  {
    code: 'EH',
    name: 'Western Sahara',
    nationality: 'Sahrawi, Sahrawian, Sahraouian'
  },
  {
    code: 'YE',
    name: 'Yemen',
    nationality: 'Yemeni'
  },
  {
    code: 'ZM',
    name: 'Zambia',
    nationality: 'Zambian'
  },
  {
    code: 'ZW',
    name: 'Zimbabwe',
    nationality: 'Zimbabwean'
  }
]

export default countries
