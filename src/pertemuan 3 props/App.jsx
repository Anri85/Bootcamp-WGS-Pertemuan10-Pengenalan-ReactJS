// import logo from "./logo.svg";
import { faker } from "@faker-js/faker";

function App({ name, comment, date }) {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {name}
                    </a>
                    <div className="metadata">
                        <span className="date">{date}</span>
                    </div>
                    <div className="text">{comment}</div>
                </div>
            </div>
        </div>
    );
}

export default App;
