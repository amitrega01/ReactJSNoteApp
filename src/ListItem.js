import React from "react";
import AddNote from "./AddNote";
import "./styles.css";

export default class ListItem extends React.Component {
  render() {
    return (
      <li className="listItem">
        <p>{this.props.text}</p>
        <button
          className="deleteBtn"
          onClick={() => this.props.click(this.props.id)}
        >
          <i class="fas fa-trash-alt" />
        </button>
        <span className="date"> {this.props.date}</span>
      </li>
    );
  }
}
