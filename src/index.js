import React from "react";
import ReactDOM from "react-dom";
import AddNote from "./AddNote";
import "./styles.css";

export default class App extends React.Component {
  state = {
    title: "Notes",
    data: []
  };
  addNote = value => {
    this.setState({
      data: [
        ...this.state.data,
        { text: value.text, date: value.date, id: this.state.data.length }
      ]
    });
  };

  render() {
    const listItems = this.state.data.map(item => (
      <li className="listItem">
        <p>{item.text}</p>
        <button
          className="deleteBtn"
          onClick={() => {
            if (confirm("Usunąc notatke?")) {
              this.setState({
                data: this.state.data.filter(check => check !== item)
              });
            } else {
              // Do nothing!
            }
          }}
        >
          <i class="fas fa-trash-alt" />
        </button>
        <span className="date"> {item.date}</span>
      </li>
    ));
    return (
      <div className="App">
        <AddNote addNote={this.addNote} />
        <ul className="list">{listItems}</ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
