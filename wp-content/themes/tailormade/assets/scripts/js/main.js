// import main SASS file
import '../../styles/scss/style.scss'

// Import Foundation
import 'foundation-sites/dist/js/foundation'

// import JS modules to compile
import './init-foundation'
import './wp-foundation'
import './modules/navMenu'
// import './modules/lazyLoad'
import './modules/fancybox'
import './modules/scrollMagicAnimations'
import './modules/store-locator'
import './modules/meetTheMaker'
// import './modules/headerScrollAnimations'
// import './modules/popmotionAnimations'

 
// UNCOMMENT FOR SITES NOT BUILT WITH COMPILED JAVASCRIPT
// var objectPollyScript = document.createElement('script');
// objectPollyScript.type = 'text/javascript';
// objectPollyScript.src = 'https://unpkg.com/es7-object-polyfill';    
// document.getElementsByTagName('head')[0].appendChild(objectPollyScript);


$(document).ready(() => {
    if ($('.wpcf7-form').length) {

        var canada = {
            alberta: {
                name: 'Alberta',
                abbreviation: 'AB'
            },
            britishColumbia: {
                name: 'British Columbia',
                abbreviation: 'BC'
            },
            manitoba: {
                name: 'Manitoba',
                abbreviation: 'MB'
            },
            newBrunswick: {
                name: 'New Brunswick',
                abbreviation: 'NB'
            },
            newfoundlandAndLabrador: {
                name: 'Newfoundland and Labrator',
                abbreviation: 'NL'
            },
            northwestTerritories: {
                name: 'Northwest Territories',
                abbreviation: 'NT'
            },
            novaScotia: {
                name: 'Nova Scotia',
                abbreviation: 'NS'
            },
            nunavut: {
                name: 'Nunavut',
                abbreviation: 'NU'
            },
            ontario: {
                name: 'Ontario',
                abbreviation: 'ON'
            },
            princeEdwardIsland: {
                name: 'Prince Edward Island',
                abbreviation: 'PE'
            },
            quebec: {
                name: 'Quebec',
                abbreviation: 'QC'
            },
            saskatchewan: {
                name: 'Saskatchewan',
                abbreviation: 'SK'
            },
            yukon: {
                name: 'Yukon',
                abbreviation: 'YT'
            },
        }

        var unitedStates = {
            alabama: {
                name: 'Alabama',
                abbreviation: 'AL'
            },
            alaska: {
                name: 'Alaska',
                abbreviation: 'AK'
            },
            arizona: {
                name: 'Arizona',
                abbreviation: 'AZ'
            },
            arkansas: {
                name: 'Arkansas',
                abbreviation: 'AR'
            },
            california: {
                name: 'California',
                abbreviation: 'CA'
            },
            colorado: {
                name: 'Colorado',
                abbreviation: 'CO'
            },
            connecticut: {
                name: 'Connecticut',
                abbreviation: 'CT'
            },
            deleware: {
                name: 'Delaware',
                abbreviation: 'DE'
            },
            districtOfColumbia: {
                name: 'District of Columbia',
                abbreviation: 'DC'
            },
            florida: {
                name: 'Florida',
                abbreviation: 'FL'
            },
            georgia: {
                name: 'Georgia',
                abbreviation: 'GA'
            },
            hawaii: {
                name: 'Hawaii',
                abbreviation: 'HI'
            },
            idaho: {
                name: 'Idaho',
                abbreviation: 'ID'
            },
            illinios: {
                name: 'Illinois',
                abbreviation: 'IL'
            },
            indiana: {
                name: 'Indiana',
                abbreviation: 'IN'
            },
            iowa: {
                name: 'Iowa',
                abbreviation: 'IA'
            },
            kansas: {
                name: 'Kansas',
                abbreviation: 'KS'
            },
            kentucky: {
                name: 'Kentucky',
                abbreviation: 'KY'
            },
            louisiana: {
                name: 'Louisiana',
                abbreviation: 'LA'
            },
            maine: {
                name: 'Maine',
                abbreviation: 'ME'
            },
            maryland: {
                name: 'Maryland',
                abbreviation: 'MD'
            },
            massachusetts: {
                name: 'Massachusetts',
                abbreviation: 'MA'
            },
            michigan: {
                name: 'Michigan',
                abbreviation: 'MI'
            },
            minnesota: {
                name: 'Minnesota',
                abbreviation: 'MN'
            },
            mississippi: {
                name: 'Mississippi',
                abbreviation: 'MS'
            },
            missouri: {
                name: 'Missouri',
                abbreviation: 'MO'
            },
            montana: {
                name: 'Montana',
                abbreviation: 'MT'
            },
            nebraska: {
                name: 'Nebraska',
                abbreviation: 'NE'
            },
            nevada: {
                name: 'Nevada',
                abbreviation: 'NV'
            },
            newHampshire: {
                name: 'New Hampshire',
                abbreviation: 'NH'
            },
            newJersey: {
                name: 'New Jersey',
                abbreviation: 'NJ'
            },
            newMexico: {
                name: 'New Mexico',
                abbreviation: 'NM'
            },
            newYork: {
                name: 'New York',
                abbreviation: 'NY'
            },
            northCarolina: {
                name: 'North Carolina',
                abbreviation: 'NC'
            },
            northDakota: {
                name: 'North Dakota',
                abbreviation: 'ND'
            },
            ohio: {
                name: 'Ohio',
                abbreviation: 'OH'
            },
            oklahoma: {
                name: 'Oklahoma',
                abbreviation: 'OK'
            },
            oregon: {
                name: 'Oregon',
                abbreviation: 'OR'
            },
            pennsylvania: {
                name: 'Pennsylvania',
                abbreviation: 'PA'
            },
            rhodeIsland: {
                name: 'Rhode Island',
                abbreviation: 'RI'
            },
            southCarolina: {
                name: 'South Carolina',
                abbreviation: 'SC'
            },
            southDakota: {
                name: 'South Dakota',
                abbreviation: 'SD'
            },
            tennessee: {
                name: 'Tennessee',
                abbreviation: 'TN'
            },
            texas: {
                name: 'Texas',
                abbreviation: 'TX'
            },
            utah: {
                name: 'Utah',
                abbreviation: 'UT'
            },
            vermont: {
                name: 'Vermont',
                abbreviation: 'VT'
            },
            virginia: {
                name: 'Virginia',
                abbreviation: 'VA'
            },
            washington: {
                name: 'Washington',
                abbreviation: 'WA'
            },
            westVirginia: {
                name: 'West Virginia',
                abbreviation: 'WV'
            },
            wisconsin: {
                name: 'Wisconsin',
                abbreviation: 'WI'
            },
            wyoming: {
                name: 'Wyoming',
                abbreviation: 'WY'
            }
        }


        // Initiate Country check
        getStates();

        function getStates() {
            // Check initial country Value
            if ($('#country').val() == 'US') {
                $('#state-other').hide()
                $('label[for="state-other"]').parent('.small').hide()
                $('label[for="state"]').parent('.small').show()
                $('#state').show()
                Object.values(unitedStates).forEach(state => {
                    $('#state').append('<option value="' + state.abbreviation + '">' + state.name + '</option>')
                });
            }
            if ($('#country').val() == 'Canada') {
                $('#state-other').hide()
                $('label[for="state-other"]').parent('.small').hide()
                $('label[for="state"]').parent('.small').show()
                $('#state').show()
                Object.values(canada).forEach(state => {
                    $('#state').append('<option value="' + state.abbreviation + '">' + state.name + '</option>')
                });
            }
            if ($('#country').val() == 'Other') {
                $('#state').hide()
                $('label[for="state"]').parent('.small').hide()
                $('#state-other').show()
                $('label[for="state-other"]').parent('.small').show()
            }
        }

        // Clear all state option fields
        function refreshStates() {
            $('#state option').each((index, obj) => {
                $(obj).remove()
            })
        }


        // Watch for country select change
        $('#country option').on('click', (e) => {
            e.preventDefault()
            refreshStates()
            getStates()
        });
    }
});