import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBZmb403O3ALUDM1PUmqdiAj1dvcZo6Aik';

class App extends Component {
    constructor(props){
        super(props);
        // set default state value to be empty
        this.state = { videos: [] };
        // instantly update the video list. Fill it in with some videos.
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
            // this.setState({ videos: videos });
        });
    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]}/>
                {/* pass in info as a prop about video array to VideoList 
                component do it can use it */}
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }  
}

// render the entire App on the screen
ReactDOM.render(<App />, document.querySelector('.container'));