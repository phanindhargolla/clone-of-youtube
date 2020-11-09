import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Video.css';

function Video({ image, title, channel, views, timestamp, channelImage }) {
    return (
      <div className="video">
        <img className="video__image" src={image} alt="" />
        <div className="video__info">
          <Avatar className="video__avatar" alt={channel} src={channelImage} />
          <div className="video__text">
            <h4>{title}</h4>
            <p>{channel}</p>
                    <p> {views} . {timestamp}</p>   
          </div>
        </div>
      </div>
    );
}

export default Video
