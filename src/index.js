import './sass/main.scss';
//import debounce from 'lodash/debounce ';
import fetchCountries from './js/fetchCountries';

import countryCardTpl from './templates/country-card.hbs';

const refs = {
    searchQuery : document.querySelector('#searchQuery')
}

    refs.searchQuery.addEventListener('change',(e) => {
        e.preventDefault()
        console.log(e.target.value)
        const {value} = e.target.value
        fetchCountries(value) ;
        e.target.value = '';
    } ) ;

    
//     function onSearch(e) {
//         e.preventDefault()
//         newFetchCountry.query = e.currentTarget.elements.query.value;
//         newFetchCountry.fetchCountries(searchQuery);
//     }



    


