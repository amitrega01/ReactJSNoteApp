import React from "react";

import "../styles.css";

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", text: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit = event => {
    if (this.state.text != "") {
      let date = new Date();
      let note = {
        title: this.state.title ? this.state.title : undefined,
        text: this.state.text,
        date: date.toLocaleDateString() + " " + date.toLocaleTimeString()
      };
      this.props.addNote(note);
      this.setState({ text: "", title: "" });
    } else {
      alert("Podaj treść notatki");
    }
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="column">
          <input
            className="input"
            type="text"
            name="note"
            onChange={this.handleChangeTitle}
            value={this.state.title}
            placeholder="Tytuł"
          />
          <input
            className="inputSmall"
            type="text"
            name="note"
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="Treść notatki"
          />
        </div>
        <input className="button" type="submit" value="Submit" />
      </form>
    );
  }
}
