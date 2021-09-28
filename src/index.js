import './sass/main.scss';
import fetchCountries from './js/fetchCountries';
import countryList from './templates/country-list.hbs'
import countryCardTpl from './templates/country-card.hbs';
import debounce from 'lodash.debounce';

const refs = {
    searchQuery : document.querySelector('#input'),
    countryList : document.querySelector('.js-articles'),
    wrapper : document.querySelector('.wrapper')
}

    refs.searchQuery.addEventListener('input',debounce(onSearch, 500)) ;

    function onSearch(e) {
        refs.countryList.innerHTML = '';
        const userRequest = e.target.value.trim()
        if (userRequest.length < 1) return;
        console.log(userRequest)
        fetchCountries(userRequest).then(country => {
            if (!country) return;
            if (country.length > 1 && country.length <=10 ) {
                return (refs.countryList.innerHTML = countryList(country))
            }
            if (country.length === 1) {
                return (refs.wrapper.innerHTML = countryCardTpl(...country))
            }
            alert('Too many matches found. Please enter a more specific query!')
        })
    }




    


