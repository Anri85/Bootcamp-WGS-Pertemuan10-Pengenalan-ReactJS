import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />;
    });

    return (
        <div className="ui segment">
            <div className="ui relaxed divided list">{videoItems}</div>
        </div>
        // <div className="ui section divider" style={{ margin: "auto" }}>

        // </div>
    );
};

export default VideoList;
