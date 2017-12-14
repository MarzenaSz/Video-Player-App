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
            <div>
                {/* update state and rerender whenever event onChange occures */}
                <input value={this.state.term} onChange={e => this.setState({ term: e.target.value})}/>
                <p>The input value: {this.state.term}</p>
            </div>
        );
    }
}
// make it accessable to other files that import SearchBar component
export default SearchBar;