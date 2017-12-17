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
        // set default state values to be empty
        this.state = { 
            videos: [],
            selectedVideo: null
         };
        // instantly update the video list. Fill it in with some videos
        //... and set selectedVideo to a first video from the videos array
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             });
            // this.setState({ videos: videos });
        });
    }
    render(){
        return (
            <div>
                <SearchBar />
                {/* pass in a specific video to VideoDetail component */}
                <VideoDetail video={this.state.selectedVideo}/>
                {/* pass in info as a prop about video array to VideoList 
                component do it can use it || pass in a function 
                that updates selectedVideo state */}
                <VideoList videos={this.state.videos} 
                onVideoSelect={selectedVideo => this.setState({ selectedVideo })}/>
            </div>
        );
    }  
}

// render the entire App on the screen
ReactDOM.render(<App />, document.querySelector('.container'));