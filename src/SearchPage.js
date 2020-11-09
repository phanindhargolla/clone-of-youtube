import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
                Channel="Clever Programmer"
                verified
                subs="659k"
                noOfVideos={382}
                description="You can find awesome programming tuts"
            />

            <hr />

            <VideoRow
                views = "3.6K views"
                description = "Do you want to learn GIT?" 
                channelImage = "https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo"
                timestamp = "Streamed 1 day ago" 
                channel = "Clever Programmer" 
                title = "Understanding GIT (for Beginners)"
                image = "https://i.ytimg.com/vi/YzcnqYNXM90/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==\u0026rs=AOn4CLBlWhVQTFu7YLzBxOZnhssUIvw_XA"
                />
        </div>
    )
}

export default SearchPage
