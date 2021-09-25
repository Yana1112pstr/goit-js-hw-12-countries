export default  function fetchCountries(searchQuery) { 
        return fetch(`https://restcountries.com/v3/name/${searchQuery}`)
        .then (response => {
            if (response.status === 200) {
                return response.json()
            }
            else {
                throw new Error('Error')
            }
        } )
        .then ((data) => {
            return data;
        })
        .catch (error => {console.log(error);})
    }


        // .then ((array) => {
        //     let result = array.map((item) => {
        //         console.log(item.name);
        //         return `<li>${item.name}</li>`;
        //     })
        // console.log(result.join(''));
        // return result.join('');
        // })

    // get query() {
    //     return searchQuery;
    // }
    // set query(newquery) {
    //     searchQuery = newquery;
    // }
