import React from "react";

const ImageList = (props) => {
    const images = props.images.map((i) => {
        return <ImageCard key={i.id} image={i} />;
    });
    return <div className="image-list">{images}</div>;
};

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 9.99);
        this.setState({ spans: spans });
    };

    render() {
        return <img src={this.props.image.urls.regular} alt={this.props.image.description} ref={this.imageRef} style={{ gridRowEnd: `span ${this.state.spans}` }} />;
    }
}

export default ImageList;
