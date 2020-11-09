import React from 'react';
import './VideoRow.css';
import Avatar from '@material-ui/core/Avatar';

function VideoRow({ views, description, channelImage,
    timestamp, channel, title, image}) {
    return (
        <div className="VideoRow">
            <img src={image} alt="" className="VideoRow__image" /> 
            <div className="VideoRow__whole">
            <h2>{title}</h2> 
            <p>{views} . {timestamp}</p>
            <div className="VideoRow__text" >
            <Avatar src={channelImage} />
            <p>{channel}</p>
            </div>    
                <p>{description}</p>
            </div>    
        </div>
    )
}

export default VideoRow
