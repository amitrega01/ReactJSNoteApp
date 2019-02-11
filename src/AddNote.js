import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit = event => {
    if (this.state.value != "") {
      let date = new Date();
      let note = {
        text: this.state.value,
        date: date.toLocaleDateString() + " " + date.toLocaleTimeString()
      };
      this.props.addNote(note);
      this.setState({ value: "" });
      event.preventDefault();
    } else {
      alert("Podaj treść notatki");
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input
          className="input"
          type="text"
          name="note"
          onChange={this.handleChange}
          value={this.state.value}
          placeholder="Nowa notatka..."
        />

        <input className="button" type="submit" value="Submit" />
      </form>
    );
  }
}
