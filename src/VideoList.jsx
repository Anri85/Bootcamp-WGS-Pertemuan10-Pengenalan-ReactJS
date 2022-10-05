import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = ({ videos, onVideoSelect }) => {
    if (videos) {
        const videoItems = videos.map((video) => {
            return <VideoListItem onVideoSelect={onVideoSelect} key={video.etag} video={video} />;
        });
        return (
            <div className="ui segment">
                <div className="ui relaxed divided list">{videoItems}</div>
            </div>
        );
    }
};

export default VideoList;
