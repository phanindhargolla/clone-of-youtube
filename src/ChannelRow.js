import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChannelRow.css';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({ image, Channel, verified, subs,noOfVideos, description }) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={Channel} src={image} />
        <div className="channelRow__text">
                <h4>{Channel} {verified && <VerifiedIcon />}</h4>
                <p>{subs} subscribers . {noOfVideos} videos</p>
                <p>{description}</p>
        </div>    
        </div>

    )
}

export default ChannelRow
