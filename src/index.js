import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyCgITNrxsiojZi37VQJ_QzCC1TVf54r_vg';

//create a new component that will produce some html

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: []};

        YTSearch({key: API_KEY, term: 'Slayer'}, (videos) => {
            this.setState({ videos })
        });
}
    render() {
        return (
            <SearchBar/>,
            <VideoList videos={this.state.videos} />
        )
    }
}

//Add the new component to the DOM so that it users can see it.

ReactDOM.render(<App/>, document.querySelector('.container'));
