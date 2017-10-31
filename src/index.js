import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'


const API_KEY = 'AIzaSyCgITNrxsiojZi37VQJ_QzCC1TVf54r_vg';

//create a new component that will produce some html

const App = () => {
    return (
        <SearchBar/>
    )
}

//Add the new component to the DOM so that it users can see it.

ReactDOM.render(<App/>, document.querySelector('.container'));
