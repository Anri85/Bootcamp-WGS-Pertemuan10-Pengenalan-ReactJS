// import logo from "./logo.svg";

function App({ data }) {
    return data.map((d, i) => (
        <div className="ui container comments" key={i}>
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={d.avatar} alt="avatar" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {d.name}
                    </a>
                    <div className="metadata">
                        <span className="date">{d.date}</span>
                    </div>
                    <div className="text">{d.comment}</div>
                </div>
            </div>
        </div>
    ));
}

export default App;
