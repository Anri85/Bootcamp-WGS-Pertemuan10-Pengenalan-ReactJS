import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { firstname: "", lastname: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("A name was submitted " + this.state.firstname + " " + this.state.lastname);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" onChange={this.handleChange} name="firstname" />
                <input type="text" onChange={this.handleChange} name="lastname" />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;
