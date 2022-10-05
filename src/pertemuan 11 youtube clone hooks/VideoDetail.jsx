import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className="ui container">
            <div className="ui embed" data-source="youtube" data-id={video.id.videoId}>
                <iframe className="embed-responsive-item" title={video.id.videoId} src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
            </div>
            <div className="content" style={{ marginTop: "10px" }}>
                <h2 className="ui header">{video.snippet.title}</h2>
                <h4 className="ui header">{video.snippet.description}</h4>
            </div>
        </div>
    );
};

export default VideoDetail;
