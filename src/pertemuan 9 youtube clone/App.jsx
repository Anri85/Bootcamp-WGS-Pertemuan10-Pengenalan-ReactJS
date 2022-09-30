// import logo from "./logo.svg";
import React from "react";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import axios from "./axios";

import "./styles.css";

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onSearchSubmit = async (term) => {
        const response = await axios.get("/search", {
            params: { q: term },
        });
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div class="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
