import React from "react";
import AddNote from "./AddNote";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  addNote = value => {
    this.props.dispatch({
      type: "ADD_NOTE",
      id: this.props.notes.length,
      title: value.title ? value.title : "Brak tytułu",
      text: value.text,
      date: value.date
    });
  };
  deleteItem = id => {
    this.props.dispatch({ type: "DELETE_NOTE", id: id });
  };
  render() {
    const listItems = this.props.notes.map(item => (
      <ListItem
        title={item.title}
        id={item.id}
        text={item.text}
        date={item.date}
        click={this.deleteItem}
      />
    ));
    return (
      <div className="App">
        <AddNote addNote={this.addNote} />
        <ul className="list">{listItems}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});
export default connect(mapStateToProps)(App);
