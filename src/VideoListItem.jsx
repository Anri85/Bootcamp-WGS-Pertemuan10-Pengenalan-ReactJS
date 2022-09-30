import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <div className="item">
            <div onClick={() => onVideoSelect(video)} className=" video-item">
                <img className="ui medium rounded image" src={imageUrl} style={{ marginBottom: "10px", width: "170px" }} alt={video.snippet.title} />
                <div className="content" style={{ marginTop: "5px", marginBottom: "5px" }}>
                    <h3 className="ui header">{video.snippet.title}</h3>
                </div>
            </div>
        </div>
    );
};

export default VideoListItem;
