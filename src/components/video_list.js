import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        // return an instance of VideoListItem and set a special key for each item inside the array 
        return (
            <VideoListItem 
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video} />
        );
    });

    return (
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    );
};
// make it accessable for files that use this component
export default VideoList;