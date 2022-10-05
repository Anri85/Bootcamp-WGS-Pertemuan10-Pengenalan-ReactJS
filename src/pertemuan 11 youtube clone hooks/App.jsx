import React, { useState } from "react";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import axios from "./axios";

import "./styles.css";

const App = () => {
    const [videos, setVideos] = useState();
    const [selectedVideo, setSelectedVideo] = useState();

    const onSearchSubmit = async (term) => {
        const response = await axios.get("/search", {
            params: { q: term },
        });
        setVideos(response?.data?.items);
        setSelectedVideo(response?.data?.items[0]);
    };

    return (
        <div className="ui container" style={{ marginTop: "10px" }}>
            <SearchBar onSubmit={onSearchSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={(selectedVideo) => setSelectedVideo(selectedVideo)} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
