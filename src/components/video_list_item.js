import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    // const video = props.video; <- the same as ({ video })
    // const onVideoSelect = props.onVideoSelect; <- the same as ({ onVideoSelect })

    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        // whenever you click on an item,
        // call this fuction with a video that has been passed
        <li onClick={() => onVideoSelect(video)} className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imageUrl} />
                </div>

                <div className='media-body'>
                    <div className='media-heading'>{video.snippet.title}</div>
                </div>
            </div>
        </li> 
    );
};

// make it accessable for files that use this component
export default VideoListItem;