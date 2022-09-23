import React from "react";

class Comment extends React.Component {
    constructor({ name, date, comment, avatar, key }) {
        super();
        this.state = { name, date, comment, avatar, key, like: 0 };

        this.handleLike = this.handleLike.bind(this);
    }

    handleLike() {
        this.setState({
            like: this.state.like + 1,
        });
    }

    render() {
        return (
            <div className="ui container comments" key={this.state.key}>
                <div className="comment">
                    <a href="/" className="avatar">
                        <img src={this.state.avatar} alt="avatar" />
                    </a>
                    <div className="content">
                        <a href="/" className="author">
                            {this.state.name}
                        </a>
                        <div className="metadata">
                            <span className="date">{this.state.date}</span> | <span className="date">Liked: {this.state.like}</span>
                        </div>
                        <div className="text">{this.state.comment}</div>
                        <button onClick={(e) => this.handleLike(e)}>Like</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;
