import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        // set default value for this state
        this.state = { term: '' };

    }
    // instead of e => console.log(e.target.value) you can also use
    // this method and pass it inside of onChange
    //onInputChange(e) {
    //    console.log(e.target.value);
    //}

    render() {
        
        return (
            <div className='search-bar'>
                {/* update state and rerender whenever event onChange occures */}
                <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term) {
        // update the term state
        this.setState({ term });
        // or this.setState({ term : term });
        // send the into into videoSearch method
        this.props.onTermSearchChange(term);

    }
}
// make it accessable to other files that import SearchBar component
export default SearchBar;