// import logo from "./logo.svg";

import Comment from "./Comment";

function App({ data }) {
    return data.map((d, i) => <Comment name={d.name} date={d.date} comment={d.comment} avatar={d.avatar} key={i} />);
}

export default App;
