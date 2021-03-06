import { observable } from 'mobx'

const countryList = [
  { label: 'Afghanistan' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antartica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia' },
  { label: 'Bosnia and Herzegowina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
  { label: 'Bulgaria' },
  { label: 'Burkina Faso' },
  { label: 'Burundi' },
  { label: 'Cambodia' },
  { label: 'Cameroon' },
  { label: 'Canada' },
  { label: 'Cape Verde' },
  { label: 'Cayman Islands' },
  { label: 'Central African Republic' },
  { label: 'Chad' },
  { label: 'Chile' },
  { label: 'China' },
  { label: 'Christmas Island' },
  { label: 'Cocos Islands' },
  { label: 'Colombia' },
  { label: 'Comoros' },
  { label: 'Congo, the Democratic Republic of the' },
  { label: 'Cook Islands' },
  { label: 'Costa Rica' },
  { label: 'Cote d\'Ivoire' },
  { label: 'Croatia (Hrvatska)' },
  { label: 'Cuba' },
  { label: 'Cyprus' },
  { label: 'Czech Republic' },
  { label: 'Denmark' },
  { label: 'Djibouti' },
  { label: 'Dominica' },
  { label: 'Dominican Republic' },
  { label: 'East Timor' },
  { label: 'Ecuador' },
  { label: 'Egypt' },
  { label: 'El Salvador' },
  { label: 'Equatorial Guinea' },
  { label: 'Eritrea' },
  { label: 'Estonia' },
  { label: 'Ethiopia' },
  { label: 'Falkland Islands (Malvinas)' },
  { label: 'Faroe Islands' },
  { label: 'Fiji' },
  { label: 'Finland' },
  { label: 'France' },
  { label: 'France, Metropolitan' },
  { label: 'French Guiana' },
  { label: 'French Polynesia' },
  { label: 'French Southern Territories' },
  { label: 'Gabon' },
  { label: 'Gambia' },
  { label: 'Georgia' },
  { label: 'Germany' },
  { label: 'Ghana' },
  { label: 'Gibraltar' },
  { label: 'Greece' },
  { label: 'Greenland' },
  { label: 'Grenada' },
  { label: 'Guadeloupe' },
  { label: 'Guam' },
  { label: 'Guatemala' },
  { label: 'Guinea' },
  { label: 'Guinea-Bissau' },
  { label: 'Guyana' },
  { label: 'Haiti' },
  { label: 'Heard and Mc Donald Islands' },
  { label: 'Holy See (Vatican City State)' },
  { label: 'Honduras' },
  { label: 'Hong Kong' },
  { label: 'Hungary' },
  { label: 'Iceland' },
  { label: 'India' },
  { label: 'Indonesia' },
  { label: 'Iran (Islamic Republic of)' },
  { label: 'Iraq' },
  { label: 'Ireland' },
  { label: 'Israel' },
  { label: 'Italy' },
  { label: 'Jamaica' },
  { label: 'Japan' },
  { label: 'Jordan' },
  { label: 'Kazakhstan' },
  { label: 'Kenya' },
  { label: 'Kiribati' },
  { label: 'Korea, Democratic People\'s Republic of' },
  { label: 'Korea, Republic of' },
  { label: 'Korea' },
  { label: 'Kuwait' },
  { label: 'Kyrgyzstan' },
  { label: 'Lao People\'s Democratic Republic' },
  { label: 'Latvia' },
  { label: 'Lebanon' },
  { label: 'Lesotho' },
  { label: 'Liberia' },
  { label: 'Libyan Arab Jamahiriya' },
  { label: 'Liechtenstein' },
  { label: 'Lithuania' },
  { label: 'Luxembourg' },
  { label: 'Macau' },
  { label: 'Macedonia, The Former Yugoslav Republic of' },
  { label: 'Madagascar' },
  { label: 'Malawi' },
  { label: 'Malaysia' },
  { label: 'Maldives' },
  { label: 'Mali' },
  { label: 'Malta' },
  { label: 'Marshall Islands' },
  { label: 'Martinique' },
  { label: 'Mauritania' },
  { label: 'Mauritius' },
  { label: 'Mayotte' },
  { label: 'Mexico' },
  { label: 'Micronesia, Federated States of' },
  { label: 'Moldova, Republic of' },
  { label: 'Monaco' },
  { label: 'Mongolia' },
  { label: 'Montserrat' },
  { label: 'Morocco' },
  { label: 'Mozambique' },
  { label: 'Myanmar' },
  { label: 'Namibia' },
  { label: 'Nauru' },
  { label: 'Nepal' },
  { label: 'Netherlands' },
  { label: 'Netherlands Antilles' },
  { label: 'New Caledonia' },
  { label: 'New Zealand' },
  { label: 'Nicaragua' },
  { label: 'Niger' },
  { label: 'Nigeria' },
  { label: 'Niue' },
  { label: 'Norfolk Island' },
  { label: 'Northern Mariana Islands' },
  { label: 'Norway' },
  { label: 'Oman' },
  { label: 'Pakistan' },
  { label: 'Palau' },
  { label: 'Panama' },
  { label: 'Papua New Guinea' },
  { label: 'Paraguay' },
  { label: 'Peru' },
  { label: 'Philippines' },
  { label: 'Pitcairn' },
  { label: 'Poland' },
  { label: 'Portugal' },
  { label: 'Puerto Rico' },
  { label: 'Qatar' },
  { label: 'Reunion' },
  { label: 'Romania' },
  { label: 'Russian Federation' },
  { label: 'Rwanda' },
  { label: 'Saint Kitts and Nevis' },
  { label: 'Saint LUCIA' },
  { label: 'Saint Vincent and the Grenadines' },
  { label: 'Samoa' },
  { label: 'San Marino' },
  { label: 'Sao Tome and Principe' },
  { label: 'Saudi Arabia' },
  { label: 'Senegal' },
  { label: 'Seychelles' },
  { label: 'Sierra Leone' },
  { label: 'Singapore' },
  { label: 'Slovakia (Slovak Republic)' },
  { label: 'Slovenia' },
  { label: 'Solomon Islands' },
  { label: 'Somalia' },
  { label: 'South Africa' },
  { label: 'South Georgia and the South Sandwich Islands' },
  { label: 'Spain' },
  { label: 'Sri Lanka' },
  { label: 'St. Helena' },
  { label: 'St. Pierre and Miquelon' },
  { label: 'Sudan' },
  { label: 'Suriname' },
  { label: 'Svalbard and Jan Mayen Islands' },
  { label: 'Swaziland' },
  { label: 'Sweden' },
  { label: 'Switzerland' },
  { label: 'Syrian Arab Republic' },
  { label: 'Taiwan, Province of China' },
  { label: 'Tajikistan' },
  { label: 'Tanzania, United Republic of' },
  { label: 'Thailand' },
  { label: 'Togo' },
  { label: 'Tokelau' },
  { label: 'Tonga' },
  { label: 'Trinidad and Tobago' },
  { label: 'Tunisia' },
  { label: 'Turkey' },
  { label: 'Turkmenistan' },
  { label: 'Turks and Caicos Islands' },
  { label: 'Tuvalu' },
  { label: 'Uganda' },
  { label: 'Ukraine' },
  { label: 'United Arab Emirates' },
  { label: 'United Kingdom' },
  { label: 'United States' },
  { label: 'United States Minor Outlying Islands' },
  { label: 'Uruguay' },
  { label: 'Uzbekistan' },
  { label: 'Vanuatu' },
  { label: 'Venezuela' },
  { label: 'Viet Nam' },
  { label: 'Virgin Islands (British)' },
  { label: 'Virgin Islands (U.S.)' },
  { label: 'Wallis and Futuna Islands' },
  { label: 'Western Sahara' },
  { label: 'Yemen' },
  { label: 'Yugoslavia' },
  { label: 'Zambia' },
  { label: 'Zimbabwe' }
]

const professionList = [
  { label: 'Analyst' },
  { label: 'Fund Manager' },
  { label: 'Others' },
  { label: 'Press/Media' },
  { label: 'Retail Investor' }
]

const jobList = [
  { label: 'CEO/COO' },
  { label: 'CFO/CTO/CMO' },
  { label: 'Director/VP' },
  { label: 'Entrepreneur' },
  { label: 'Executive' },
  { label: 'Manager' },
  { label: 'Non-Executive' },
  { label: 'Others' },
  { label: 'Senior Management' }
]

const industryList = [
  { label: 'Arts/Entertainment' },
  { label: 'Airlines/Hospitality/Tourism/Travel' },
  { label: 'Audit/Accountancy' },
  { label: 'Banking/Finance' },
  { label: 'Business Services/Consulting' },
  { label: 'Building/Construction' },
  { label: 'Day Trader' },
  { label: 'Education/Training' },
  { label: 'Engineering/Architecture' },
  { label: 'Government/Uniform/Nonprofit' },
  { label: 'Industrial/Manufacturing' },
  { label: 'Information Technology' },
  { label: 'Insurance' },
  { label: 'Internet/E-Commerce' },
  { label: 'Health Care' },
  { label: 'Legal' },
  { label: 'Life Sciences/Medical' },
  { label: 'Marketing/Sales' },
  { label: 'Others' },
  { label: 'Real Estate' },
  { label: 'Research/Development' },
  { label: 'Retailer/Distributor/Wholesaler(computer related)' },
  { label: 'Retailer/Distributor/Wholesaler' },
  { label: 'Retired' },
  { label: 'Self Employed' },
  { label: 'Student/NS' },
  { label: 'Telecommunication' },
  { label: 'Transportation/Utilities' },
  { label: 'Unemployed' }
]

const state = observable({ 
  countryData: countryList,
  professionData: professionList,
  jobData: jobList,
  industryData: industryList
})

const actions = {}

export default { state, actions }