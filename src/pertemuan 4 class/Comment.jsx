import React from "react";

// class component with props
// class Comment extends React.Component {
//     render() {
//         return (
//             <div className="ui container comments" key={this.props.key}>
//                 <div className="comment">
//                     <a href="/" className="avatar">
//                         <img src={this.props.avatar} alt="avatar" />
//                     </a>
//                     <div className="content">
//                         <a href="/" className="author">
//                             {this.props.name}
//                         </a>
//                         <div className="metadata">
//                             <span className="date">{this.props.date}</span>
//                         </div>
//                         <div className="text">{this.props.comment}</div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// class component with state
class Comment extends React.Component {
    constructor({ name, date, comment, avatar, key }) {
        super();
        this.state = { name, date, comment, avatar, key };
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
                            <span className="date">{this.state.date}</span>
                        </div>
                        <div className="text">{this.state.comment}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;
