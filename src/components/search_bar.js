import React, { Component } from 'react'

//functional component
// const SearchBar = () => {
//     return <input type="text"/>
// }

//class based component
// class SearchBar extends React.Component{
//     render(){
//         return <input type="text"/>
//     }
// }

//this is proper ES6 syntax. Add { Component } to the import and drop React. off extends
class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' }
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    type="text" onChange={event => this.set.state({term: event.target.value})}/>
            </div>
        );
    }
}

export default SearchBar;